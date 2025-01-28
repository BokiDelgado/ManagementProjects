import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import './pages/signup/SignUp.css';

import { HeroUIProvider } from "@heroui/react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Routes/Root.tsx';
import SignIn from './Views/SignIn/SignIn.tsx';
import SignUp from './Views/SignUp/SignUp.tsx';
import Dashboard from './Views/Dashboard/Dashboard.tsx';
import ErrorPage from './Views/ErrorPage/ErrorPage.tsx';
import UserDashboard from './Views/UserDashboard/UserDashboard.tsx'
// import Root from './Routes/Root';
// import ErrorPage from './ErrorPage/ErrorPage.tsx';
// import LandingPage from './pages/landingPage.tsx';
// import Dashboard from './pages/Dashboard.tsx';
// import SignUp from './pages/signup/SignUp.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Dashboard/> },
    ],
  },
  {
    path: "/registro",
    element: <SignUp/>
  },
  {
    path: "/iniciar-sesion",
    element: <SignIn />
  },
  {
    path: "/user",
    element: <UserDashboard/>
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <HeroUIProvider>
      {/* <App /> */}
      <>
      </>
    </HeroUIProvider>
  </StrictMode>,
);
