import React,{useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'
import './Navbar.css';

const Navbar=()=>{
  const location = useLocation();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // Set selected based on current path
    const currentPath = location.pathname.split('/')[1];
    setSelected(currentPath);
  }, [location]);

  const handleSelect = (option) => {
    setSelected(option);
  };

    return (
      <div>
        
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid" >
    <a className="navbar-brand" href="*"style={{color:'#7DF9FF', fontWeight: 'bold'}}>NewZyy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"style={{justifyContent:'space-between'}}>
        <li className={`navbar-item ${selected === 'home' ? 'selected' : ''}`} 
                    onClick={() => handleSelect('home')}>
          <a className="nav-link" aria-current="page" href="*">Home</a>
        </li>
        
        <li className={`navbar-item ${selected === 'business' ? 'selected' : ''}`} onClick={() => handleSelect('business')}>
          <a className="nav-link" href="/business">Business</a>
        </li>

        {/* <li className="nav-item">
          <a className="nav-link" href="/enternainment">Enternainment</a>
        </li> */}
        <li className={`navbar-item ${selected === 'general' ? 'selected' : ''}`} onClick={() => handleSelect('general')}>
          <a className="nav-link" href="/general">General</a>
        </li>
        <li className={`navbar-item ${selected === 'health' ? 'selected' : ''}`} onClick={() => handleSelect('health')}>
          <a className="nav-link" href="/health">Health</a>
        </li>
        <li className={`navbar-item ${selected === 'science' ? 'selected' : ''}`} onClick={() => handleSelect('science')}>
          <a className="nav-link" href="/science">Science</a>
        </li>
        <li className={`navbar-item ${selected === 'sports' ? 'selected' : ''}`} onClick={() => handleSelect('sports')}>
          <a className="nav-link" href="/sports">Sports</a>
        </li>
        <li className={`navbar-item ${selected === 'technology' ? 'selected' : ''}`} onClick={() => handleSelect('technology')}>
          <a className="nav-link" href="/technology">Technology</a>
        </li>
        <li className="navbar-item ms-auto" style={{justifyContent:'space-between', backgroundColor:'#87CEEB', color:'black', fontWeight:'bolder', borderRadius:'20px'}}>
          <a className="nav-link" href="/notes">Notes</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>

      </div>
    )
  
}

export default Navbar
