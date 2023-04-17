import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Animals from './Animals.js'
import Birds from './Birds.js'
import Search from '../ui/Search.js'


const Header = () => {
    return (
        <BrowserRouter>
        <div className="header">

        <nav>
        <ul>
        <li>
        <NavLink to="/">
        Home
        </NavLink>
        </li>

        <li>
        <NavLink to="/animals">
        Animals
        </NavLink>
        </li>
          
        <li>
        <NavLink to="/birds">
        Birds
        </NavLink>
        </li>
        </ul>
        </nav> 
       
       <Search />
        </div>

         <Routes>
           <Route path="/" element={< Home/>} />
           <Route path="/animals" element={<Animals/>}/>
           <Route path="/birds" element={<Birds/>} />    
        </Routes> 

       
      </BrowserRouter>
    )
}

const Home = () => {
    return (
        <>
        <div className="home">
        <NavLink to="/animals">
        <div className="animals">
        <img src="./animals.jpg"  alt="animals" width="600" height="500"/>
        </div>
        </NavLink>
        
        <NavLink to="/birds">
        <div className="birds">
        <img src="./birds.jpg"  alt="birds" width="600" height="500"/>
        </div>
        </NavLink>
        </div>
        
        </>
    )
}

export default Header
