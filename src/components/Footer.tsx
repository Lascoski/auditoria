import { Link } from 'react-router'

const links = [
  { label: 'Serviços', to: '/servicos' },
  { label: 'Como Funciona', to: '/como-funciona' },
  { label: 'Avaliação', to: '/avaliacao' },
  { label: 'Contato', to: '/contato' },
]

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-teal-300 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-8 border-b border-teal-800">
          <div>
            <div style={{ fontFamily: 'var(--font-display)' }} className="text-white text-lg mb-1">
              Audit<span className="italic text-teal-400"> </span>
            </div>
            <p className="text-sm max-w-xs">
              Auditoria particular de contas médicas em todo o Brasil.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            {links.map(l => (
              <Link key={l.to} to={l.to} className="hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-teal-500">
          <p>© {new Date().getFullYear()} Audit Pro — Todos os direitos reservados</p>
          <p>CRM/CFM | CRO | Registro profissional ativo</p>
        </div>
      </div>
    </footer>
  )
}
