import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// layouts
import RootLayout from "./layouts/RootLayout.jsx";
import EducationLayout from "./layouts/EducationLayout.jsx";
import LessonLayout from "./layouts/LessonLayout.jsx";

// pages
import Home from "./pages/Home/Home.jsx";
import MyProfile from "./pages/Profile/MyProfile.jsx";
import Education from "./pages/Education/Education.jsx";
import SelectCourse from "./pages/Education/SelectCourse.jsx";
import SelectLesson from "./pages/Education/SelectLesson.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

// pages - Footer
import About from "./pages/Footer/About.jsx";
import Faq from "./pages/Footer/Faq.jsx";
import PrivacyPolicy from "./pages/Footer/PrivacyPolicy.jsx";
import Contact from "./pages/Footer/Contact.jsx";

// sahifalarni animatsiya bilan o'rash
import PageWrapper from "./components/ui/PageWrapper.jsx";
import Login from "./components/auth/Login.jsx";
import Registration from "./components/auth/Registration.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <PageWrapper>
            <Home />
          </PageWrapper>
        ),
      },
      {
        path: "login",
        element: (
          <PageWrapper>
            <Login />
          </PageWrapper>
        ),
      },
      {
        path: "registration",
        element: (
          <PageWrapper>
            <Registration />
          </PageWrapper>
        ),
      },
      {
        path: "education",
        element: <EducationLayout />,
        children: [
          {
            index: true,
            element: (
              <PageWrapper>
                <Education />
              </PageWrapper>
            ),
          },
          {
            path: "select-course",
            element: <LessonLayout />,
            children: [
              {
                index: true,
                element: (
                  <PageWrapper>
                    <SelectCourse />
                  </PageWrapper>
                ),
              },
              {
                path: "select-lesson",
                element: (
                  <PageWrapper>
                    <SelectLesson />
                  </PageWrapper>
                ),
              },
            ],
          },
        ],
      },
      {
        path: "my-profile",
        element: (
          <PageWrapper>
            <MyProfile />
          </PageWrapper>
        ),
      },
      {
        path: "about",
        element: (
          <PageWrapper>
            <About />
          </PageWrapper>
        ),
      },
      {
        path: "faq",
        element: (
          <PageWrapper>
            <Faq />
          </PageWrapper>
        ),
      },
      {
        path: "privacy-policy",
        element: (
          <PageWrapper>
            <PrivacyPolicy />
          </PageWrapper>
        ),
      },
      {
        path: "contact",
        element: (
          <PageWrapper>
            <Contact />
          </PageWrapper>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={routes} />
    </AnimatePresence>
  );
}

export default App;
