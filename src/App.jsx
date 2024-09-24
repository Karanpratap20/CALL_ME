import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import Homepage from './Components/homepage.jsx';
// import Videopage from './Components/Videopage.jsx';
 
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />
    },
    {
      path: "/room/:id",
      element: <Videopage />
    }
  ]);
  return (<>
    <RouterProvider router={router} />
  </>
  );
}

export default App
