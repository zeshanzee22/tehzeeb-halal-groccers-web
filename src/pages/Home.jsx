
import AllCategories from "../components/Layout/AllCategories"
import ExploreCategories2 from "../components/Layout/ExploreCategories2"
import FAQs from "../components/Layout/FAQs"
import FeaturedCollection from "../components/Layout/FeaturedCollection"
import Hero from "../components/Layout/Hero"
import Savings from "../components/Layout/Savings"
import { Welcome } from "../components/Layout/Welcome"
import WhyChooseUs from "../components/Layout/WhyChooseUs"

 
 
const Home = () => {
  return (
    <div className="mx-10">
      
      <Hero />
      <Welcome/>
      <ExploreCategories2/>
      <FeaturedCollection/>
       <Savings/>
       <AllCategories/>
      <WhyChooseUs/>
      <FAQs/>
     
    </div>
  )
}

export default Home