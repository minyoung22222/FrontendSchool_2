import './header.css'
import Menu from '../Menu/Menu'

export default function Header({id, nickname}){
  return (
    <div className='test'>
      <h1>{id}  ({nickname})님 반갑습니다.</h1>
        <Menu />
    </div>
  )
}