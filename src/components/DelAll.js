import "./DelAll.css"


const DelAll = (props) => {
    return <div>
        <button onClick={props.deleteMovies}>Vymazat všechny filmy</button>
    </div>
} 

export default DelAll