import React from 'react';
import NavbarDropdown from './NavbarDropdown';
import {
  productsRoutes,
  solutionsRoutes,
  developersRoutes,
  companyRoutes
} from 'routes/siteMaps';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { flatRoutes } from 'helpers/utils';
import { useAppContext } from 'Main';

const NavbarTopDropDownMenus = () => {
  const {
    config: { navbarCollapsed, showBurgerMenu },
    setConfig
  } = useAppContext();

  const handleDropdownItemClick = () => {
    if (navbarCollapsed) {
      setConfig('navbarCollapsed', !navbarCollapsed);
    }
    if (showBurgerMenu) {
      setConfig('showBurgerMenu', !showBurgerMenu);
    }
  };
  return (
    <>
      <NavbarDropdown title={productsRoutes.label}>
        {flatRoutes(productsRoutes.children).map(route => (
          <Dropdown.Item
            key={route.name}
            as={Link}
            className={route.active ? 'link-600' : 'text-500'}
            to={route.to}
            onClick={handleDropdownItemClick}
          >
            {route.name}
          </Dropdown.Item>
        ))}
      </NavbarDropdown>
      <NavbarDropdown title={solutionsRoutes.label}>
        {flatRoutes(solutionsRoutes.children).map(route => (
          <Dropdown.Item
            key={route.name}
            as={Link}
            className={route.active ? 'link-600' : 'text-500'}
            to={route.to}
            onClick={handleDropdownItemClick}
          >
            {route.name}
          </Dropdown.Item>
        ))}
      </NavbarDropdown>
      <NavbarDropdown title={developersRoutes.label}>
        {flatRoutes(developersRoutes.children).map(route => (
          <Dropdown.Item
            key={route.name}
            as={Link}
            className={route.active ? 'link-600' : 'text-500'}
            to={route.to}
            onClick={handleDropdownItemClick}
          >
            {route.name}
          </Dropdown.Item>
        ))}
      </NavbarDropdown>
      <NavbarDropdown title={companyRoutes.label}>
        {flatRoutes(companyRoutes.children).map(route => (
          <Dropdown.Item
            key={route.name}
            as={Link}
            className={route.active ? 'link-600' : 'text-500'}
            to={route.to}
            onClick={handleDropdownItemClick}
          >
            {route.name}
          </Dropdown.Item>
        ))}
      </NavbarDropdown>
    </>
  );
};

export default NavbarTopDropDownMenus;
