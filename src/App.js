
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './about/About';
import './App.css';
import Grandpa from './Compnents/granpa/Grandpa';
import Home from './Compnents/home/Home';
import Orders from './Compnents/orders/Orders';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter ([
      {
        path: '/',
        element:<Main></Main>,
        children:[
          {
            path: '/', 
            loader: () => fetch('tshirts.json'),
            element: <Home></Home>
          
          },
          {
            path: 'orders', 
            element: <Orders></Orders>
          
          },
          {
            path: 'grandpa',
            element: <Grandpa></Grandpa>
          },
          {
            path: 'about',
            element: <About></About> 
          }
        ]
       }
  ])
  return (
    <div className="App">
     <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
