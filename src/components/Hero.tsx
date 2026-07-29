import { Link } from 'react-router'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Split background */}
      <div className="absolute inset-0 flex">
        <div className="w-full md:w-1/2 bg-white" />
        <div className="hidden md:block w-1/2 bg-teal-50" />
      </div>

      {/* Decorative vertical rule */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-teal-100 hidden md:block" />

      <div className="relative max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-24">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 inline-block" />
            Auditoria Particular em Saúde
          </div>

          <h1
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-5xl md:text-6xl text-teal-950 leading-[1.1] tracking-tight mb-6"
          >
            Suas contas
            <br />
            médicas foram{' '}
            <span className="italic text-teal-500">cobradas</span>
            <br />
            corretamente?
          </h1>

          <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-md">
            Auditoria especializada de contas hospitalares e procedimentos médicos. Identificamos cobranças indevidas, glosamentos e divergências antes de você pagar.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/avaliacao"
              className="bg-teal-900 hover:bg-teal-800 text-white font-semibold px-7 py-3.5 rounded-sm transition-colors text-sm text-center"
            >
              Calcular Avaliação Inicial
            </Link>
            <Link
              to="/servicos"
              className="border border-teal-200 hover:border-teal-400 text-teal-900 font-semibold px-7 py-3.5 rounded-sm transition-colors text-sm text-center"
            >
              Ver Serviços
            </Link>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap gap-6 mt-12">
            {[
              { value: '12+', label: 'anos de experiência' },
              { value: '4.800+', label: 'contas auditadas' },
              { value: 'R$ 18M+', label: 'em glosas recuperadas' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-teal-900">
                  {s.value}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — feature card */}
        <div className="relative">
          <div className="bg-white border border-slate-100 rounded-sm shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-sm bg-teal-100 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M10 4V16" stroke="#0d4f5c" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-teal-950 text-sm">Avaliação Rápida</div>
                <div className="text-xs text-slate-400">Resultado em 48 horas</div>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: 'Análise de itens cobrados', done: true },
                { label: 'Verificação de compatibilidade', done: true },
                { label: 'Identificação de duplicidades', done: true },
                { label: 'Relatório detalhado de inconsistências', done: true },
                { label: 'Recomendação de impugnação', done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-sm flex items-center justify-center flex-shrink-0 ${
                      item.done ? 'bg-teal-500' : 'border border-slate-200'
                    }`}
                  >
                    {item.done && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-sm ${item.done ? 'text-slate-700' : 'text-slate-400'}`}>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">Contrato e NDA incluídos</span>
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-1 rounded-sm">Particular</span>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-teal-900 text-white rounded-sm px-4 py-3 shadow-lg">
            <div className="text-xs opacity-70">Sigilo garantido</div>
            <div className="font-semibold text-sm">100% confidencial</div>
          </div>
        </div>
      </div>
    </section>
  )
}
