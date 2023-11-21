import {useNavigate} from "react-router-dom";
import "./MainHeader.css"

const MainHeader = (props)=>{
    const navigate = useNavigate();
    return(<header className="main-header">
        <div className="wrapper">
            <div className="main-header__left">
                {props?.showBackButton
                || props?.headerState?.left === "backButton"
                    ?<button
                        className="back-button_add-padding no-background"
                        onClick={() => navigate(-1)}
                    >
                        <img src="/img/chevron-left.svg" alt=""/>
                    </button>:null}
                {
                    props?.headerState?.left === "logo"
                        ?<button className="no-background"><img src="/img/business-logo.svg" alt=""/></button>
                        :null
                }
            </div>
            <div className="main-header__center">
                {
                    props?.headerState?.center==="search"
                        ?<input
                            placeholder="Поиск"
                            type="text"
                        />
                        :props?.headerState?.center==="text"?props.headerState.centerText
                    :null
                }
            </div>
            <div className="main-header__right">
                {
                    props?.headerState?.right === "alertsButton"
                        ?<button className="alerts-button_add-padding no-background"><img src="/img/alert.svg" alt=""/></button>
                        :props?.headerState?.right === "content"?props.headerState.rightContent
                    :null
                }

            </div>
        </div>
    </header>)
}

export default MainHeader