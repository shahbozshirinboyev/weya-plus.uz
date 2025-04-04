import { createBrowserRouter, RouterProvider } from "react-router-dom"

// layouts
import RootLayout from "./layouts/RootLayout.jsx"
import EducationLayout from "./layouts/EducationLayout.jsx"
import LessonLayout from "./layouts/LessonLayout.jsx"

// pages
import Home from "./pages/Home.jsx"
import MyProfile from "./pages/MyProfile.jsx"
import Education from "./pages/Education.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"
import SelectCourse from "./pages/SelectCourse.jsx"
import SelectLesson from "./pages/SelectLesson.jsx"

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
        element: <EducationLayout />,
        children: [
          {
            index: true,
            element: <Education />,
          },
          {
            path: "select-course",
            element: <LessonLayout />,
            children: [
              {
                index: true,
                element: <SelectCourse />,
              },
              {
                path: "select-lesson",
                element: <SelectLesson />,
              }
            ]
          }
        ]
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