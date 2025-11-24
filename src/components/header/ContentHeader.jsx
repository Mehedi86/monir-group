import React from 'react'

export default function ContentHeader({title, titleStyle}) {
  return (
    <div>
      <h1 className={`${titleStyle}`}>{title}</h1>
    </div>
  )
}
