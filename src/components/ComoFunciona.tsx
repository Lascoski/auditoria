export default function ComoFunciona() {
  const steps = [
    {
      num: '01',
      title: 'Envio da documentação',
      desc: 'Você envia a conta médica, relatório de internação ou nota fiscal com toda a documentação pertinente de forma segura.',
    },
    {
      num: '02',
      title: 'Análise técnica especializada',
      desc: 'Nossa equipe realiza a auditoria completa verificando cada item, codificação, tabelas utilizadas e conformidade contratual.',
    },
    {
      num: '03',
      title: 'Relatório detalhado',
      desc: 'Você recebe um relatório técnico com todos os itens auditados, irregularidades identificadas e valores contestáveis.',
    },
    {
      num: '04',
      title: 'Suporte na contestação',
      desc: 'Acompanhamos o processo de contestação com a operadora ou prestador, elaborando os recursos necessários.',
    },
  ]

  return (
    <section className="py-24 bg-teal-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-teal-400 mb-4">Processo</div>
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl md:text-5xl leading-tight"
          >
            Como funciona
            <br />
            <span className="italic text-teal-400">nossa auditoria</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-px bg-teal-800">
          {steps.map((step, i) => (
            <div key={i} className="bg-teal-950 p-8 relative">
              <div
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-6xl text-teal-800 leading-none mb-6 select-none"
              >
                {step.num}
              </div>
              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-xl mb-3 leading-snug"
              >
                {step.title}
              </h3>
              <p className="text-teal-300 text-sm leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-8 -right-3 z-10 w-6 h-6 rounded-full bg-teal-500 items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M3 2L7 5L3 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
