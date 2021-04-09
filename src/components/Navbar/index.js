import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import Fab from '@material-ui/core/Fab'
import Logo from '../../Assets/logo.jpg'
import { useHistory } from "react-router-dom";

const Navbar = () => {

  const history = useHistory();
  
  const logout = () => {
    if (localStorage.getItem('email')) {
      localStorage.removeItem('email')
      history.push('/login')
    }
  }

  return (
    <>
      <Nav>
        <NavLink to='/#'>
          <img src={Logo} width={350} height={160} style={{ marginLeft: -200 }} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink style={{
            textDecoration : 'none'
          }} to='/home' activeStyle>
            Notification & Feeds
          </NavLink>
          <NavLink style={{
            textDecoration : 'none'
          }} to='/addProjects' activeStyle>
            Add Project
          </NavLink>
          <NavLink style={{
            textDecoration : 'none'
          }} to='/project' activeStyle>
            View Projects
          </NavLink>
        </NavMenu>
        <NavBtn>
          <Fab color={'primary'} size={'large'} variant={'extended'} onClick={logout}>Logout</Fab>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;