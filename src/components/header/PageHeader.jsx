import React from 'react'

export default function PageHeader({title, subtitle, titleStyle, subtitleStyle}) {
  return (
    <div>
        {/* title */}
        <h1 className={`${titleStyle}`}>{title}</h1>
        {/* subtitle */}
        <p className={`${subtitleStyle}`}>{subtitle}</p>
    </div>
  )
}
