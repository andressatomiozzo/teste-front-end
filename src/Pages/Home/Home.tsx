import HeroBanner from '../../components/HeroBanner/HeroBanner'
import AllProductCategories from '../../components/AllProductCategories/AllProductCategories'
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts'

const Home = () => {
  return (
    <>
      <HeroBanner/>
      <AllProductCategories/>
      <RelatedProducts all={true}/>
    </>
  )
}

export default Home
