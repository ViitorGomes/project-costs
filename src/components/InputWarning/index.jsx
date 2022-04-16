import React from 'react'
import { Warning } from './style'
import { MdErrorOutline } from "react-icons/md";

function index() {
  return (
    <Warning>
      <MdErrorOutline/>
      This field is required
    </Warning>
  )
}

export default index