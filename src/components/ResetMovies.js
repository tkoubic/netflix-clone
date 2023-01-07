import "./ResetMovies.css"

const ResetMovies = (props) => {
    return <div>
        <button className="btn-del-all" onClick={props.resetMovies}>Načíst všechny filmy</button>
    </div>
} 

export default ResetMovies