import { useRouter } from 'next/router'
import Image from 'next/image'
import {urlApi} from '../../Helpers/database'
import ReactHtmlParser from 'react-html-parser'

const myLoader = ({ src, width, quality }) => {
  return `${urlApi}${src}?w=${width}&q=${quality || 75}`
}


const DetailProduct = (props) => {
  const router = useRouter()
  const productId = router.query.DetailProduct
  const productDetail = props.productData[Number(productId)-1]

  const renderProductDesc = () => {
    var result = []
    for (let i = 1 ; i <= 5; i++) {
      result.push(ReactHtmlParser(productDetail[`Desc${i}`]))
      result.push(ReactHtmlParser('<br/><br/>'))
    }
    console.log(result)
    return result
  }

  return (
    <div className='container my-5'>
      <h3>{productDetail.Title}</h3>
      <h4 className="mb-5">{productDetail.ShortDesc}</h4>
      {renderProductDesc()}
      <Image
        className="mt-4"
        loader={myLoader}
        src={productDetail.Pic1[0].url}
        alt="Pic1"
        width={700}
        height={700}
      />
    </div>
    )
}

export default DetailProduct