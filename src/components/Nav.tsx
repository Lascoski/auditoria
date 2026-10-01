import { useState } from 'react'
import { Link } from 'react-router'

const links = [
  { label: 'Serviços', to: '/servicos' },
  { label: 'Como Funciona', to: '/como-funciona' },
  { label: 'Avaliação', to: '/avaliacao' },
  { label: 'Contato', to: '/contato' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-sm bg-teal-900 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L10 6H14L11 9L12 13L8 11L4 13L5 9L2 6H6L8 2Z" fill="white" fillOpacity="0.9" />
            </svg>
          </span>
          <span style={{ fontFamily: 'var(--font-display)' }} className="text-teal-900 text-lg tracking-tight leading-none">
            Nat-audit<span className="text-teal-500 italic"> </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="text-slate-500 hover:text-teal-900 text-sm font-medium transition-colors duration-150"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-teal-900 p-1"
          onClick={() => setOpen(v => !v)}
          aria-label="Menu"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 7H18M4 11H18M4 15H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-slate-700 text-sm font-medium"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
