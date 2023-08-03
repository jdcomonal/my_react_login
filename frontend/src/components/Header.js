import { Link } from 'react-router-dom'

const Header = () => {

   return (
        // Links replacement for <a> tag
        // '/' for index page 
      <header className='navbar'>
            <div> <h1>DENMARZ</h1></div>
            <div>
               <Link to="/"> Home </Link>
               <Link to="/about"> About </Link>
               <Link to="/blog"> Blog </Link>
               <Link to="/contact"> Contact </Link>
              <Link to="/login"> LOG IN </Link>
            </div>
      </header>
   )
}

export default Header;