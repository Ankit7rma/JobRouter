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
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";


function App() {
  const appRouter = createBrowserRouter([
    { path:"/",
     element:<Home />
    },
    { path:"about",
     element:<About />
    },

  ])
  return (
    <div className="App">
    
            
        <RouterProvider router = {appRouter}/>
      
    </div>
  );
}

export default App;

