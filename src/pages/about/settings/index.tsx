import React from 'react'
export default function Home() {
  return (<div> This is about/settings index</div>)
}
interface Props extends React.ReactPropTypes {
  children: React.ReactNode
}

export const Settings: React.FC<Props> = (props) => {
  const { children } = props
  return (
    <>
      <div> setting is here</div>
      <div>{children}</div>
    </>
  )
}