import { apiSlice } from "./apiSlice";
import { CATEGORY_url } from "../constants";

export const categoryApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        CreateCategory: builder.mutation({
            query: (newCategory) => ({
                url:`${CATEGORY_url}`,
                method: 'POST',
                body: newCategory,               
            })
        }),

        updateCategory: builder.mutation({
            query: ({categoryId, updatedCategory}) => ({
                url:`${CATEGORY_url}/${categoryId}`,
                method: 'PUT',
                body: updatedCategory,               
            })
        }),

        deleteCategory: builder.mutation({
            query: (categoryId) => ({
                url:`${CATEGORY_url}/${categoryId}`,
                method: 'DELETE',              
            })
        }),

        fetchCategories: builder.query({
            query: () => ({
                url:`${CATEGORY_url}/categories`,
                method: 'GET',              
            })
        }),

    })
})

export const { useCreateCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation, useFetchCategoriesQuery } = categoryApiSlice;