import "./DelBtn.css"

const DelBtn = (props) =>{
    return <div>
        <button  onClick={props.deleteMovie}>Vymazat film</button>

    </div>

    
}

export default DelBtn