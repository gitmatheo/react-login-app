import React, { ReactElement, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarText, NavItem } from 'reactstrap';
import { UserContext } from '../contexts/UserContext';
import { logout } from '../api/apiService';
import welcomeImg from '../assets/welcome.svg';

const Dashboard = (): ReactElement => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <Navbar color="light" light>
        <NavbarBrand href="/">Zaven</NavbarBrand>
        <div className="d-flex justify-content-end">
          <NavbarText className="mr-2">
            Hi! {user?.firstName} {user?.lastName}
          </NavbarText>
          <Nav className="d-flex align-items-center">
            <NavItem>
              <Link to="/login" onClick={logout}>
                Logout
              </Link>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
      <div className="col-md-6 mx-auto mt-5">
        <img className="img-fluid w-100" src={welcomeImg} alt="winner trophy" />
        <h1 className="text-center">Hurray!</h1>
      </div>
    </>
  );
};

export default Dashboard;
