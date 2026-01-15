
import ExploreCategories2 from "../components/Layout/ExploreCategories2"
import Hero from "../components/Layout/Hero"
import { Welcome } from "../components/Layout/Welcome"

 
 
const Home = () => {
  return (
    <div className="mx-10">
      
      <Hero />
      <Welcome/>
      <ExploreCategories2/>
    </div>
  )
}

export default Home