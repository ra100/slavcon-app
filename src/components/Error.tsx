import React from 'react'

type Props = {errorMessage?: string}

export const Error: React.FC<Props> = ({errorMessage}) => {
  if (!errorMessage) {return null}
  return (<div>{errorMessage}</div>)
}
