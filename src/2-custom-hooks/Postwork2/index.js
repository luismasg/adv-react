import React, { useState } from 'react'

export default function() {
  const [name, setName] = useState('Juan Perez (valor Inicial)')

  return (
    <div>
      <input
        type="text"
        placeholder="introduce tu nombre"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  )
}
