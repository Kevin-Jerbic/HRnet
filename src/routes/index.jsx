// Import dependencies
import { createBrowserRouter, Outlet } from 'react-router-dom';

// Import layouts
import Footer from '../layouts/Footer.jsx';
import Header from '../layouts/Header.jsx';

// Import pages
import CreateEmployee from '../pages/CreateEmployee';
import EmployeeList from '../pages/EmployeeList';
import Error from '../pages/Error';

// Set standard layout
const Layout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);

// Set error layout
const ErrorLayout = () => (
    <>
        <Header />
        <Error />
        <Footer />
    </>
);

// Router configuration
const ReactRouter = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorLayout />,
        children: [
            // Pour le build, il faut changer le path de l'index.html
            {
                path: '/app/dist/index.html',
                element: <CreateEmployee />,
            },
            {
                path: '/',
                element: <CreateEmployee />,
            },
            {
                path: 'employee-list',
                element: <EmployeeList />,
            },
        ],
    },
]);

export default ReactRouter;
