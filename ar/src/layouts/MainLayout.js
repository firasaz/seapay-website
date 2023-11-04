import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
const MainLayout = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }
    }, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default MainLayout;
