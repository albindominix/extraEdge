import React from 'react'

export default function Wrapper({children,className}) {
  return (
    <div className={`w-full px-5 md:px-10 mx-auto `}>
      {children}
    </div>
  )
}
