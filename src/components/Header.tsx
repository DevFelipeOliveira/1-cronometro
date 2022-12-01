import { Timer, Scroll } from 'phosphor-react'
import logo from '../assets/Logo.svg'
export const Header = () => {
  return (
    <>
      <img src={logo} alt="" />
      <Timer size={24} />
      <Scroll size={24} />
    </>
  )
}
