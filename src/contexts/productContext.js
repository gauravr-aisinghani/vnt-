import { createContext,useContext } from "react";

export const ProductContext = createContext({
product:{
   id:1,
   productName:"jeans"
},
addproduct:(product)=>{},
})

export const ProductProvider = ProductContext.Provider

export const useProduct = () => {
   return useContext(ProductContext)
}