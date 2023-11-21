import {Link, useNavigate} from "react-router-dom";
import OtherServiceAuth from "./components/OtherServiceAuth.jsx";
import {useEffect, useState} from "react";
import MainHeader from "../MainHeader/MainHeader.jsx";

const Forms = (props)=>{
    const [pagePayload, setPagePayload] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        setPagePayload({
            "header": {
                "title": props?.main?.title?props?.main?.title:
                    props?.template === "login" ? "Вход"
                    : props?.template === "register" ? "Регистрация"
                        : props?.main?.title,
                "subtitle": props?.main?.subtitle?props?.main?.subtitle:
                    props?.template === "login" ? "Введите логин и пароль, чтобы войти"
                    : props?.template === "register" ? "Введите почту или номер телефона, чтобы зарегистрироваться"
                        : props?.main?.subtitle,
            }
        });
    },[props])
    return <>
        <MainHeader
            showBackButton={
            props?.template === "login"
            || props?.template === "register"
                ? false:true}
        />
        <div className="form">
            <header
                style={props.main.alignFormHeader==="left"?{"textAlign": "left"}:null}
            >
                <h2 className="form__title">{pagePayload?.header?.title}</h2>
                <p className="form__subtitle">{pagePayload?.header?.subtitle}</p>
                {
                    props?.template === "login" ? <h3 className="form__extend-info">Нет аккаунта? <Link to="/register">Регистрация</Link></h3>
                        : props?.template === "register" ? <h3 className="form__extend-info">Уже есть аккаунт? <Link to="/login">Войти</Link></h3>
                            : null
                }
            </header>
            <main>
                <form action="">
                    {
                        props?.template === "login"
                        || props?.template === "register"
                        || props?.template === "repairPassword"
                            ?<div className="input">
                                <label htmlFor="login"><h5>Почта или номер телефона</h5></label>
                                <input
                                    placeholder="Введите логин"
                                    name="login"
                                    id="login"
                                    type="text"
                                />
                            </div>:null
                    }{
                        props?.template === "login"
                        || props?.template === "setPassword"
                            ?<div className="input">
                                <label htmlFor="password"><h5>Пароль</h5></label>
                                <input
                                    placeholder="Введите пароль"
                                    name="password"
                                    id="password"
                                    type="password"
                                />
                            </div>:null
                    }{
                        props?.template === "setPassword"
                            ?<div className="input">
                                <label htmlFor="reply-password"><h5>Пароль</h5></label>
                                <input
                                    placeholder="Повторите пароль"
                                    name="replyPassword"
                                    id="reply-password"
                                    type="password"
                                />
                            </div>:null
                }{
                    props?.template === "confirm"?
                        <div className="input">
                            <label htmlFor="verify-code"><h5>Код</h5></label>
                            <input
                                placeholder="Введите код"
                                name="verifyCode"
                                id="verify-code"
                                type="text"
                            />
                        </div>:null
                }{
                        props?.template === "login"?
                            <Link to="/repair-password">Забыли пароль?</Link>:null
                    }


                    <button type="submit"
                    //        value={props?.main?.btnText?props.main.btnText:
                    //             props.template === "login"?"Войти":
                    //                props.template === "register"?"Регистрация":
                    //                    "Отправить"
                    // }
                        onClick={(e)=>{
                            e?.preventDefault();
                            navigate(props?.main?.mainBtnNavigateToLink);
                        }
                        }
                    >
                        {props?.main?.btnText?props.main.btnText:
                            props?.template === "login"?"Войти":
                                props?.template === "register"?"Регистрация":
                                    "Отправить"
                        }
                    </button>
                </form>
            </main>
            <footer>
                {props?.template === "login" || props?.template === "register" ?
                    <OtherServiceAuth template={props?.template} /> : null}
            </footer>
        </div>
    </>;
}

export default Forms;