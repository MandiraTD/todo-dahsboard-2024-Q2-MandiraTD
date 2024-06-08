import React from 'react';
import '../styles/SideMenuBar.css'; 
import imgIcon from '../imgs/imgIcon.png';

const SideMenuBar = () => {
  return (
    <div className="side-menu-bar">
      <div className="menu open"> {/* Menu is always open */}
        <div className='square'> 
            <h3>Acmy Solution</h3>
            </div>
      <div className='circle'>
        <img src= {imgIcon}/>
      </div>
      </div>
    </div>
  );
};

export default SideMenuBar;
