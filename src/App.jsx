import React, { useState } from 'react'
import { FileText, BookOpen, Gavel, BarChart2, Users, Database, CheckCircle, Terminal } from 'lucide-react'
import Resumen from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'
import Conclusiones from './components/Conclusiones'
import Prompts from './components/Prompts'

const NAV = [
  { id: 'resumen', label: 'Resumen', icon: FileText, comp: <Resumen /> },
  { id: 'marco', label: 'Marco', icon: BookOpen, comp: <Marco /> },
  { id: 'delitos', label: 'Delitos', icon: Gavel, comp: <Delitos /> },
  { id: 'comparacion', label: 'Comparación', icon: BarChart2, comp: <Comparacion /> },
  { id: 'responsabilidades', label: 'Responsabilidades', icon: Users, comp: <Responsabilidades /> },
  { id: 'datos', label: 'Datos', icon: Database, comp: <Datos /> },
  { id: 'conclusiones', label: 'Conclusiones', icon: CheckCircle, comp: <Conclusiones /> },
  { id: 'prompts', label: 'Prompts', icon: Terminal, comp: <Prompts /> },
]

export default function App() {
  const [selected, setSelected] = useState('resumen')

  const current = NAV.find((n) => n.id === selected)

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      <aside className="w-72 bg-white border-r p-6">
        <h1 className="text-xl font-semibold mb-6">Informe CEPVIN</h1>
        <nav className="space-y-2">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left hover:bg-gray-100 transition ${
                selected === item.id ? 'bg-gray-100 font-medium' : ''
              }`}
            >
              <item.icon className="w-5 h-5 text-gray-600" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">
          <header className="mb-6">
            <h2 className="text-2xl font-semibold">{current?.label}</h2>
          </header>
          <section className="prose max-w-none">
            {current?.comp}
          </section>
        </div>
      </main>
    </div>
  )
}
