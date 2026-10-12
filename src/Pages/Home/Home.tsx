import HeroBanner from '../../components/HeroBanner/HeroBanner'
import AllProductCategories from '../../components/AllProductCategories/AllProductCategories'
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts'
import Partners from '../../components/Partners/Partners'
import OtherBrands from '../../components/Brands/OtherBrands'

const Home = () => {
  return (
    <>
      <HeroBanner/>
      <AllProductCategories/>
      <RelatedProducts all={true}/>
      <Partners/>
      <RelatedProducts all={false}/>
      <Partners/>
      <OtherBrands/>
      <RelatedProducts all={false}/>
    </>
  )
}

export default Home
