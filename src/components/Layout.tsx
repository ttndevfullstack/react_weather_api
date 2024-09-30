import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header></header>

      <main>
        <Outlet />
      </main>

      <footer>© 2024 My Website</footer>
    </div>
  );
};

export default Layout;
