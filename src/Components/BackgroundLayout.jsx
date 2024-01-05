import React, { useContext } from 'react'
import { useStateContext } from '../Context'

function BackgroundLayout() {

  const {weather} = useStateContext()

  console.log(weather)
  return (
    <div>
      
    </div>
  )
}

export default BackgroundLayout
