import React, { useState } from 'react'
import { X, Calendar, MapPin, ExternalLink } from 'lucide-react'
import { useSettings } from '../context/SettingsContext'

interface TimelineEntry {
  id: string
  title: string
  subtitle: string
  period: string
  location?: string
  description: string
  details?: string
  technologies?: string[]
  achievements?: string[]
  images?: string[]
  documents?: { name: string; url: string }[]
  link?: string
  icon: React.ComponentType<{ className?: string; size?: number }>
  color: string
  status?: 'Active' | 'Completed'
}

interface PCBTimelineProps {
  entries: TimelineEntry[]
  title: string
  subtitle: string
}

const PCBTimeline: React.FC<PCBTimelineProps> = ({ entries, title, subtitle }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedEntry, setSelectedEntry] = useState<TimelineEntry | null>(null)
  const { lang } = useSettings()
  const isTr = lang === 'tr'
  const isEs = lang === 'es'

  // Sort entries by date (most recent first); recognizes English and Turkish month abbreviations
  const sortedEntries = [...entries].sort((a, b) => {
    const getYear = (period: string) => {
      const match = period.match(/(\d{4})/)
      return match ? parseInt(match[1]) : 0
    }
    const getMonth = (period: string) => {
      const months: { [key: string]: number } = {
        'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
        'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12,
        'Oca': 1, 'Şub': 2, 'Nis': 4, 'Haz': 6,
        'Tem': 7, 'Ağu': 8, 'Eyl': 9, 'Eki': 10, 'Kas': 11, 'Ara': 12
      }
      const match = period.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|Oca|Şub|Nis|Haz|Tem|Ağu|Eyl|Eki|Kas|Ara)/)
      return match ? months[match[1]] : 0
    }
    const yearA = getYear(a.period)
    const yearB = getYear(b.period)
    if (yearA !== yearB) return yearB - yearA
    return getMonth(b.period) - getMonth(a.period)
  })

  const getStatusColor = (status?: string) => {
    return status === 'Active'
      ? 'bg-green-500/20 text-green-400 border-green-400/30'
      : 'bg-blue-500/20 text-blue-400 border-blue-400/30'
  }

  const getStatusLabel = (status?: string) => {
    if (isTr) return status === 'Active' ? 'Aktif' : 'Tamamlandı'
    if (isEs) return status === 'Active' ? 'Activo' : 'Completado'
    return status
  }

  return (
    <div className="relative">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-ibm-plex text-4xl md:text-5xl font-semibold text-cloud-white mb-6">
          {title}
        </h1>
        <p className="font-inter text-lg text-text-secondary max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* PCB Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Main PCB Trace - Vertical Line (left rail on mobile, centered on desktop) */}
        <div className="absolute left-5 md:left-1/2 transform -translate-x-1/2 w-1 h-full">
          {/* Copper trace background */}
          <div className="absolute inset-0 bg-gradient-to-b from-electric-cyan/40 via-electric-cyan/60 to-electric-cyan/40 rounded-full" />
          {/* Trace glow effect */}
          <div className="absolute inset-0 bg-electric-cyan/20 rounded-full blur-sm" />
          {/* Animated pulse along the trace */}
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="absolute w-full h-20 bg-gradient-to-b from-transparent via-electric-cyan to-transparent animate-trace-flow" />
          </div>
        </div>

        {/* Timeline Entries */}
        <div className="relative space-y-4">
          {sortedEntries.map((entry, index) => {
            const isLeft = index % 2 === 0
            const isHovered = hoveredId === entry.id
            const IconComponent = entry.icon

            return (
              <div
                key={entry.id}
                className="relative flex items-start py-4"
                onMouseEnter={() => setHoveredId(entry.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Via Node (Center) - positioned at top of card */}
                <div className="absolute left-5 md:left-1/2 transform -translate-x-1/2 top-10 z-20">
                  {/* Via outer ring */}
                  <div className={`
                    w-8 h-8 rounded-full border-2 border-electric-cyan bg-deep-charcoal
                    flex items-center justify-center transition-all duration-300
                    ${isHovered ? 'scale-125 border-4 shadow-[0_0_20px_rgb(var(--electric-cyan)/0.6)]' : ''}
                  `}>
                    {/* Via inner pad */}
                    <div className={`
                      w-4 h-4 rounded-full bg-electric-cyan transition-all duration-300
                      ${isHovered ? 'bg-white shadow-[0_0_15px_rgb(var(--electric-cyan)/0.8)]' : ''}
                    `} />
                  </div>
                  {/* Via drill hole */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-deep-charcoal" />
                </div>

                {/* Branch Trace - connects via to card edge (stops before card) */}
                <div
                  className={`
                    hidden md:block absolute top-10 h-1
                    ${isLeft
                      ? 'left-[calc(50%-80px)] w-[60px]'
                      : 'left-[calc(50%+20px)] w-[60px]'
                    }
                  `}
                  style={{ marginTop: '12px' }}
                >
                  {/* Trace background */}
                  <div className={`
                    absolute inset-0 rounded-full transition-all duration-300
                    ${isHovered ? 'bg-electric-cyan shadow-[0_0_10px_rgb(var(--electric-cyan)/0.5)]' : 'bg-electric-cyan/40'}
                  `} />
                  
                  {/* Current flow animation */}
                  {isHovered && (
                    <div className={`absolute inset-0 overflow-hidden rounded-full ${isLeft ? 'rotate-180' : ''}`}>
                      <div className="absolute h-full w-8 bg-gradient-to-r from-transparent via-white to-transparent animate-current-flow" />
                    </div>
                  )}
                </div>

                {/* Entry Card */}
                <div className={`
                  w-auto ml-14 cursor-pointer
                  md:w-[calc(50%-80px)]
                  ${isLeft ? 'md:ml-0 md:mr-auto' : 'md:ml-auto'}
                `}>
                  <div
                    onClick={() => setSelectedEntry(entry)}
                    className={`
                      relative p-6 rounded-lg border transition-all duration-300 overflow-visible
                      bg-smoky-steel/30 backdrop-blur-sm
                      ${isHovered 
                        ? 'border-electric-cyan shadow-[0_0_30px_rgb(var(--electric-cyan)/0.2)] scale-[1.02]' 
                        : 'border-electric-cyan/20 hover:border-electric-cyan/40'
                      }
                    `}
                  >
                    {/* Card corner traces */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-electric-cyan/30 rounded-tl-lg pointer-events-none" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-electric-cyan/30 rounded-tr-lg pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-electric-cyan/30 rounded-bl-lg pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-electric-cyan/30 rounded-br-lg pointer-events-none" />

                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-deep-charcoal border border-electric-cyan/30 flex-shrink-0`}>
                          <IconComponent className={`w-5 h-5 ${entry.color}`} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-jetbrains text-lg font-semibold text-electric-cyan leading-tight">
                            {entry.title}
                          </h3>
                          <p className="font-inter text-sm text-text-secondary">{entry.subtitle}</p>
                        </div>
                      </div>
                      {entry.status && (
                        <span className={`px-2 py-1 rounded-full text-xs font-jetbrains border whitespace-nowrap flex-shrink-0 ${getStatusColor(entry.status)}`}>
                          {getStatusLabel(entry.status)}
                        </span>
                      )}
                    </div>

                    {/* Period & Location */}
                    <div className="flex items-center space-x-4 text-xs text-text-secondary mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3 flex-shrink-0" />
                        <span>{entry.period}</span>
                      </div>
                      {entry.location && (
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          <span>{entry.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Summary (shown on hover) - with proper overflow handling */}
                    <div className={`
                      transition-all duration-300 ease-in-out
                      ${isHovered ? 'opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
                    `}>
                      <p className="font-inter text-sm text-text-secondary leading-relaxed mb-3">
                        {entry.description}
                      </p>
                      
                      {/* Technologies preview */}
                      {entry.technologies && entry.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {entry.technologies.slice(0, 4).map((tech, i) => (
                            <span key={i} className="px-2 py-0.5 bg-electric-cyan/10 text-electric-cyan text-xs font-jetbrains rounded">
                              {tech}
                            </span>
                          ))}
                          {entry.technologies.length > 4 && (
                            <span className="px-2 py-0.5 bg-electric-cyan/10 text-electric-cyan text-xs font-jetbrains rounded">
                              +{entry.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      )}

                      <div className="text-xs text-electric-cyan font-jetbrains flex items-center">
                        <span>{isTr ? 'Detaylar için tıkla' : isEs ? 'Clic para ver detalles' : 'Click for details'}</span>
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* End cap */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-electric-cyan/40 bg-deep-charcoal flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-electric-cyan/40" />
        </div>
      </div>

      {/* Detail Modal */}
      {selectedEntry && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-charcoal/90 backdrop-blur-sm"
          onClick={() => setSelectedEntry(null)}
        >
          {/* Modal wrapper with fixed corners */}
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col">
            {/* Fixed PCB corner decorations - outside scrollable area */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-electric-cyan/50 rounded-tl-lg z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-electric-cyan/50 rounded-tr-lg z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-electric-cyan/50 rounded-bl-lg z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-electric-cyan/50 rounded-br-lg z-10 pointer-events-none" />
            
            {/* Scrollable content area */}
            <div 
              className="overflow-y-auto bg-smoky-steel/95 border border-electric-cyan/30 rounded-lg p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button - sticky at top */}
              <button 
                onClick={() => setSelectedEntry(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-deep-charcoal border border-electric-cyan/30 text-electric-cyan hover:bg-electric-cyan/10 transition-colors z-20"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="flex items-start space-x-4 mb-6 pr-12">
                <div className={`p-4 rounded-lg bg-deep-charcoal border border-electric-cyan/30 flex-shrink-0`}>
                  <selectedEntry.icon className={`w-8 h-8 ${selectedEntry.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-ibm-plex text-2xl font-semibold text-electric-cyan">
                      {selectedEntry.title}
                    </h2>
                    {selectedEntry.status && (
                      <span className={`px-3 py-1 rounded-full text-sm font-jetbrains border whitespace-nowrap flex-shrink-0 ${getStatusColor(selectedEntry.status)}`}>
                        {getStatusLabel(selectedEntry.status)}
                      </span>
                    )}
                  </div>
                  <p className="font-inter text-lg text-cloud-white mt-1">{selectedEntry.subtitle}</p>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary mt-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>{selectedEntry.period}</span>
                    </div>
                    {selectedEntry.location && (
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span>{selectedEntry.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-jetbrains text-sm font-semibold text-electric-cyan mb-2">{isTr ? 'Genel Bakış' : isEs ? 'Resumen' : 'Overview'}</h3>
                <p className="font-inter text-text-secondary leading-relaxed">
                  {selectedEntry.details || selectedEntry.description}
                </p>
              </div>

              {/* Achievements */}
              {selectedEntry.achievements && selectedEntry.achievements.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-jetbrains text-sm font-semibold text-electric-cyan mb-3">{isTr ? 'Öne Çıkanlar' : isEs ? 'Logros Clave' : 'Key Achievements'}</h3>
                  <ul className="space-y-2">
                    {selectedEntry.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full mt-2 flex-shrink-0" />
                        <span className="font-inter text-text-secondary text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {selectedEntry.technologies && selectedEntry.technologies.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-jetbrains text-sm font-semibold text-electric-cyan mb-3">{isTr ? 'Teknolojiler' : isEs ? 'Tecnologías' : 'Technologies'}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEntry.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-electric-cyan/10 text-electric-cyan text-sm font-jetbrains rounded border border-electric-cyan/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Images */}
              {selectedEntry.images && selectedEntry.images.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-jetbrains text-sm font-semibold text-electric-cyan mb-3">{isTr ? 'Galeri' : isEs ? 'Galería' : 'Gallery'}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedEntry.images.map((img, i) => (
                      <div key={i} className="aspect-video rounded-lg overflow-hidden border border-electric-cyan/20">
                        <img src={img} alt={`${selectedEntry.title} ${i + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Documents */}
              {selectedEntry.documents && selectedEntry.documents.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-jetbrains text-sm font-semibold text-electric-cyan mb-3">{isTr ? 'Belgeler' : isEs ? 'Documentos' : 'Documents'}</h3>
                  <div className="space-y-2">
                    {selectedEntry.documents.map((doc, i) => (
                      <a 
                        key={i}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 p-3 bg-deep-charcoal rounded-lg border border-electric-cyan/20 hover:border-electric-cyan/40 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-electric-cyan flex-shrink-0" />
                        <span className="font-inter text-sm text-cloud-white">{doc.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* External Link */}
              {selectedEntry.link && (
                <a 
                  href={selectedEntry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-electric-cyan/10 text-electric-cyan rounded-lg border border-electric-cyan/30 hover:bg-electric-cyan/20 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="font-jetbrains text-sm">{isTr ? 'Projeye Git' : isEs ? 'Visitar Proyecto' : 'Visit Project'}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PCBTimeline
