import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';

import Events from "./components/Events";
import Error from './pages/Error';
import HackathonForm from './pages/HackathonForm';
import HackathonPage from './pages/HackathonPage';
import MainHome from './pages/MainHome';
import RegisterForm from './pages/RegisterForm';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainHome />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/events",
      element: <Events />,
      // errorElement: <ErrorPage />,
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    //   // errorElement: <ErrorPage />,
    // },
    {
      path: "/registration-form",
      element: <RegisterForm />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/hackathon-form",
      element: <HackathonForm/>,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/hackathon",
      element: <HackathonPage/>,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/*",
      element: <Error/>,
      // errorElement: <ErrorPage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
