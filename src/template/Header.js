
import { Link } from "react-router-dom";
import { useState } from "react";
function Header(){
  const [openedDrawer, setOpenedDrawer] = useState(false)
  function changeNav(event) {
    if (openedDrawer) {
      setOpenedDrawer(false)
    }
  }
  return (
    <nav id='navigation' className=' navbar nav-custom-1 navbar-default-1 '>
      <div className='container'>
        <div>
           <Link className="navbar-brand" to="/" onClick={changeNav}> 
            Cyber Mom
            </Link>
          
        </div>
        
        <div >
          <Link to="/" className="navbar-brand"  > 
              Security awareness
              </Link> 
        </div>
        
      </div>
    </nav>
  ) 
  }  
  export default Header;