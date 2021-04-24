import React, { ReactElement, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarText, NavItem } from 'reactstrap';
import { UserContext } from '../contexts/UserContext';
import { logout } from '../api/apiService';

const Dashboard = (): ReactElement => {
  const { user, setUser } = useContext(UserContext);

  return (
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
  );
};

export default Dashboard;
