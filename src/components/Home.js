import { Link } from "react-router-dom"
import "./Home.css";



const Home = () => {

    return <div className="homeContent">
        <h1 id="largestText">CatsFor<span id="logo-span">Life</span></h1>
        <div id="catParent">
            <img id="catImage" src="https://farm8.static.flickr.com/7476/15834865910_a6670839d4.jpg" alt=""/>
        </div>
        <h2 id="subText">*not just for Christmas</h2>
        
        <div>
            <p id="samplePara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <div id="buttonParent">
            <Link to="./cats"> 
             <button id="catsButton" type="button">View Cats</button>
            </Link>
        </div>
    </div>
}

export default Home