import React, { ReactNode, FC, ReactPropTypes } from 'react'
interface Props extends ReactPropTypes {
  children: ReactNode
}
export const Page: FC<Props> = (props) => {
  return (
  <div>     
    <p> page settings </p>
    <div>{props.children}</div>
  </div>
  )
}