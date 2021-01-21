import { useRouter } from 'next/router'

const DetailProduct = (props) => {
  const router = useRouter()
  const productId = router.query.DetailProduct
  const productDetail = props.productData[Number(productId)-1]
  console.log(productDetail)
  return (
    <div className='container my-5'>
      <h3>{productDetail.Title}</h3>
      <h5>{productDetail.SortDesc}</h5>
    </div>
    )
}

export default DetailProduct