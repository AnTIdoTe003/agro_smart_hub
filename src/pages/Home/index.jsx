import HomeLeft from "./HomeLeft"
import HomeRight from "./HomeRight"
import './style.scss'
const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="home-content">
          <HomeLeft />
          <HomeRight />
        </div>
      </div>
   </div>
  )
}

export default Home
