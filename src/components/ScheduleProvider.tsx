import React, {useEffect, useState} from 'react'
import {ScheduleTable} from './ScheduleTable'

export const ScheduleProvider: React.FC<{}> = () => {
  const [schedule, setSchedule] = useState([])
  useEffect(() => {
    fetch('https://garrus.ra100.net/sc/export/2020/program.json')
      .then((response) => response.json())
      .then((result) => setSchedule(result.timeline))
  }, [])
  return <ScheduleTable data={schedule} />
}
