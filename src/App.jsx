import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./App.css";


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/"
      element: (
        <>
        <Home/>
        </>
      )
   }
 ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
