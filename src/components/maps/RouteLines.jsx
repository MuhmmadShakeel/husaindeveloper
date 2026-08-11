function RouteLines({ variant = 'light' }) {
  return (
    <svg
      className={`route-lines route-lines--${variant}`}
      viewBox="0 0 1600 1000"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M-120 170C180 40 335 318 625 200S1040 20 1720 180" />
      <path d="M-170 725C180 570 360 860 710 680s520-160 1010 20" />
      <path d="M225-90c-70 250 100 315 35 540S50 720 165 1090" />
      <path d="M1270-100c105 230-30 355 70 535s190 310 95 665" />
    </svg>
  )
}

export default RouteLines
