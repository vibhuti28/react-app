import { Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { NavLink as RouterLink } from 'react-router-dom';
import { MENU } from './shared/Menu';
import { useState } from 'react';

export default function Header() {
    const [menu, setMenu] = useState(MENU);
    const menuItems = menu.map((menuItem) => {
        return (
            <NavItem>
                <NavLink>
                    <RouterLink to={menuItem.href} className="nav-item" exact={menuItem.exact ? true : false} activeClassName="active">{menuItem.name}</RouterLink>
                </NavLink>
            </NavItem>
        );
    });
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <RouterLink to='/'><img width="180px" src="/assets/images/logo.png" /></RouterLink>
                <div className="logo-text col-md-6">Famous Places of India</div>
                <div className="col-md-6">
                    <Nav className="me-auto">
                        {menuItems}
                    </Nav>
                </div>

            </Container>
        </Navbar>
    );
}