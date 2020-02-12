import React from 'react'

export interface Program {
  pid: string
  author: string
  title: string
  short_title: string
  line_id: string
  line_name: string
  line_class: string
  location_id: string
  location: string
  type: string
  d: string
  h: string
  m: string
  length: string
  split: string
  hide: string
  description: string
  highlight: string
  picture: Picture
  author_id: string
}

export interface Picture {
  src: string
  alt: string
  title: string
}

type Props = {data: Program[]}

export const ScheduleTable: React.FC<Props> = ({data}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>author</th>
          </tr>
        </thead>
        <tbody>
          {data.map((program) => (
            <tr key={program.pid}>
              <td>{program.title}</td>
              <td>{program.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
