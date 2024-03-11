import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="home-container">
      <Link to={{
        pathname: "/authorize",
        search: "?user=0xF048eF3d7E3B33A465E0599E641BB29421f7Df92"
      }}>
        Authorize
      </Link>
    </div>
  )
}

export default Home