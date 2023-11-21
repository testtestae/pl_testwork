import CardsList from "../../components/CardsList/CardsList";
import {Link} from "react-router-dom";

const news = [
    {
        "title": "Кредитные организации",
        "smallTitle": "25 апреля",
        "logoPath": {
            "small": "",
            "full": ""
        },
        "text": "Банкам нельзя с 1 июля требовать от компаний, ИП и физлиц повышенные комиссии Банкам нельзя с 1 июля требовать от компаний, ИП и физлиц повышенные комиссии Банкам нельзя с 1 июля требовать от компаний, ИП и физлиц повышенные комиссии Банкам нельзя с 1 июля требовать от компаний, ИП и физлиц повышенные комиссии..."
    },{
        "title": "Кредитные организации",
        "smallTitle": "25 апреля",
        "logoPath": {
            "small": ""
        },
        "text": "Банкам нельзя с 1 июля требовать от компаний, ИП и физлиц повышенные комиссии Банкам нельзя с 1 июля требовать от компаний, ИП и физлиц повышенные комиссии Банкам нельзя с 1 июля требовать от компаний, ИП и физлиц повышенные комиссии Банкам нельзя с 1 июля требовать от компаний, ИП и физлиц повышенные комиссии..."
    },{
        "title": "Кредитные организации",
        "smallTitle": "25 апреля",
        "text": "Банкам нельзя с 1 июля требовать от компаний, ИП и физлиц повышенные комиссии Банкам нельзя с 1 июля требовать от компаний, ИП и физлиц повышенные комиссии Банкам нельзя с 1 июля требовать от компаний, ИП и физлиц повышенные комиссии Банкам нельзя с 1 июля требовать от компаний, ИП и физлиц повышенные комиссии..."
    }
]

const Feed = ()=>{
    return(<>
        <CardsList
            title="Новости"
            headerExtendedContent={<Link to="/news">Читать все</Link>}
            view={"list" || "cells"}
            cards={news}
        />
    </>)
}

export default Feed