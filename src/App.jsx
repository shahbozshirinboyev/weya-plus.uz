import { createBrowserRouter, RouterProvider } from "react-router-dom"

// layouts
import RootLayout from "./layouts/RootLayout.jsx"

// pages
import Home from "./pages/Home.jsx"
import MyProfile from "./pages/MyProfile.jsx"
import Education from "./pages/Education.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "my-profile",
        element: <MyProfile />,
      }
    ]
  }
])

function App() {
  return (<RouterProvider router={routes} />)
}

export default App