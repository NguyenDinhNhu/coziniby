import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './components/page/layout/home';
import Contact from './components/page/layout/contact';
import Menu from './components/page/layout/menu';
import Gallery from './components/page/layout/gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
