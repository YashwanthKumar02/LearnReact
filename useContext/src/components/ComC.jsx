import React, { useContext } from 'react'
import { ChannelName } from './ComA'

function ComC() {
    const name = useContext(ChannelName)
  return (
    <>
    <h1>My name is {name}</h1>
    </>
  )
}

export default ComC