import React from 'react'

function Greetings({name, wishes}) {
  return (
    <div>
      <h3>Hello {name}. How are you {wishes}</h3>
    </div>
  )
}

export default Greetings