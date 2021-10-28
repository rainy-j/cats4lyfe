import { Link } from "react-router-dom"

const Home = () => {

    // const handleOnClick = () => {
    //    return <Link to="./Cat.js" <Link/>
    // }

    return <div className="homeContent">
        <h1>CatsForLife</h1>
        <h2>*not just for Christmas</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <Link to="./Cat.js"> 
            <button type="button">View Cats</button>
        </Link>
    </div>
}

export default Home