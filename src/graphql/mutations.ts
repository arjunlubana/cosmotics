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
      category_id
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
      category_id
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
      category_id
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
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
      id
      products {
        id
        name
        desc
        category_id
        category {
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
      total
      created_at
      modified_at
      deleted_at
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
      id
      products {
        id
        name
        desc
        category_id
        category {
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
      total
      created_at
      modified_at
      deleted_at
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
      id
      products {
        id
        name
        desc
        category_id
        category {
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
      total
      created_at
      modified_at
      deleted_at
      createdAt
      updatedAt
      owner
    }
  }
`;
