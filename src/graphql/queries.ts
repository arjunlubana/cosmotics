/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      desc
      SKU
      category {
        id
        name
        desc
        created_at
        modified_at
        deleted_at
        createdAt
        updatedAt
      }
      inventory {
        id
        quantity
        created_at
        modified_at
        deleted_at
        createdAt
        updatedAt
        owner
      }
      price
      discount {
        id
        name
        desc
        discount_percent
        active
        created_at
        modified_at
        deleted_at
        createdAt
        updatedAt
        owner
      }
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
        SKU
        category {
          id
          name
          desc
          created_at
          modified_at
          deleted_at
          createdAt
          updatedAt
        }
        inventory {
          id
          quantity
          created_at
          modified_at
          deleted_at
          createdAt
          updatedAt
          owner
        }
        price
        discount {
          id
          name
          desc
          discount_percent
          active
          created_at
          modified_at
          deleted_at
          createdAt
          updatedAt
          owner
        }
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
export const getProductInventory = /* GraphQL */ `
  query GetProductInventory($id: ID!) {
    getProductInventory(id: $id) {
      id
      quantity
      created_at
      modified_at
      deleted_at
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProductInventories = /* GraphQL */ `
  query ListProductInventories(
    $filter: ModelProductInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductInventories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        quantity
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
export const getDiscount = /* GraphQL */ `
  query GetDiscount($id: ID!) {
    getDiscount(id: $id) {
      id
      name
      desc
      discount_percent
      active
      created_at
      modified_at
      deleted_at
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listDiscounts = /* GraphQL */ `
  query ListDiscounts(
    $filter: ModelDiscountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiscounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        desc
        discount_percent
        active
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
