import { Product, ProductEntry } from "./product.model"
// import { ProductEntry } from "./product-entry.model"

export interface Response{
    data : ProductEntry<Product>[]
   }
   