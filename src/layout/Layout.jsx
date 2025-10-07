import { Outlet } from 'react-router-dom';
import NavBar from '../components/UIs/navBar/NavBar';

const Layout = () => {
  return (
    <>
        <NavBar />
        <Outlet />
    </>
  )
}

export default Layout;