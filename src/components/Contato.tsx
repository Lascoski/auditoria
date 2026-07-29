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

  function enviar(e: React.FormEvent) {
    e.preventDefault()
    setEnviando(true)
    setTimeout(() => { setEnviando(false); setEnviado(true) }, 1200)
  }

  const inputClass =
    'w-full border border-slate-200 rounded-sm px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors'

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-teal-500 mb-4">Fale conosco</div>
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-4xl md:text-5xl text-teal-950 leading-tight mb-6"
            >
              Vamos analisar
              <br />
              <span className="italic">sua situação</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-10">
              Entre em contato para uma análise preliminar gratuita. Sem compromisso — avaliamos sua documentação e informamos se há irregularidades a contestar.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 1C5.68 1 3 3.68 3 7C3 11.25 9 17 9 17C9 17 15 11.25 15 7C15 3.68 12.32 1 9 1ZM9 9C7.9 9 7 8.1 7 7C7 5.9 7.9 5 9 5C10.1 5 11 5.9 11 7C11 8.1 10.1 9 9 9Z" stroke="#0d4f5c" strokeWidth="1.4" />
                    </svg>
                  ),
                  label: 'Atendimento remoto',
                  value: 'Em todo o Brasil',
                },
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
                  value: 'contato@auditormedpro.com.br',
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
                  Recebemos seu contato. Nossa equipe retornará em até <strong>24 horas úteis</strong> para dar início à análise preliminar gratuita.
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
                    <label className="block text-xs font-semibold text-teal-950 tracking-wide mb-1.5">Telefone / WhatsApp</label>
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
