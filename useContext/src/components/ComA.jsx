import React from 'react'
import ComB from './ComB'
import { createContext } from 'react'

const ChannelName = createContext()

function ComA() {

  return (
    <>
    <ChannelName.Provider value={"Yashwanth Kumar"}>
        <ComB/>
    </ChannelName.Provider>
    </>
  )
}

export default ComA
export { ChannelName };