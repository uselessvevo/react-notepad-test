import {createBrowserRouter} from "react-router-dom";
import ControlPanel from "../root-container/root-container";


const router = createBrowserRouter([
    {
        path: "/",
        element: <ControlPanel/>,
    }
])

export default router;