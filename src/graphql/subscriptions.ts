/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($owner: String) {
    onCreateProduct(owner: $owner) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($owner: String) {
    onUpdateProduct(owner: $owner) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($owner: String) {
    onDeleteProduct(owner: $owner) {
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
export const onCreateProductCategory = /* GraphQL */ `
  subscription OnCreateProductCategory($owner: String) {
    onCreateProductCategory(owner: $owner) {
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
export const onUpdateProductCategory = /* GraphQL */ `
  subscription OnUpdateProductCategory($owner: String) {
    onUpdateProductCategory(owner: $owner) {
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
export const onDeleteProductCategory = /* GraphQL */ `
  subscription OnDeleteProductCategory($owner: String) {
    onDeleteProductCategory(owner: $owner) {
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
