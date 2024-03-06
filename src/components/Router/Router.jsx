import React from 'react'
import {useRoutes} from 'react-router-dom'
import PageLayout from '../PageLayout'
import ClientTransfer from '../ClientTransfer/ClientTransfer'
const Router = () => {
  return (
    <div>
        {useRoutes([
            {
                path:'/',
                element: <PageLayout />,
                children: [
                    {
                        path:'/',
                        element:<h1>First</h1>
                    },
                    {
                        path:'/transfer',
                        element:<ClientTransfer />
                    },
                    {
                        path:'*',
                        element:<>404</>
                    }
                ]
            },
            {
                path:'/settings',
                element: <h1>Settings</h1>
            }
        ])}
    </div>
  )
}

export default Router