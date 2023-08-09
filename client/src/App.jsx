import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  EditJob,
  Error
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/dashboard',
        element: <DashboardLayout />
      }, {
        path: '/landing',
        element: <Landing />
      }
    ]
  },
  {
    path: '/edit-job',
    element: <EditJob />
  }

])

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App