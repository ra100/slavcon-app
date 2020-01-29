import React from 'react'
import './App.css'
import {ScheduleProvider} from './components/ScheduleProvider'

const App: React.FC = () => {
  return (
    <div className="App">
      <section>
        <ScheduleProvider />
      </section>
    </div>
  )
}

export default App
