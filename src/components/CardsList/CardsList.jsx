import "./CardsList.css"
import CardList from "./components/CardList/CardList.jsx";

const CardsList = (props)=>{
    return(<div className="cards-list">
        <header>
            <div className="left">
                <h4>{props?.title}</h4>
            </div>
            <div className="right">
                {props?.headerExtendedContent}
            </div>
        </header>
        <main>
            {
                props?.cards.map(e=>{
                    return <CardList
                        type={props.view}
                        data={e}
                    />
                })
            }
        </main>
    </div>)
}

export default CardsList