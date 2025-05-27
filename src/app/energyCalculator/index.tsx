import { PropsWithChildren } from "react"
import { Outlet } from "react-router"

export function CalculatorLayout(){
  return (
    <div>
      <Outlet />
    </div>
  )
}

export function CalculatorByPrice(){
  return (
    <div>
      <p>hello World</p>
    </div>
  )
}

export default function CalculatorPage(){
  return (
    <div>
      <p>Hello</p>
    </div>
  ) 
}