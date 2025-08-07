import React, { useState } from 'react'

interface AnimatedCircuitBackgroundProps {
  type?: 'electric' | 'background'
  className?: string
}

const AnimatedCircuitBackground: React.FC<AnimatedCircuitBackgroundProps> = ({
  type = 'electric',
  className = ''
}) => {
  const [svgError, setSvgError] = useState(false)

  const svgPath = type === 'electric'
    ? '/assets/svg/circuit-board-electric.svg'
    : '/assets/svg/circuit-board-background.svg'

  return (
    <div className={`absolute inset-0 overflow-hidden bg-night-graphite ${className}`}>
      {/* Fallback Dark Background */}
      <div className="absolute inset-0 bg-night-graphite" />
      
      {/* SVG Background with Error Handling */}
      {!svgError && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${svgPath})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: type === 'electric' ? 0.8 : 0.15,
            filter: type === 'electric'
              ? 'brightness(1.2) contrast(1.1) saturate(1.3)'
              : 'brightness(0.8) contrast(1.2) saturate(1.5)'
          }}
          onError={() => setSvgError(true)}
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-night-graphite/40 via-smoky-steel/20 to-night-graphite/40" />

      {/* Animated overlay elements */}
      <div className="absolute inset-0">
        {/* Data Flow Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-electric-cyan rounded-full animate-ping opacity-75" style={{animationDelay: '0s'}} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-blue rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyber-orange rounded-full animate-ping opacity-70" style={{animationDelay: '2s'}} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-electric-cyan rounded-full animate-ping opacity-50" style={{animationDelay: '3s'}} />
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-neon-blue rounded-full animate-ping opacity-65" style={{animationDelay: '4s'}} />

        {/* Circuit Connection Nodes - Glowing Points */}
        <div className="absolute top-1/6 left-1/6 w-3 h-3 bg-electric-cyan rounded-full animate-pulse shadow-lg shadow-electric-cyan/50" />
        <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-neon-blue rounded-full animate-pulse shadow-lg shadow-neon-blue/50" />
        <div className="absolute bottom-1/6 left-1/2 w-3 h-3 bg-cyber-orange rounded-full animate-pulse shadow-lg shadow-cyber-orange/50" />
        <div className="absolute bottom-1/2 right-1/3 w-2 h-2 bg-electric-cyan rounded-full animate-pulse shadow-lg shadow-electric-cyan/50" />

        {/* Circuit Connection Points - Larger Nodes */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-electric-cyan/30 rounded-full animate-pulse border border-electric-cyan/50" />
        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-neon-blue/30 rounded-full animate-pulse border border-neon-blue/50" />
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-cyber-orange/30 rounded-full animate-pulse border border-cyber-orange/50" />

        {/* Complex Circuit Patterns with Curves */}
        <div className="absolute top-1/3 left-1/3 w-32 h-32 border border-electric-cyan/20 rounded-full animate-pulse" style={{transform: 'rotate(45deg)'}} />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-neon-blue/20 rounded-full animate-pulse" style={{transform: 'rotate(-30deg)'}} />
        <div className="absolute top-2/3 left-1/2 w-20 h-20 border border-cyber-orange/20 rounded-full animate-pulse" style={{transform: 'rotate(60deg)'}} />

        {/* Vertical Circuit Segments with Curves */}
        <div className="absolute top-1/4 left-1/2 w-1 h-16 bg-gradient-to-b from-electric-cyan/50 to-transparent animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-1 h-20 bg-gradient-to-b from-neon-blue/50 to-transparent animate-pulse" />
        <div className="absolute top-1/2 left-1/6 w-1 h-12 bg-gradient-to-b from-cyber-orange/50 to-transparent animate-pulse" />

        {/* Horizontal Circuit Segments */}
        <div className="absolute top-1/3 left-1/4 w-24 h-1 bg-gradient-to-r from-electric-cyan/50 to-transparent animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-20 h-1 bg-gradient-to-r from-neon-blue/50 to-transparent animate-pulse" />
        <div className="absolute top-2/3 left-1/3 w-16 h-1 bg-gradient-to-r from-cyber-orange/50 to-transparent animate-pulse" />

        {/* Diagonal Circuit Lines */}
        <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-electric-cyan/40 to-transparent animate-pulse" style={{transform: 'rotate(45deg)'}} />
        <div className="absolute bottom-1/4 right-1/4 w-28 h-0.5 bg-gradient-to-r from-neon-blue/40 to-transparent animate-pulse" style={{transform: 'rotate(-45deg)'}} />
        <div className="absolute top-1/2 left-1/3 w-24 h-0.5 bg-gradient-to-r from-cyber-orange/40 to-transparent animate-pulse" style={{transform: 'rotate(30deg)'}} />

        {/* Floating Circuit Elements */}
        <div className="absolute top-1/6 right-1/6 w-8 h-8 border border-electric-cyan/30 rounded animate-float" style={{animationDelay: '0s'}} />
        <div className="absolute bottom-1/6 left-1/6 w-6 h-6 border border-neon-blue/30 rounded animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 right-1/2 w-10 h-10 border border-cyber-orange/30 rounded animate-float" style={{animationDelay: '2s'}} />

        {/* Data Flow Lines */}
        <div className="absolute top-1/4 left-1/4 w-16 h-0.5 bg-gradient-to-r from-electric-cyan/60 to-transparent animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-12 h-0.5 bg-gradient-to-r from-neon-blue/60 to-transparent animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-14 h-0.5 bg-gradient-to-r from-cyber-orange/60 to-transparent animate-pulse" />

        {/* Power Distribution Nodes */}
        <div className="absolute top-1/5 left-1/5 w-6 h-6 bg-electric-cyan/20 rounded-full animate-pulse border border-electric-cyan/40" />
        <div className="absolute bottom-1/5 right-1/5 w-6 h-6 bg-neon-blue/20 rounded-full animate-pulse border border-neon-blue/40" />
        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-cyber-orange/20 rounded-full animate-pulse border border-cyber-orange/40" />

        {/* Signal Processing Elements */}
        <div className="absolute top-1/3 right-1/3 w-12 h-12 border border-electric-cyan/25 rounded-lg animate-pulse" style={{transform: 'rotate(15deg)'}} />
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 border border-neon-blue/25 rounded-lg animate-pulse" style={{transform: 'rotate(-15deg)'}} />

        {/* Clock Distribution */}
        <div className="absolute top-1/4 left-1/2 w-8 h-8 border border-cyber-orange/25 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/2 w-8 h-8 border border-electric-cyan/25 rounded-full animate-pulse" />

        {/* Control Logic Elements */}
        <div className="absolute top-1/2 left-1/6 w-16 h-8 border border-neon-blue/25 rounded-lg animate-pulse" />
        <div className="absolute bottom-1/2 right-1/6 w-16 h-8 border border-cyber-orange/25 rounded-lg animate-pulse" />

        {/* Memory Interface */}
        <div className="absolute top-2/3 left-1/4 w-20 h-6 border border-electric-cyan/25 rounded-lg animate-pulse" />
        <div className="absolute bottom-2/3 right-1/4 w-20 h-6 border border-neon-blue/25 rounded-lg animate-pulse" />

        {/* I/O Interface */}
        <div className="absolute top-1/6 left-1/3 w-12 h-12 border border-cyber-orange/25 rounded-lg animate-pulse" style={{transform: 'rotate(45deg)'}} />
        <div className="absolute bottom-1/6 right-1/3 w-12 h-12 border border-electric-cyan/25 rounded-lg animate-pulse" style={{transform: 'rotate(-45deg)'}} />

        {/* Status Indicators */}
        <div className="absolute top-1/5 right-1/5 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
        <div className="absolute bottom-1/5 left-1/5 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-1/2 w-3 h-3 bg-red-400 rounded-full animate-pulse" />

        {/* Additional Dynamic Elements */}
        <div className="absolute top-1/8 left-1/8 w-4 h-4 bg-electric-cyan/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-1/8 right-1/8 w-4 h-4 bg-neon-blue/40 rounded-full animate-bounce" style={{animationDelay: '1.5s'}} />
        <div className="absolute top-1/2 left-1/8 w-4 h-4 bg-cyber-orange/40 rounded-full animate-bounce" style={{animationDelay: '2.5s'}} />
        <div className="absolute bottom-1/2 right-1/8 w-4 h-4 bg-electric-cyan/40 rounded-full animate-bounce" style={{animationDelay: '3.5s'}} />

        {/* Circuit Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, #00ffff 1px, transparent 1px),
              linear-gradient(to bottom, #00ffff 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>
    </div>
  )
}

export default AnimatedCircuitBackground
