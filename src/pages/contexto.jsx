import { createContext, useContext, useState } from 'react'

const cycle = createContext({})

function NewCycleForm() {
  const { newCycle, setNewCycle } = useContext(cycle)
  return (
    <>
      <h1>NewCycle: {newCycle}</h1>
      <button
        onClick={() => {
          setNewCycle(newCycle + 1)
        }}
      >
        +ADD
      </button>
    </>
  )
}

function Countdown() {
  const { newCycle } = useContext(cycle)
  return <h1>Countdown {newCycle}</h1>
}

export function Contexto() {
  const [newCycle, setNewCycle] = useState(0)
  return (
    <cycle.Provider value={{ newCycle, setNewCycle }}>
      <div>
        <Countdown />
        <NewCycleForm />
      </div>
    </cycle.Provider>
  )
}
