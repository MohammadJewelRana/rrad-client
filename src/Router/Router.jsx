import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout';
import Home from '../Pages/Home/Home/Home';
import Contact from '../Pages/Contact/Contact';
import About from '../Pages/About/About';
import Portfolio from '../Pages/Works/Portfolio';
import Services from '../Pages/Works/Services';
// import HomeLayout from '../Layout/HomeLayout';
// import Home from '../Pages/Home/Home/Home';
// import Login from '../Pages/LoginReg/Login';
// import Registration from '../Pages/LoginReg/Registration';
// import AdminLayout from '../AdminPanel/AdminLayout/AdminLayout';
// import AdminHome from '../AdminPanel/AdminHome/AdminHome';
// import Testimonial from '../Pages/Testimonial/Testimonial';
// import Cart from '../Pages/Cart/Cart';

const Router = createBrowserRouter([
   
   
   {
    path:'/',
    element:<HomeLayout></HomeLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/portfolio',
            element:<Portfolio></Portfolio>
        },
        {
            path:'/services',
            element:<Services></Services>
        },
    ]
   }


   
   
   
    // {
    //     path: "/",
    //     element:<HomeLayout></HomeLayout>,
    //     children:[
    //         {
    //             path:'/',
    //             element:<Home></Home>
    //         },
    //         {
    //             path:'/testimonial',
    //             element:<Testimonial></Testimonial>
    //         },
    //         {
    //             path:'/cart',
    //             element: <Cart></Cart> 
    //         },
            
    //         // {
    //         //     path:'/login',
    //         //     element:<Login></Login>
    //         // },
    //         // {
    //         //     path:'/registration',
    //         //     element:<Registration></Registration>
    //         // }
    //     ]

    // },
    // {
    //     path:'/login',
    //     element:<Login></Login>
    // },
    // {
    //     path:'/registration',
    //     element:<Registration></Registration>
    // },
    // {
    //     path:'/admin_panel',
    //     element:<AdminLayout></AdminLayout>,
    //     children:[
    //      {
    //         path:'/admin_panel',
    //         element:<AdminHome></AdminHome>

    //      }
    //     ]
    // }
])



export default Router;