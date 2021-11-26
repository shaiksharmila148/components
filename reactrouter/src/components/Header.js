import { Link } from "react-router-dom"

const Header = () =>{
    return (
        <div>
        <h1>React Router</h1>
        <u1 className= 'nav'> 
           <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/About'>About</Link>
            </li>
            <li>
            <Link to='/Profile'>Profile</Link>
            </li>
            </u1>
        </div>
    )
}
export default Header 