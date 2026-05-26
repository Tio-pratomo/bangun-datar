import { useState } from 'react'

const types = [
  { id: 'panjang', label: 'Panjang' },
  { id: 'volume', label: 'Volume' },
  { id: 'berat', label: 'Berat' },
]

export default function KonversiSatuan() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Konversi Satuan</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {types.map(t => (
          <button
            key={t.id}
            onClick={() => setSelected(t.id)}
            className={`px-4 py-2 rounded border transition-colors ${
              selected === t.id
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white dark:bg-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {selected && (
        <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
          <p className="text-lg">Konverter {types.find(t => t.id === selected)?.label} (akan datang)</p>
        </div>
      )}
    </div>
  )
}
