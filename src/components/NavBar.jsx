import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler,  NavbarBrand,  Nav,  NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'


const menuItems=[
  {path:'/',name:'Főoldal'},
  {path:'properties',name:'Ingatlanok'},
  {path:'contact', name:'Kapcsolat'},
]

export const NavBar=()=> {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar  style={{background: 'linear-gradient(to bottom, #3730a3,#c7d2fe)'}} fixed="top" className='shadow'>
        <NavbarBrand ><img src="house-color.svg" alt="icon" /></NavbarBrand>
        <NavbarToggler onClick={toggle}  />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {menuItems.map(obj=>
                <NavItem key={obj.name} >
                  <NavLink  className="nav-link" to={obj.path} onClick={toggle}>{obj.name}</NavLink>
                </NavItem>
                  )}
          </Nav>        
        </Collapse>
      </Navbar>
  );
}

