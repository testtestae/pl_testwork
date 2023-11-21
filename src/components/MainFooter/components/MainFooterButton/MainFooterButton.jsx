import {useNavigate} from "react-router-dom";

const MainFooterButton=(props)=>{
    const navigate = useNavigate()
    return(<button
        className="no-background"
        onClick={()=>{
            navigate(props.link)
        }}
    >
        <img src={props.icon} alt=""/>
        <p>{props.text}</p>
    </button>)
}

export default MainFooterButton