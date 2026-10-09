/** SVG filters giving display type its melted / eroded "ice" texture. */
export function MeltFilters() {
  return (
    <svg aria-hidden width="0" height="0" className="absolute">
      <defs>
        <filter id="melt" x="-10%" y="-20%" width="120%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.006 0.03" numOctaves="2" seed="7" result="warp">
            <animate attributeName="seed" values="7;8;9;8;7" dur="6s" repeatCount="indefinite" calcMode="discrete" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="10" xChannelSelector="R" yChannelSelector="G" result="warped" />
          <feTurbulence type="fractalNoise" baseFrequency="0.035 0.09" numOctaves="3" seed="3" result="grain" />
          <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -9 0 0 0 6.2" result="holes" />
          <feComposite in="warped" in2="holes" operator="in" />
        </filter>
        <filter id="melt-sm" x="-10%" y="-20%" width="120%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.006 0.03" numOctaves="2" seed="7" result="warp">
            <animate attributeName="seed" values="7;8;9;8;7" dur="6s" repeatCount="indefinite" calcMode="discrete" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="5" xChannelSelector="R" yChannelSelector="G" result="warped" />
          <feTurbulence type="fractalNoise" baseFrequency="0.07 0.18" numOctaves="3" seed="3" result="grain" />
          <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -9 0 0 0 6.2" result="holes" />
          <feComposite in="warped" in2="holes" operator="in" />
        </filter>
      </defs>
    </svg>
  );
}
