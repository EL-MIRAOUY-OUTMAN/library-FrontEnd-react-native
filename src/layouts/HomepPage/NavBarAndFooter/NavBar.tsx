import { NavLink } from "react-router-dom";

export const NavBar =()=>{
    return(
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
      <div className='container-fluid'>
        
         <span className='navbar-brand'> luv 2 read</span>
         <button className='navbar-toggler' type='button'
         data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
         aria-controls='#navbarNavDropdown' aria-expanded='false'
         aria-label='Toggel Navigation'

         >
         <span className='navbar-toggler-icon'>
         
         </span>
 
         </button>
         <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li  className='nav-item' >
               <NavLink className='nav-link' to="/">Home</NavLink>
            </li>
            <li  className='nav-item' >
            <NavLink className='nav-link' to="/search">Search Books</NavLink>
            </li>
          </ul>
          <ul className='navbar-nav ms-auto '>
            <li  className='nav-item m-1' >
               <a className='nav-link btn-outline-light' href="#">S'inscrire</a>
            </li>
          
          </ul>
         </div>
      </div>
    </nav>
    );
}