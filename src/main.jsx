import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import './index.css';

import "./index.css"
//pages
import Register from './Pages/Register.jsx';
import CoverPage from './Pages/CoverPage.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Menu from './Pages/Menu.jsx';
import Profile from './Pages/Profile.jsx';
import Notifications from './Pages/Notifications.jsx';
import Settings from './Pages/Settings.jsx';
import Following from './Pages/Following.jsx';
import Followers from './Pages/Followers.jsx';
import User from './Pages/User.jsx';
import PostPage from './Pages/PostPage.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Menu/>
    },
    {
      path: '/menu',
      element: <Menu/>
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/cover-page',
      element: <CoverPage/>
    },
    {
      path: '/home',
      element: <Home/>
    },
    {
      path: '/profile',
      element: <Profile/>
    },
    {
      path: '/notifications',
      element: <Notifications/>
    },
    {
      path: '/settings',
      element: <Settings/>
    },
    {
      path: 'following',
      element: <Following/>
    },
    {
      path: 'followers',
      element: <Followers/>
    },
    {
      path: '/:user',
      element: <User/>
    },
    {
      path: 'post/:id',
      element: <PostPage/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
