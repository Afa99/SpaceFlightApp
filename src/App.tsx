import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home-page/home';
import News from './pages/news-page/news';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>
    },
    {
      path: "/:id",
      element:<News/>,
    },
  ]);
  return(<RouterProvider router={router}/>) ;
}

export default App;
