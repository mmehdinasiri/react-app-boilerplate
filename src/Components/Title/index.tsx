import React from 'react'

const Title = ({ title }: ITitle) => {
  return (
    <h1 className='title' title={title}>
      This is a typescript react app
    </h1>
  )
}

export default Title
