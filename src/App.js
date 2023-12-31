// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Header from "./components/Header";

// function App() {
//   return (
//     <div className="App">

//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="about" element={<About />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import HelpLayout from "./components/HelpLayout";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Error from "./components/Error";
import CareersLayout from "./components/Career/CareerLayout";
import Careers from "./components/Career/Careers";
import CareersDetails from "./components/Career/CareersDetails";
import CareerError from "./components/Career/CareerError";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "*", element: <Error /> },
        {
          path: "careerLayout",
          element: <CareersLayout />,
          children: [
            {
              path: "career",
              element: <Careers />,
              children:[
                {
                  path: ":id",
                  element:<CareersDetails/>,
                  errorElement:<CareerError/>,
                },
              ]
            },
            
          ],
        },
        {
          path: "help",
          element: <HelpLayout />,
          children: [
            { path: "faq", element: <FAQ /> },
            {
              path: "Contact",
              element: <Contact />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
