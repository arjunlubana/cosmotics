/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      desc
      categoryId
      category {
        items {
          id
          name
          desc
          created_at
          modified_at
          deleted_at
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      price
      created_at
      modified_at
      deleted_at
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      desc
      categoryId
      category {
        items {
          id
          name
          desc
          created_at
          modified_at
          deleted_at
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      price
      created_at
      modified_at
      deleted_at
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      desc
      categoryId
      category {
        items {
          id
          name
          desc
          created_at
          modified_at
          deleted_at
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      price
      created_at
      modified_at
      deleted_at
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createProductCategory = /* GraphQL */ `
  mutation CreateProductCategory(
    $input: CreateProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    createProductCategory(input: $input, condition: $condition) {
      id
      name
      desc
      created_at
      modified_at
      deleted_at
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProductCategory = /* GraphQL */ `
  mutation UpdateProductCategory(
    $input: UpdateProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    updateProductCategory(input: $input, condition: $condition) {
      id
      name
      desc
      created_at
      modified_at
      deleted_at
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProductCategory = /* GraphQL */ `
  mutation DeleteProductCategory(
    $input: DeleteProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    deleteProductCategory(input: $input, condition: $condition) {
      id
      name
      desc
      created_at
      modified_at
      deleted_at
      createdAt
      updatedAt
      owner
    }
  }
`;
