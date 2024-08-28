import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login'
import OneBox from '../pages/OneBox'
import SignUp from '../pages/signUp'

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"",
                element:<OneBox/>
            },
            {
                path:"signup",
                element:<SignUp/>
            }
    
]
}

])
export default router