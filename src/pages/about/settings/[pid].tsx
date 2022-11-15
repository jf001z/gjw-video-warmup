import React from 'react'
import { useRouter } from 'next/router'

export default function Home () {
  const router = useRouter()
  return (
      <div> setting pid is {router.query.pid}</div>
  )
}