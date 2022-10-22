/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProductCategory = /* GraphQL */ `
  query GetProductCategory($id: ID!) {
    getProductCategory(id: $id) {
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
export const listProductCategories = /* GraphQL */ `
  query ListProductCategories(
    $filter: ModelProductCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
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
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        products {
          id
          name
          desc
          category_id
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
      nextToken
    }
  }
`;
