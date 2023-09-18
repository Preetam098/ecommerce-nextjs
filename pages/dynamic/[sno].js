import React from 'react'
import Router, { useRouter } from 'next/router'


const SNo = () => {
    const router = useRouter()
    const {sno} = router.query

  return (
    <div>Post : {sno} </div>
  )
}

export default SNo