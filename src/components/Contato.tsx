import { useState } from 'react'

type FormData = {
  nome: string
  email: string
  telefone: string
  tipo: string
  mensagem: string
}

export default function Contato() {
  const [form, setForm] = useState<FormData>({ nome: '', email: '', telefone: '', tipo: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  function handle(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function enviar(e: React.FormEvent) {
  e.preventDefault()
  setEnviando(true)

  try {
    const resposta = await fetch('http://localhost:3001/contato', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    const dados = await resposta.json()

    if (!resposta.ok) {
      throw new Error(dados.erro || 'Erro ao enviar mensagem')
    }

    setEnviado(true)

  } catch (erro) {
    console.error(erro)

    alert('Não foi possível enviar sua mensagem. Tente novamente.')

  } finally {
    setEnviando(false)
  }
}

  const inputClass =
    'w-full border border-slate-200 rounded-sm px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors'

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Quem sou eu ─────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 pb-20 border-b border-slate-100">

          {/* Foto */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-sm overflow-hidden bg-teal-100 max-w-sm mx-auto md:mx-0">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQH2ld3fgi8GMg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725881575030?e=1791417600&v=beta&t=yvVrCn5fNglPTCdf34WdPtNNZDnezs2sXH3cSYhM3M0"
                alt="Enfermeira auditora"
                className="w-full h-full object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-teal-950/90 backdrop-blur-sm text-white rounded-sm px-5 py-4">
                <div style={{ fontFamily: 'var(--font-display)' }} className="text-lg leading-snug">
                  Enfermeira Auditora
                </div>
                <div className="text-teal-300 text-xs mt-1">COREN ativo · Especialização em Auditoria em Saúde</div>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -top-4 -right-4 md:right-0 bg-teal-500 text-white rounded-sm px-4 py-3 shadow-lg">
              <div style={{ fontFamily: 'var(--font-display)' }} className="text-2xl leading-none">Natali </div>
              <div className="text-xs opacity-90 mt-0.5">+ de 12 anos de experiência</div>
            </div>
          </div>

          {/* Texto */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-teal-500 mb-4">Quem sou eu</div>
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-4xl md:text-5xl text-teal-950 leading-tight mb-6"
            >
              Vamos analisar
              <br />
              <span className="italic">sua situação</span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-5">
              Sou enfermeira com especialização em Auditoria em Saúde e mais de 12 anos de experiência na área hospitalar, realizo análise técnica de contas médicas hospitalares e ambulatoriais. Trabalhei em operadora de saúde, hospitais e clínicas — e hoje coloco esse conhecimento a serviço de <strong className="text-teal-900">você, paciente</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Sei exatamente como as cobranças indevidas acontecem: itens duplicados, materiais não utilizados, procedimentos com código errado, taxas abusivas. Minha missão é garantir que você pague <em>apenas o que é justo</em> — com relatório técnico detalhado e suporte total na contestação.
            </p>

            {/* Credenciais */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '🎓', label: 'Especialista em Auditoria', sub: 'Pós-graduação lato sensu' },
                { icon: '📋', label: 'COREN 668667', sub: 'Registro profissional em dia' },
                { icon: '🏥', label: '4.800+ contas', sub: 'Auditadas com sucesso' },
                { icon: '🔒', label: 'Sigilo absoluto', sub: 'Contrato + NDA garantidos' },
              ].map(c => (
                <div key={c.label} className="bg-slate-50 border border-slate-100 rounded-sm px-4 py-3">
                  <div className="text-lg mb-1">{c.icon}</div>
                  <div className="text-xs font-semibold text-teal-950">{c.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{c.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Formulário de contato ────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left info */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-teal-500 mb-4">Fale comigo</div>
            <h3
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-3xl md:text-4xl text-teal-950 leading-tight mb-6"
            >
              Entre em contato
              <br />
              <span className="italic">sem compromisso</span>
            </h3>
            <p className="text-slate-500 leading-relaxed mb-10">
              Envie os detalhes do seu caso e contrate nossa análise especializada. Se houver irregularidades na sua conta, orientarei você sobre como proceder.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3.5 2H6.5L8 5.5L6 7C7 9.2 8.8 11 11 12L12.5 10L16 11.5V14.5C16 15.3 15.3 16 14.5 16C7.6 16 2 10.4 2 3.5C2 2.7 2.7 2 3.5 2Z" stroke="#0d4f5c" strokeWidth="1.4" strokeLinejoin="round" />
                    </svg>
                  ),
                  label: 'WhatsApp / Telefone',
                  value: '(11) 99999-0000',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="#0d4f5c" strokeWidth="1.4" />
                      <path d="M2 6.5L9 10.5L16 6.5" stroke="#0d4f5c" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  ),
                  label: 'E-mail',
                  value: 'natalilascoskii@gmail.com',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 1C5.68 1 3 3.68 3 7C3 11.25 9 17 9 17C9 17 15 11.25 15 7C15 3.68 12.32 1 9 1ZM9 9C7.9 9 7 8.1 7 7C7 5.9 7.9 5 9 5C10.1 5 11 5.9 11 7C11 8.1 10.1 9 9 9Z" stroke="#0d4f5c" strokeWidth="1.4" />
                    </svg>
                  ),
                  label: 'Atendimento',
                  value: 'Em todo o Brasil (remoto)',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="7" stroke="#0d4f5c" strokeWidth="1.4" />
                      <path d="M9 5V9.5L12 11" stroke="#0d4f5c" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  ),
                  label: 'Horário',
                  value: 'Seg–Sex, 8h–18h',
                },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-teal-50 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">{item.label}</div>
                    <div className="text-sm text-teal-950 font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4 bg-slate-50 border border-slate-100 rounded-sm">
              <p className="text-xs text-slate-500 leading-relaxed">
                <span className="font-semibold text-slate-700">Sigilo e LGPD:</span> Todos os dados e documentos compartilhados são tratados com absoluta confidencialidade, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {enviado ? (
              <div className="bg-teal-50 border border-teal-200 rounded-sm p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                    <path d="M2 10L8.5 16.5L22 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-teal-950 mb-3">
                  Mensagem enviada!
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Recebi seu contato. Retornarei em até <strong>24 horas úteis</strong> para dar início à análise preliminar gratuita.
                </p>
                <button
                  onClick={() => { setEnviado(false); setForm({ nome: '', email: '', telefone: '', tipo: '', mensagem: '' }) }}
                  className="mt-6 text-teal-700 text-sm font-medium hover:text-teal-900 underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={enviar} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold text-teal-950 tracking-wide mb-1.5">Nome completo *</label>
                    <input required name="nome" value={form.nome} onChange={handle} placeholder="Seu nome" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-teal-950 tracking-wide mb-1.5">E-mail *</label>
                    <input required type="email" name="email" value={form.email} onChange={handle} placeholder="seu@email.com" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-teal-950 tracking-wide mb-1.5">Telefone / Telegram</label>
                    <input name="telefone" value={form.telefone} onChange={handle} placeholder="(00) 00000-0000" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-teal-950 tracking-wide mb-1.5">Tipo de conta</label>
                  <select name="tipo" value={form.tipo} onChange={handle} className={inputClass}>
                    <option value="">Selecione o tipo de conta</option>
                    <option>Internação / Cirurgia</option>
                    <option>Consultas / Exames</option>
                    <option>Odontológico</option>
                    <option>Home Care</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-teal-950 tracking-wide mb-1.5">Descreva sua situação *</label>
                  <textarea
                    required
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handle}
                    rows={5}
                    placeholder="Descreva brevemente a conta médica que deseja auditar, o valor aproximado e qualquer dúvida ou questionamento que tenha..."
                    className={inputClass + ' resize-none'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full bg-teal-900 hover:bg-teal-800 disabled:opacity-60 text-white font-semibold py-3.5 rounded-sm transition-colors text-sm flex items-center justify-center gap-2"
                >
                  {enviando ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
                        <path d="M8 2C4.69 2 2 4.69 2 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    'Solicitar Análise Gratuita'
                  )}
                </button>
                <p className="text-center text-xs text-slate-400">Sem compromisso. Respondemos em até 24 horas úteis.</p>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
