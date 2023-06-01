import './Navbar.css'

import { NavLink , Link } from 'react-router-dom'
import { BsHouseDoorFill, BsFillPersonFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav id='nav'>
        <Link to='/'>veetask</Link>
        <ul id='nav-links'>
            <li>
                <NavLink to='/'>
                    <BsHouseDoorFill />
                </NavLink>
            </li>
            <li>
                <NavLink to='/login'>
                    Entrar
                </NavLink>
            </li>
            <li>
                <NavLink to='/cadastro'>
                    Cadastrar
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar