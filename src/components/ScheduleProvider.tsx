import React, {useEffect, useState} from 'react'
import {ScheduleTable, Program} from './ScheduleTable'

interface Event {
  program: Program
}

const transformData = (data: Event[]) : Program[] => {
  return data.map(event => event.program)

}

export const ScheduleProvider: React.FC<{}> = () => {
  const [schedule, setSchedule] = useState<Program[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  useEffect(() => {
    fetch('https://garrus.ra100.net/sc/export/2020/program.json')
      .then((response) => response.json())
      .then((result) => {
        setSchedule(transformData(result.timeline))
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  if (loading) {
    return <div data-testid="loading">loading</div>
  }
  if (error) {
    return <div>Something happened. {error}</div>
  }
  return (
    <div data-testid="ScheduleTable">
      <ScheduleTable data={schedule} />
    </div>
  )
}


