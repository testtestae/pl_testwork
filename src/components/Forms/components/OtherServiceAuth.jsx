import {useNavigate} from "react-router-dom";

const OtherServiceAuth = (props)=>{
    const navigate = useNavigate()
    return(<div className="other-service-auth">
        <h4>Или {
            props.template === "login" ? "войти с помощью" :
                props.template === "register" ? "зарегестрироваться через" :
                    "использовать"
        }:</h4>
        <div className="other-service-auth__services">
            <button
                className="no-background"
                onClick={()=>{
                    navigate("/")
                }}
            ><img src="/img/vk.svg" alt=""/></button>
            <button className="no-background"
                    onClick={()=>{
                        navigate("/")
                    }}
            ><img src="/img/google.svg" alt=""/></button>
        </div>
    </div>)
}

export default OtherServiceAuth