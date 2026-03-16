export default function App() {
  return (
    <div className="min-h-screen bg-[#08090b] text-zinc-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.025),transparent_42%)]" />

      <main className="relative min-h-screen flex items-center justify-center px-8">
        <div className="w-full max-w-5xl">
          <h1 className="text-[46px] md:text-[84px] leading-none tracking-[-0.06em] font-semibold text-zinc-100">
            Vega Commons Project
          </h1>

          <div className="mt-8 ml-2 space-y-1 text-[13px] text-zinc-600">
            <div>New York, NY</div>
            <div>501(c)(3) nonprofit corporation</div>
            <div>Established 2026</div>
            <div>&nbsp;</div>
            <div>
              <a
                href="mailto:info@vegacommons.org"
                className="hover:text-zinc-400 transition-colors"
              >
                info@vegacommons.org
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}