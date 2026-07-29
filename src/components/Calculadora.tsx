import { useState } from 'react'
import { Link } from 'react-router'

type TipoServico = 'hospitalar' | 'ambulatorial' | 'odontologico' | 'home_care'
type Complexidade = 'simples' | 'media' | 'complexa'

export default function Calculadora() {
  const [tipo, setTipo] = useState<TipoServico>('hospitalar')
  const [complexidade, setComplexidade] = useState<Complexidade>('simples')
  const [valorConta, setValorConta] = useState('')
  const [paginas, setPaginas] = useState('1')
  const [calculado, setCalculado] = useState(false)

  const tipoMap: Record<TipoServico, { label: string; base: number }> = {
    hospitalar:   { label: 'Internação / Cirurgia', base: 350 },
    ambulatorial: { label: 'Consultas / Exames',    base: 180 },
    odontologico: { label: 'Odontológico',          base: 220 },
    home_care:    { label: 'Home Care',             base: 280 },
  }

  const complexMap: Record<Complexidade, { label: string; mult: number }> = {
    simples:  { label: 'Simples (até 20 itens)',            mult: 1.0 },
    media:    { label: 'Média (21–80 itens)',               mult: 1.6 },
    complexa: { label: 'Complexa (80+ itens / múltiplas)',  mult: 2.4 },
  }

  const paginasNum = Math.max(1, parseInt(paginas) || 1)
  const paginasMult = paginasNum <= 20 ? 1 : paginasNum <= 60 ? 1.3 : 1.7

  const valorBase = tipoMap[tipo].base * complexMap[complexidade].mult * paginasMult
  const valorMin = Math.ceil(valorBase / 10) * 10
  const valorMax = Math.ceil((valorBase * 1.4) / 10) * 10

  const contaNum = parseFloat(valorConta.replace(',', '.')) || 0
  const potencialGlosa = contaNum > 0 ? contaNum * 0.18 : null

  function calcular() {
    setCalculado(true)
    setTimeout(() => {
      document.getElementById('resultado-calc')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 100)
  }

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <div className="text-xs font-semibold tracking-widest uppercase text-teal-500 mb-4">Simulação</div>
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl md:text-5xl text-teal-950 leading-tight mb-4"
          >
            Avaliação inicial
            <br />
            <span className="italic">da sua conta</span>
          </h2>
          <p className="text-slate-500 max-w-lg">
            Simule o valor da auditoria da sua conta médica. O valor final é definido após análise documental preliminar gratuita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <div className="bg-white border border-slate-100 rounded-sm p-8">
            <div className="mb-6">
              <label className="block text-xs font-semibold text-teal-950 tracking-wide uppercase mb-3">
                Tipo de conta médica
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(tipoMap) as TipoServico[]).map(t => (
                  <button
                    key={t}
                    onClick={() => { setTipo(t); setCalculado(false) }}
                    className={`text-left px-4 py-3 border rounded-sm text-sm font-medium transition-all ${
                      tipo === t
                        ? 'bg-teal-900 border-teal-900 text-white'
                        : 'border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-900'
                    }`}
                  >
                    {tipoMap[t].label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-teal-950 tracking-wide uppercase mb-3">
                Complexidade estimada
              </label>
              <div className="flex flex-col gap-2">
                {(Object.keys(complexMap) as Complexidade[]).map(c => (
                  <button
                    key={c}
                    onClick={() => { setComplexidade(c); setCalculado(false) }}
                    className={`text-left px-4 py-3 border rounded-sm text-sm font-medium transition-all flex items-center gap-3 ${
                      complexidade === c
                        ? 'bg-teal-50 border-teal-500 text-teal-900'
                        : 'border-slate-200 text-slate-600 hover:border-teal-200'
                    }`}
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 ${
                        complexidade === c ? 'border-teal-500 bg-teal-500' : 'border-slate-300'
                      }`}
                    />
                    {complexMap[c].label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-teal-950 tracking-wide uppercase mb-3">
                Volume da documentação (páginas aprox.)
              </label>
              <input
                type="number"
                min="1"
                value={paginas}
                onChange={e => { setPaginas(e.target.value); setCalculado(false) }}
                placeholder="Ex: 30"
                className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
              />
            </div>

            <div className="mb-8">
              <label className="block text-xs font-semibold text-teal-950 tracking-wide uppercase mb-3">
                Valor total da conta (R$){' '}
                <span className="font-normal text-slate-400 normal-case">— opcional, para estimar potencial de glosa</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">R$</span>
                <input
                  type="number"
                  min="0"
                  value={valorConta}
                  onChange={e => { setValorConta(e.target.value); setCalculado(false) }}
                  placeholder="0,00"
                  className="w-full border border-slate-200 rounded-sm pl-10 pr-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                />
              </div>
            </div>

            <button
              onClick={calcular}
              className="w-full bg-teal-900 hover:bg-teal-800 text-white font-semibold py-3.5 rounded-sm transition-colors text-sm"
            >
              Calcular Avaliação
            </button>
          </div>

          {/* Result */}
          <div id="resultado-calc">
            {!calculado ? (
              <div className="bg-teal-950 text-white rounded-sm p-8 h-full min-h-64 flex flex-col justify-between">
                <div>
                  <div
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="text-3xl mb-3 leading-snug"
                  >
                    Descubra quanto custa auditar sua conta
                  </div>
                  <p className="text-teal-300 text-sm leading-relaxed">
                    Preencha o formulário ao lado para ver uma estimativa. O valor final é confirmado após análise preliminar gratuita da documentação.
                  </p>
                </div>
                <div className="mt-8 space-y-3">
                  {[
                    'Análise preliminar gratuita',
                    'Contrato e NDA antes do envio',
                    'Relatório técnico detalhado',
                    'Suporte pós-auditoria incluso',
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-sm bg-teal-500 flex-shrink-0 flex items-center justify-center">
                        <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                          <path d="M1 3.5L3 5.5L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-teal-200 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-white border border-slate-100 rounded-sm p-8">
                  <div className="text-xs font-semibold tracking-widest uppercase text-teal-500 mb-2">
                    Estimativa de honorários
                  </div>
                  <div
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="text-5xl text-teal-950 mb-1"
                  >
                    R$ {valorMin.toLocaleString('pt-BR')}
                    <span className="text-2xl text-slate-400"> – {valorMax.toLocaleString('pt-BR')}</span>
                  </div>
                  <p className="text-slate-500 text-sm mt-2">
                    Estimativa para <strong>{tipoMap[tipo].label}</strong>, complexidade{' '}
                    <strong>{complexMap[complexidade].label.split(' (')[0].toLowerCase()}</strong>, aprox.{' '}
                    <strong>{paginasNum} páginas</strong>.
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="text-xs font-semibold tracking-wide uppercase text-slate-400 mb-3">Detalhamento</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Auditoria base</span>
                        <span className="text-teal-950 font-medium">R$ {tipoMap[tipo].base.toLocaleString('pt-BR')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Fator complexidade ({complexMap[complexidade].mult}×)</span>
                        <span className="text-teal-950 font-medium">incluso</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Volume documental</span>
                        <span className="text-teal-950 font-medium">
                          {paginasMult > 1 ? `+${Math.round((paginasMult - 1) * 100)}%` : 'sem acréscimo'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {potencialGlosa !== null && potencialGlosa > 0 && (
                  <div className="bg-teal-50 border border-teal-200 rounded-sm p-6">
                    <div className="text-xs font-semibold tracking-widest uppercase text-teal-600 mb-1">
                      Potencial de recuperação estimado
                    </div>
                    <div
                      style={{ fontFamily: 'var(--font-display)' }}
                      className="text-3xl text-teal-900 mb-1"
                    >
                      R$ {potencialGlosa.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <p className="text-teal-700 text-xs">
                      Baseado em média histórica de 18% de inconsistências em contas desta categoria. Valor sujeito à auditoria real.
                    </p>
                  </div>
                )}

                <div className="bg-teal-900 rounded-sm p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                  <div>
                    <div className="text-white font-semibold text-sm">Pronto para começar?</div>
                    <div className="text-teal-300 text-xs mt-0.5">Análise preliminar gratuita, sem compromisso</div>
                  </div>
                  <Link
                    to="/contato"
                    className="bg-white text-teal-900 font-semibold text-sm px-5 py-2.5 rounded-sm hover:bg-teal-50 transition-colors flex-shrink-0"
                  >
                    Entrar em Contato
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
