import React from 'react'

// Renders the union logo via CSS mask so its color follows the theme
// (the raw SVG has #00FFFF baked in, which clashes with the light theme).
const ThemedLogo: React.FC<{ className?: string; label?: string }> = ({
  className = '',
  label = 'Uğur Emin Baynal Logo',
}) => (
  <div
    role="img"
    aria-label={label}
    className={`bg-electric-cyan ${className}`}
    style={{
      maskImage: 'url(/assets/svg/union-logo.svg)',
      WebkitMaskImage: 'url(/assets/svg/union-logo.svg)',
      maskSize: 'contain',
      WebkitMaskSize: 'contain',
      maskRepeat: 'no-repeat',
      WebkitMaskRepeat: 'no-repeat',
      maskPosition: 'center',
      WebkitMaskPosition: 'center',
    }}
  />
)

export default ThemedLogo
