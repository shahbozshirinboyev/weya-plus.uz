import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

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

// sahifalarni animatsiya bilan o'rash
import PageWrapper from "./components/PageWrapper.jsx"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PageWrapper><Home /></PageWrapper>,
      },
      {
        path: "education",
        element: <EducationLayout />,
        children: [
          {
            index: true,
            element: <PageWrapper><Education /></PageWrapper>,
          },
          {
            path: "select-course",
            element: <LessonLayout />,
            children: [
              {
                index: true,
                element: <PageWrapper><SelectCourse /></PageWrapper>,
              },
              {
                path: "select-lesson",
                element: <PageWrapper><SelectLesson /></PageWrapper>,
              }
            ]
          }
        ]
      },
      {
        path: "my-profile",
        element: <PageWrapper><MyProfile /></PageWrapper>,
      }
    ]
  }
])

function App() {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={routes} />
    </AnimatePresence>
  )
}

export default App
