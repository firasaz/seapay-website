import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAppContext } from 'Main';
import { topNavbarBreakpoint } from 'config';
import classNames from 'classnames';
import Flex from 'components/common/Flex';
import ThemeControlDropdown from 'components/navbar/top/ThemeControlDropdown';
import NavbarTopDropDownMenus from 'components/navbar/top/NavbarTopDropDownMenus';
import handleNavbarTransparency from 'helpers/handleNavbarTransparency';
import {
    productsRoutes,
    solutionsRoutes,
    developersRoutes,
    companyRoutes
  } from 'routes/siteMaps';
function Navigation() {
    const {
        config: { isDark, isRTL }
    } = useAppContext();
    
    const [navbarCollapsed, setNavbarCollapsed] = useState(true);

    useEffect(() => {
    window.addEventListener('scroll', handleNavbarTransparency);
    return () => window.removeEventListener('scroll', handleNavbarTransparency);
    }, []);

    return (
        <Navbar
            variant={isDark ? 'light' : 'dark'}
            fixed="top"
            expand={topNavbarBreakpoint}
            className={classNames('navbar-standard navbar-theme', {
            'bg-100': !navbarCollapsed && isDark,
            'bg-dark': !navbarCollapsed && !isDark
            })}
        >
            <Container>
                <Navbar.Brand className="text-white" as={Link} to="/">
                    SeaPay
                </Navbar.Brand>
                <Flex alignItems="center" className="gap-2">
                    <ThemeControlDropdown dropdownClassName="d-lg-none" />
                    <Navbar.Toggle onClick={() => setNavbarCollapsed(!navbarCollapsed)} />
                </Flex>
                <Navbar.Collapse className="scrollbar">
                    <Nav>
                    <NavbarTopDropDownMenus setNavbarCollapsed={setNavbarCollapsed} />
                    </Nav>
                    <Nav navbar className="ms-auto align-items-lg-center">
                    <Nav.Item>
                        <Nav.Link as={Link} to="https://mp.seapay.com.sa/register">
                        دخول
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="https://mp.seapay.com.sa/register">
                        تسجيل
                        </Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
