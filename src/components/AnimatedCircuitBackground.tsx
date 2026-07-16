import React, { useMemo } from 'react'

interface AnimatedCircuitBackgroundProps {
  type?: 'electric' | 'background'
  className?: string
}

interface Point {
  x: number
  y: number
}

interface Trace {
  d: string
  color: string
  width: number
  duration: number
  delay: number
  vias: Point[]
  pad: Point | null
}

const VIEW_W = 1600
const VIEW_H = 900

// Mostly cyan with occasional blue and rare orange, like signal/power nets on a real board.
// Resolved through theme variables so the traces adapt to light/dark mode.
const TRACE_COLORS = [
  'rgb(var(--electric-cyan))',
  'rgb(var(--electric-cyan))',
  'rgb(var(--electric-cyan))',
  'rgb(var(--electric-cyan))',
  'rgb(var(--neon-blue))',
  'rgb(var(--neon-blue))',
  'rgb(var(--cyber-orange))',
]

// Deterministic PRNG so the board layout is identical on every mount
const mulberry32 = (seed: number) => () => {
  seed |= 0
  seed = (seed + 0x6d2b79f5) | 0
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

// Routes one trace across the board: straight runs joined by 45° jogs,
// the way autorouted PCB tracks dodge between components.
const routeTrace = (rand: () => number, horizontal: boolean): Trace => {
  const points: Point[] = []
  const vias: Point[] = []

  let x = horizontal ? -40 : rand() * VIEW_W
  let y = horizontal ? rand() * VIEW_H : -40
  points.push({ x, y })

  const limit = horizontal ? VIEW_W + 40 : VIEW_H + 40
  const endsAtPad = rand() < 0.45
  const padStop = 0.3 + rand() * 0.5 // fraction of the board where a pad-terminated trace stops

  let travelled = horizontal ? x : y
  while (travelled < limit) {
    // straight run
    const run = 110 + rand() * 260
    if (horizontal) x += run
    else y += run
    points.push({ x, y })
    travelled = horizontal ? x : y

    if (endsAtPad && travelled > limit * padStop) break

    // 45° jog
    const jog = 30 + rand() * 90
    const sign = rand() < 0.5 ? -1 : 1
    if (horizontal) {
      x += jog
      y += sign * jog
    } else {
      x += sign * jog
      y += jog
    }
    points.push({ x, y })
    travelled = horizontal ? x : y

    // some bends get a via, like a layer change
    if (rand() < 0.45) vias.push({ x, y })
  }

  const d = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(' ')

  const duration = 5 + rand() * 7
  return {
    d,
    color: TRACE_COLORS[Math.floor(rand() * TRACE_COLORS.length)],
    width: rand() < 0.25 ? 2.5 : 1.5, // a few thicker power traces
    duration,
    delay: -rand() * duration, // negative delay: pulses are already mid-flight on load
    vias,
    pad: endsAtPad ? points[points.length - 1] : null,
  }
}

const AnimatedCircuitBackground: React.FC<AnimatedCircuitBackgroundProps> = ({
  type = 'electric',
  className = '',
}) => {
  const traces = useMemo(() => {
    const rand = mulberry32(0x5117c0de)
    const list: Trace[] = []
    for (let i = 0; i < 18; i++) {
      list.push(routeTrace(rand, rand() < 0.62))
    }
    return list
  }, [])

  return (
    <div className={`fixed inset-0 overflow-hidden bg-night-graphite pointer-events-none ${className}`}>
      {/* PCB traces with travelling current pulses */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: type === 'electric' ? 0.75 : 0.35 }}
        aria-hidden="true"
      >
        {traces.map((trace, i) => (
          <g key={i}>
            {/* copper trace */}
            <path
              d={trace.d}
              fill="none"
              stroke={trace.color}
              strokeOpacity={0.13}
              strokeWidth={trace.width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* bright current pulse */}
            <path
              d={trace.d}
              fill="none"
              stroke={trace.color}
              strokeOpacity={0.8}
              strokeWidth={trace.width + 1}
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1000}
              className="trace-pulse"
              style={{ animationDuration: `${trace.duration}s`, animationDelay: `${trace.delay}s` }}
            />
            {/* vias at layer changes */}
            {trace.vias.map((via, j) => (
              <circle
                key={j}
                cx={via.x}
                cy={via.y}
                r={3}
                fill="rgb(var(--night-graphite))"
                stroke={trace.color}
                strokeOpacity={0.35}
                strokeWidth={1.2}
              />
            ))}
            {/* terminating pad */}
            {trace.pad && (
              <g>
                <circle
                  cx={trace.pad.x}
                  cy={trace.pad.y}
                  r={5}
                  fill="none"
                  stroke={trace.color}
                  strokeOpacity={0.4}
                  strokeWidth={1.5}
                />
                <circle cx={trace.pad.x} cy={trace.pad.y} r={1.8} fill={trace.color} fillOpacity={0.5} />
              </g>
            )}
          </g>
        ))}
      </svg>

      {/* Faint routing grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(var(--electric-cyan)) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(var(--electric-cyan)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Vignette so content stays readable over the board */}
      <div className="absolute inset-0 bg-gradient-to-br from-night-graphite/60 via-transparent to-night-graphite/60" />
    </div>
  )
}

export default AnimatedCircuitBackground
