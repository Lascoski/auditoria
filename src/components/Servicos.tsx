export default function Servicos() {
  const items = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 12H16M8 8H13M8 16H11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
      title: 'Auditoria de Contas Hospitalares',
      desc: 'Análise minuciosa de contas particulares. Verificamos cada item cobrado: diárias, taxas, materiais, medicamentos e procedimentos.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
      title: 'Auditoria Prévia',
      desc: 'Revisão preventiva antes do pagamento ao hospital. Identifico glosas potenciais e oriento como você pode proceder.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 3L19 7V12C19 16 12 21 12 21C12 21 5 16 5 12V7L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      
      desc: 'Elaboração técnica de recurso com embasamento. Maximizamos o reembolso de valores cobrados indevidamente.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 5H7C5.89 5 5 5.9 5 7V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V7C19 5.9 18.1 5 17 5H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 12H15M9 16H12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
      title: 'Laudos e Pareceres Técnicos',
      desc: 'Documentação técnica para suporte em disputas administrativas ou judiciais, com parecer de profissional habilitado.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 4H10V10H4V4ZM14 4H20V10H14V4ZM4 14H10V20H4V14ZM17 14V20M14 17H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Análise de Tabelas e Contratos',
      desc: 'Verificação de conformidade entre o contrato firmado, tabela utilizada na fatura e valores de mercado (CBHPM, TUSS, AMB).',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-4 items-end mb-16">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-teal-500 mb-4">O que fazemos</div>
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-4xl md:text-5xl text-teal-950 leading-tight"
            >
              Serviços de
              <br />
              <span className="italic">auditoria médica</span>
            </h2>
          </div>
          <p className="text-slate-500 leading-relaxed md:max-w-sm md:ml-auto">
            Atuamos de forma totalmente particular, sem vínculo com operadoras ou prestadores, garantindo total independência na análise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 group hover:bg-teal-50 transition-colors duration-200"
            >
              <div className="text-teal-700 mb-5 group-hover:text-teal-900 transition-colors">
                {item.icon}
              </div>
              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-xl text-teal-950 mb-3 leading-snug"
              >
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
