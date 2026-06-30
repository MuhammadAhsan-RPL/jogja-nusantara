// 2D Jogja-inspired animation: floating Gunungan (wayang kayon), drifting batik
// kawung motifs, and a slow-rotating Borobudur mandala. Pure SVG + CSS.
// Designed to be clearly visible on the cream paper background while remaining
// behind the hero text.

export function GununganAnimation() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Soft sunrise wash */}
      <div
        className="absolute -top-32 right-[-10%] h-[70vh] w-[70vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,161,74,0.55) 0%, rgba(245,239,228,0) 70%)",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[-10%] h-[55vh] w-[55vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(181,83,42,0.35) 0%, rgba(245,239,228,0) 70%)",
        }}
      />

      {/* Slow rotating Borobudur mandala */}
      <svg
        className="absolute -right-24 top-6 h-[560px] w-[560px] opacity-60 mix-blend-multiply animate-[jh-spin_90s_linear_infinite]"
        viewBox="0 0 200 200"
        fill="none"
        stroke="#b5532a"
        strokeWidth="0.5"
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <g key={i} transform={`rotate(${(i * 360) / 24} 100 100)`}>
            <circle cx="100" cy="36" r="5" />
            <line x1="100" y1="41" x2="100" y2="100" strokeWidth="0.3" />
          </g>
        ))}
        <circle cx="100" cy="100" r="70" />
        <circle cx="100" cy="100" r="55" strokeDasharray="2 3" />
        <circle cx="100" cy="100" r="40" />
        <circle cx="100" cy="100" r="25" strokeDasharray="1 2" />
        <circle cx="100" cy="100" r="12" fill="#b5532a" fillOpacity="0.4" stroke="none" />
        <circle cx="100" cy="100" r="4" fill="#c9a14a" stroke="none" />
      </svg>

      {/* Counter-rotating outer ring of stupas */}
      <svg
        className="absolute -right-24 top-6 h-[560px] w-[560px] opacity-40 mix-blend-multiply animate-[jh-spin-rev_140s_linear_infinite]"
        viewBox="0 0 200 200"
        fill="none"
        stroke="#1a1714"
        strokeWidth="0.3"
      >
        {Array.from({ length: 36 }).map((_, i) => (
          <g key={i} transform={`rotate(${(i * 360) / 36} 100 100)`}>
            <path d="M100 14 l3 6 l-3 4 l-3 -4 z" fill="#1a1714" />
          </g>
        ))}
      </svg>

      {/* Floating Gunungan (wayang kayon) */}
      <svg
        className="absolute bottom-6 left-[3%] h-[340px] w-[180px] opacity-90 mix-blend-multiply animate-[jh-float_8s_ease-in-out_infinite] drop-shadow-[0_18px_30px_rgba(26,23,20,0.18)]"
        viewBox="0 0 120 240"
        fill="none"
      >
        <defs>
          <linearGradient id="gKayon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#faf6ee" />
            <stop offset="100%" stopColor="#f0e6d1" />
          </linearGradient>
        </defs>
        <path
          d="M60 4 C 30 50, 16 120, 24 200 L 96 200 C 104 120, 90 50, 60 4 Z"
          fill="url(#gKayon)"
          stroke="#1a1714"
          strokeWidth="1.6"
        />
        <path
          d="M60 14 C 36 56, 24 124, 32 192 L 88 192 C 96 124, 84 56, 60 14 Z"
          fill="none"
          stroke="#b5532a"
          strokeWidth="0.8"
        />
        {/* tree of life trunk */}
        <line x1="60" y1="40" x2="60" y2="190" stroke="#b5532a" strokeWidth="1.4" />
        {Array.from({ length: 8 }).map((_, i) => {
          const y = 56 + i * 17;
          const w = 12 + i * 3;
          return (
            <g key={i}>
              <line x1={60 - w} y1={y} x2={60 + w} y2={y} stroke="#2f4a3a" strokeWidth="1" />
              <circle cx={60 - w} cy={y} r="2" fill="#c9a14a" />
              <circle cx={60 + w} cy={y} r="2" fill="#c9a14a" />
              <circle cx={60} cy={y + 8} r="1.5" fill="#b5532a" />
            </g>
          );
        })}
        <circle cx="60" cy="30" r="7" fill="#b5532a" />
        <circle cx="60" cy="30" r="3" fill="#c9a14a" />
        <path d="M24 200 L96 200 L60 234 Z" fill="#1a1714" />
      </svg>

      {/* Drifting batik kawung dots */}
      <svg
        className="absolute inset-x-0 bottom-0 h-56 w-full opacity-60"
        viewBox="0 0 800 200"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 28 }).map((_, i) => {
          const x = 20 + (i * 53) % 780;
          const delay = (i % 7) * 0.9;
          return (
            <g
              key={i}
              style={{
                transformOrigin: `${x}px 140px`,
                animation: `jh-drift 12s ease-in-out ${delay}s infinite`,
              }}
            >
              <circle cx={x} cy="140" r="7" fill="none" stroke="#b5532a" strokeWidth="1" />
              <circle cx={x - 10} cy="150" r="7" fill="none" stroke="#b5532a" strokeWidth="1" />
              <circle cx={x + 10} cy="150" r="7" fill="none" stroke="#b5532a" strokeWidth="1" />
              <circle cx={x} cy="160" r="7" fill="none" stroke="#b5532a" strokeWidth="1" />
              <circle cx={x} cy="150" r="1.5" fill="#c9a14a" />
            </g>
          );
        })}
      </svg>

      <style>{`
        @keyframes jh-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes jh-spin-rev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes jh-float { 0%,100% { transform: translateY(0) rotate(-1.5deg); } 50% { transform: translateY(-22px) rotate(1.5deg); } }
        @keyframes jh-drift { 0% { transform: translateY(20px); opacity: 0; } 30% { opacity: .8; } 70% { opacity: .6; } 100% { transform: translateY(-110px); opacity: 0; } }
      `}</style>
    </div>
  );
}
