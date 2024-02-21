import { useEffect, useState } from 'react'
import { postData,ServerUrl } from "../../services/ServerServices";
import { useStyles } from './ProductInfoCss';
import { useLocation } from 'react-router-dom';


function ProductInfo() {
    let classes = useStyles()
    let location=useLocation()
     

    //Defining sTAtes
    const [productDetails,setProductDetails]=useState([])
    const [productId, setProductId] = useState(location.state.productid || '');
    const [categoryId,setCategoryId]=useState(location.state.categoryid || '')
    const [relatedProducts,setRelatedProducts]=useState([])
    //Defining states

      //Fetching productDetails
  const fetch_product_details=async()=>{
    let result= await postData('product/fetch_productinfo',{productid:productId})
    setProductDetails(result.data)
  }

  
  // Fetching Product Details

  //Fething Related Products
  const fetch_related_products=async()=>{

    let result= await postData('product/fetch_related_products',{categoryid:categoryId})
    setRelatedProducts(result.data)
  }

  //Fething related products

  useEffect(() => {
    setProductId(location.state.productid || '');
    setCategoryId(location.state.categoryId)
    fetch_product_details(); 
    fetch_related_products()
}, []);


const displayProductInfo = () =>{
    return (
        productDetails.map((item)=>{
         
                return <div className={classes.shirtInfo} key={item.productid}>
                   <div className={classes.shirtImg}>
                   <img src={`${ServerUrl}/images/${item.image}`} />
                    <img src={`${ServerUrl}/images/${item.image}`} />
                   </div>
                   <div className={classes.desc}>
                   <h1>{item.product}</h1>
                   <h3>{`₹${item.price}.00`}</h3>
                    <p>{item.description}</p>
                    <button className={classes.addBtn}>Add to Cart</button>
                   </div>
                </div>
           
        })
    )
}

const displayRelatedProducts = () => {
    return (
      relatedProducts.map((item) => {
        if (item.productid === productId) {
          return <div key={item.productid}></div>; // You can return an empty div or handle this case as needed
        } else {
          return (
            <div className={classes.shirtInfo} key={item.productid}>
              <div className={classes.shirtImg}>
                <img src={`${ServerUrl}/images/${item.image}`} alt={item.product} />
                <img src={`${ServerUrl}/images/${item.image}`} alt={item.product} />
              </div>
              <div className={classes.desc}>
                <h1>{item.product}</h1>
                <h3>{`₹${item.price}.00`}</h3>
                <p>{item.description}</p>
                <button className={classes.addBtn}>Add to Cart</button>
              </div>
            </div>
          );
        }
      })
    );
  };

  return (
    <>
     <div className={classes.container}>
        {displayProductInfo()}
        <h2>Related Products</h2>
        {displayRelatedProducts()}
     </div>
    </>
  )
}

export default ProductInfo