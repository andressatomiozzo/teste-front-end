import HeroBanner from '../../components/HeroBanner/HeroBanner'
import AllProductCategories from '../../components/AllProductCategories/AllProductCategories'
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts'
import Partners from '../../components/Partners/Partners'

const Home = () => {
  return (
    <>
      <HeroBanner/>
      <AllProductCategories/>
      <RelatedProducts all={true}/>
      <Partners/>
    </>
  )
}

export default Home
