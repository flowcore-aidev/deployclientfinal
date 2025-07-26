
import React, { useState } from 'react';

function App() {
  const [command, setCommand] = useState('');
  const [status, setStatus] = useState('');

  const sendCommand = async () => {
    const res = await fetch('/api/build', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ command })
    });
    const data = await res.json();
    setStatus(data.status || 'No response');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>LIDC Deploy Console 🧠</h1>
      <input 
        type="text" 
        placeholder="Enter command (e.g. build saas app)" 
        value={command}
        onChange={e => setCommand(e.target.value)}
        style={{ width: '60%', padding: '10px', marginRight: '10px' }}
      />
      <button onClick={sendCommand}>Run</button>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
}

export default App;
