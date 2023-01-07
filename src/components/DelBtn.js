import "./DelBtn.css"

const DelBtn = (props) =>{
    return <div>
        <button className="btn-del-movie"  onClick={props.deleteMovie}>Vymazat film</button>

    </div>

    
}

export default DelBtn