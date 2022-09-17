/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProductCategory = /* GraphQL */ `
  subscription OnCreateProductCategory {
    onCreateProductCategory {
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
export const onUpdateProductCategory = /* GraphQL */ `
  subscription OnUpdateProductCategory {
    onUpdateProductCategory {
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
export const onDeleteProductCategory = /* GraphQL */ `
  subscription OnDeleteProductCategory {
    onDeleteProductCategory {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($owner: String) {
    onCreateProduct(owner: $owner) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($owner: String) {
    onUpdateProduct(owner: $owner) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($owner: String) {
    onDeleteProduct(owner: $owner) {
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
export const onCreateProductInventory = /* GraphQL */ `
  subscription OnCreateProductInventory($owner: String) {
    onCreateProductInventory(owner: $owner) {
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
export const onUpdateProductInventory = /* GraphQL */ `
  subscription OnUpdateProductInventory($owner: String) {
    onUpdateProductInventory(owner: $owner) {
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
export const onDeleteProductInventory = /* GraphQL */ `
  subscription OnDeleteProductInventory($owner: String) {
    onDeleteProductInventory(owner: $owner) {
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
export const onCreateDiscount = /* GraphQL */ `
  subscription OnCreateDiscount($owner: String) {
    onCreateDiscount(owner: $owner) {
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
export const onUpdateDiscount = /* GraphQL */ `
  subscription OnUpdateDiscount($owner: String) {
    onUpdateDiscount(owner: $owner) {
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
export const onDeleteDiscount = /* GraphQL */ `
  subscription OnDeleteDiscount($owner: String) {
    onDeleteDiscount(owner: $owner) {
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
