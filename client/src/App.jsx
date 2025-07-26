import React, { useEffect, useState } from 'react'

const App = () => {
  const [msg, setMsg] = useState('Connecting to backend...')

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL || 'https://deployclientfinalbackend.onrender.com'
    fetch(url + '/health').then(r => r.json()).then(d => setMsg(d.status))
      .catch(() => setMsg('Could not reach backend'))
  }, [])

  return <h1>{msg}</h1>
}

export default App
