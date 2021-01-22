import { useRouter } from 'next/router'
import Image from 'next/image'
import {urlApi} from '../../Helpers/database'

const myLoader = ({ src, width, quality }) => {
  return `${urlApi}${src}?w=${width}&q=${quality || 75}`
}

const DetailProduct = (props) => {
  const router = useRouter()
  const productId = router.query.DetailProduct
  const productDetail = props.productData[Number(productId)-1]

  return (
    <div className='container my-5'>
      <h3>{productDetail.Title}</h3>
      <h5>{productDetail.SortDesc}</h5>
      <p>{productDetail.Desc1}</p>
      <Image
        loader={myLoader}
        src={productDetail.Pic1[0].url}
        alt="Pic1"
        width={500}
        height={500}
      />
    </div>
    )
}

export default DetailProduct