import { Database } from 'lucide-react'

export default function Loader() {
  return <div className="loader" aria-label="Loading portfolio"><div className="loader-mark"><Database size={21} /></div><div className="loader-copy"><span>INITIALIZING PORTFOLIO</span><b>04 / 04</b></div><div className="loader-line"><i /></div><p>Connecting the dots...</p></div>
}
