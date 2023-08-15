
import { IProduct } from '@/interface/product'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'




const productApi = createApi({
    reducerPath:"product",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000"
    }),
    tagTypes:['Product'],
    endpoints:(builder)=>({
        getProducts:builder.query<IProduct[],void>({
            query:()=>({
                url:`/products`,                            
            }),
            providesTags:['Product']
        }),
        getProductById:builder.query<IProduct,number|string>({
            query:(id:number|string)=>({
                url:`/products/${id}`
            }),
            providesTags:['Product']
        }),
        addProduct:builder.mutation<IProduct,IProduct>({
            query:(product:IProduct)=>({
                url:`/products`,
                method:"POST",
                body:product
            }),
            invalidatesTags:['Product']
        }),
        updateProduct:builder.mutation<IProduct,IProduct>({
            query:(product:IProduct)=>({
                url:`/products/${product.id}`,
                method:"PATCH",
                body:product
            }),
            invalidatesTags:['Product']

        }),
        deleteProduct:builder.mutation<void,number|string>({
            query:(id:number|string)=>({
                url:`/products/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:['Product']

        })
    })

})

export const {useAddProductMutation,useDeleteProductMutation,useGetProductByIdQuery,useGetProductsQuery,useUpdateProductMutation} = productApi;
export const productReducer = productApi.reducer;
export default productApi;