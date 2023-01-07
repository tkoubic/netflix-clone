import "./DelAll.css"


const DelAll = (props) => {
    return <div>
        <button className="btn-del-all" onClick={props.deleteMovies}>Vymazat všechny filmy</button>
    </div>
} 

export default DelAll