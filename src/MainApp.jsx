import {Outlet} from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader.jsx";
import './MainApp.css'
import MainFooter from "./components/MainFooter/MainFooter.jsx";

const MainApp = (props)=>{
    return(<>
        <MainHeader headerState={props.headerState}/>
        <div className="wrapper">
            <Outlet />
        </div>
        <MainFooter />
        </>)
}

export default MainApp