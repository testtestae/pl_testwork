import { useState } from 'react'
import {Routes, Route, Link, Outlet, Navigate} from 'react-router-dom';
import './App.css'
import './Form.css'

import MainApp from "./MainApp.jsx";
import LoginPage from "./LoginPage.jsx";
import Forms from "./components/Forms/Forms.jsx";
import Feed from "./pages/Feed/Feed.jsx";
import NewsPage from "./pages/NewsPage/NewsPage.jsx";

function App() {
    let login = false;

    const [headerState, setHeaderState] = useState({
        "left": "logo" || "backButton",
        "center": "search" || "text" || null,
        "centerText": null || "",
        "right": "alertsButton" || "content" || null,
        "rightContent": <></>
    });

  return (
    <>
        <Routes>

            <Route path="/" element={<MainApp headerState={headerState} />} >
                <Route index element={<Navigate to="feed" replace/> } />
                <Route path="feed" element={<Feed />}/>
                <Route path="news" element={<NewsPage />}/>
            </Route>

            <Route path="/login" element={<> <Outlet /> </>}>
                <Route index element={<Forms template="login" main={{
                    "mainBtnNavigateToLink": "/"
                }}/>} />
            </Route>
            <Route path="/register" element={<Outlet />} >
                <Route index element={<Forms
                    template="register"
                    main={{
                        "mainBtnNavigateToLink": "set-password"
                    }}
                />} />
                <Route path="set-password" element={<Forms template="setPassword" main={{
                    "title": "Придумайте пароль",
                    "subtitle":
                    <>Регистрируясь вы:<ul>
                            <li>соглашаетесь с условиями в отношении обработки персональных данных</li>
                            <li>получаете возможность приобретать услуги нашего портала по подписке</li>
                            <li>обязуетесь соблюдать правила нашего портала и закон об авторском праве</li>
                        </ul></>,
                    "alignFormHeader": "left",
                    "mainBtnNavigateToLink": "../verify-password"
                }}></Forms>} />
                <Route
                    path="verify-password"
                    element={<Forms template="confirm" main={{
                        "title": "Подтверждение",
                        "subtitle": "Введите код, который мы отправили на 734824204902",
                        "mainBtnNavigateToLink": "/login"
                    }}/>
                }/>
            </Route>
            <Route path="/repair-password">
                <Route index element={<Forms
                    template="repairPassword" main={{
                        "title": "Забыли пароль?",
                        "subtitle": "Введите почту или номер телефона, чтобы восстановить пароль",
                        "mainBtnNavigateToLink": "confirm"
                }}
                />}/>
                <Route path="confirm" element={<Forms template="confirm" main={{
                    "title": "Подтверждение",
                    "subtitle": "Введите код, который мы отправили на 734824204902",
                    "mainBtnNavigateToLink": "../new-password"
                }} />} />
                <Route path="new-password" element={<Forms template="setPassword" main={{
                    "title": "Новый пароль",
                    "subtitle": "Придумайте новый пароль",
                    "mainBtnNavigateToLink": "/login"
                }} />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
