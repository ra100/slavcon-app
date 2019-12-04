import React from 'react'

type Props = {onClick: () => void}

export const Button: React.FC<Props> = ({onClick, children}) => (
  <button onClick={onClick}>{children || 'I am not defined'}</button>
)
