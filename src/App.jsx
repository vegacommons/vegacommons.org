export default function App() {
  return (
    <div className="min-h-screen bg-[#08090b] text-zinc-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.025),transparent_20%,transparent_80%,rgba(255,255,255,0.018))]" />

      <header className="relative border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <div className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
            vegacommons.org
          </div>
        </div>
      </header>

      <main className="relative min-h-[calc(100vh-61px)] flex items-center justify-center px-6">
        <div className="w-full max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
            <div className="px-8 py-16 md:px-14 md:py-24">
              <div className="w-10 h-px bg-white/15 mb-8" />
              <div className="text-[11px] uppercase tracking-[0.34em] text-zinc-500 mb-5">
                Official Site
              </div>

              <h1 className="text-[46px] md:text-[76px] leading-none tracking-[-0.05em] font-semibold text-zinc-100">
                Vega Commons
              </h1>

              <div className="mt-12 pt-8 border-t border-white/8 flex items-center justify-between gap-6 flex-col md:flex-row">
                <div className="text-[13px] uppercase tracking-[0.18em] text-zinc-500">
                  Public Presence
                </div>
                <div className="text-[13px] text-zinc-400">
                  March 2026
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between px-1 pt-5 text-[11px] uppercase tracking-[0.16em] text-zinc-600">
            <span>New York</span>
            <span>Vega Commons</span>
          </div>
        </div>
      </main>
    </div>
  )
}
