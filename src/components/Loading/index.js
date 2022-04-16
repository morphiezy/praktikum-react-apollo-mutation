import LoadingAnimation from "../../img/loading.gif"
import style from "./style.module.css"

const {loading_container,animation} = style

const Loading = ()=>{
    return(
        <div className={loading_container}>
            <img src={LoadingAnimation} alt="loading-animation" className={animation}/>
            <p>Fetching data...</p>
        </div>
    )
}

export default Loading;