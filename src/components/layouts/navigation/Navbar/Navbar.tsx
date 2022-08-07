import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <header className="sticky">
      <span className="logo">
        <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
      </span>
      <NavLink to="/" className="button rounded">
        <span className="icon-home"></span>
        Home
      </NavLink>
      <NavLink to="/projects" className="button rounded">
        Projects
      </NavLink>
      <NavLink to="/counter" className="button rounded">
        Counter
      </NavLink>
    </header>
  )
}

export default Navbar;