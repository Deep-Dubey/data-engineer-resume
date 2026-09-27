import { Database } from 'lucide-react'

export default function Loader() {
  return (
    <div className="loader" aria-label="Loading portfolio">
      <div className="loader-mark">
        <Database size={21} />
      </div>
      <div className="loader-line">
        <i />
      </div>
      <p>Loading portfolio...</p>
    </div>
  )
}
