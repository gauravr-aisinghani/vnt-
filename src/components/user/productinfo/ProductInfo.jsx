import React, { useEffect, useState } from 'react'
import { getData,ServerUrl } from "../../services/ServerServices";
import { useStyles } from './productinfoCss';
import { Link } from 'react-router-dom';


function ProductInfo() {
    let classes = useStyles()
    const [Shirts, setShirts] = useState([])

      //Fetching all shirts
  const fetch_all_shirts=async()=>{
    let result= await getData('product/fetch_all_shirts')
    setShirts(result.data)
  }

  
  // Fetching all products

  useEffect(()=>{
    fetch_all_shirts()
  },[])


const displayShirt = () =>{
    return (
        Shirts.map((item)=>{
            if(item.productid == 10){
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
            }
        })
    )
}

const sideToggle = () =>{
  return (
    Shirts.map((item)=>{
        if(item.productid == 10){
            return <div className = {classes.sidebar} key = {item.productid}>
               <div className={classes.sideimgs}>
               <Link><img src={`${ServerUrl}/images/${item.image}`} /></Link>
                <img src={`${ServerUrl}/images/${item.image}`} />
               </div>
            </div>
        }
    })
)
}

  return (
    <>
     <div className={classes.container}>
      <div className={classes.container2}>
        {sideToggle()}
        {displayShirt()}
      </div>
        <h2>Related Products</h2>
     </div>
    </>
  )
}

export default ProductInfo