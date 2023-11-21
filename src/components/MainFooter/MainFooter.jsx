import {useNavigate} from "react-router-dom";
import "./MainFooter.css"
import MainFooterButton from "./components/MainFooterButton/MainFooterButton.jsx";

const MainFooter = (props)=>{
    const icons = [
        {
            "icon": "",
            "text": "Главная",
            "link": ""
        },{
            "icon": "",
            "text": "Сервисы",
            "link": ""
        },{
            "icon": "",
            "text": "Обращения",
            "link": ""
        },{
            "icon": "",
            "text": "Звонок",
            "link": ""
        },{
            "icon": "",
            "text": "Профиль",
            "link": ""
        }
    ];
    const navigate = useNavigate();
    return(<footer className="main-footer">
        <div className="wrapper">
            {
                icons.map(e=>{
                    return <MainFooterButton icon={e.icon} text={e.text} link={e.link}/>
                })
            }
        </div>
    </footer>)
}

export default MainFooter