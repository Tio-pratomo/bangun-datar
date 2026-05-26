import { useState } from 'react'

const shapes = [
  { id: 'kubus', label: 'Kubus' },
  { id: 'balok', label: 'Balok' },
  { id: 'tabung', label: 'Tabung' },
  { id: 'kerucut', label: 'Kerucut' },
  { id: 'bola', label: 'Bola' },
  { id: 'limas-segitiga', label: 'Limas Segitiga' },
  { id: 'limas-segiempat', label: 'Limas Segiempat' },
  { id: 'limas-segilima', label: 'Limas Segilima' },
  { id: 'limas-segienam', label: 'Limas Segienam' },
  { id: 'prisma-segitiga', label: 'Prisma Segitiga' },
  { id: 'prisma-segiempat', label: 'Prisma Segiempat' },
  { id: 'prisma-segilima', label: 'Prisma Segilima' },
  { id: 'prisma-segienam', label: 'Prisma Segienam' },
]

export default function BangunRuang() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Bangun Ruang</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {shapes.map(s => (
          <button
            key={s.id}
            onClick={() => setSelected(s.id)}
            className={`px-4 py-2 rounded border transition-colors ${
              selected === s.id
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white dark:bg-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
      {selected && (
        <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
          <p className="text-lg">Kalkulator {shapes.find(s => s.id === selected)?.label} (akan datang)</p>
        </div>
      )}
    </div>
  )
}
