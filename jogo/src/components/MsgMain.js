import React from 'react'
import MsgProps from './MsgProps'

const value = 561515645
export default function MsgMain() {
    return (
        <div>
            <MsgProps name='Darth Vader'/>
            <MsgProps name='Spark'/>
            <MsgProps name={value}/>
            <MsgProps/>
            <MsgProps name='Carol'/>
        </div>
    )
}