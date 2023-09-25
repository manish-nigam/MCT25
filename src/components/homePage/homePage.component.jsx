import './homePage.styles.css'
import SearchHome from '../searchhome/searchhome.component'
const HomePage=()=>{
    return(
    <div className='home'>
        <div className="background-image"></div>
        <div className="homecard">
            <div className="title"><h3>Amazing <span>Food Receipes</span></h3></div>
            
        </div>
        <SearchHome />
    </div>
    )
}

export default HomePage