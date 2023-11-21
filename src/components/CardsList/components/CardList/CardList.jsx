const CardList = (props)=>{
    return(<div className={"card" + props.type==="list"?"_list"
        :props.type==="cells"?"_cell"
            :"" }>
        {
            props?.data?.logoPath?.small
            || props?.data?.logoPath?.medium
            || props?.data?.logoPath?.full
                ?<img src={
                    props?.data?.logoPath?.small
                    || props?.data?.logoPath?.medium
                    || props?.data?.logoPath?.full
                }
             alt=""/>:null
        }
        <img src="" alt=""/>
        <h3>{props?.data?.title}</h3>
        <p>{props?.data?.text.substr(0, 77)+"..."}</p>
        <h6>{props?.data?.smallTitle}</h6>
    </div>    )
}

export default CardList