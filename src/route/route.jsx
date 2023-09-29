import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import SpecificData from "../pages/Home/SpecificData/SpecificData";

  export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/specificData/:id',
                element: <SpecificData />,
                loader: ({params}) => fetch(`https://api.dribbble.com/v2/user/shots?access_token=98a8331a63048f0f3352cd68bac50504434e7ad76fea14018d7c5f4c66da359c/${params.id}`)
            }
        ]
    }
  ])