/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createProductInventory = /* GraphQL */ `
  mutation CreateProductInventory(
    $input: CreateProductInventoryInput!
    $condition: ModelProductInventoryConditionInput
  ) {
    createProductInventory(input: $input, condition: $condition) {
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
export const updateProductInventory = /* GraphQL */ `
  mutation UpdateProductInventory(
    $input: UpdateProductInventoryInput!
    $condition: ModelProductInventoryConditionInput
  ) {
    updateProductInventory(input: $input, condition: $condition) {
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
export const deleteProductInventory = /* GraphQL */ `
  mutation DeleteProductInventory(
    $input: DeleteProductInventoryInput!
    $condition: ModelProductInventoryConditionInput
  ) {
    deleteProductInventory(input: $input, condition: $condition) {
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
export const createDiscount = /* GraphQL */ `
  mutation CreateDiscount(
    $input: CreateDiscountInput!
    $condition: ModelDiscountConditionInput
  ) {
    createDiscount(input: $input, condition: $condition) {
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
export const updateDiscount = /* GraphQL */ `
  mutation UpdateDiscount(
    $input: UpdateDiscountInput!
    $condition: ModelDiscountConditionInput
  ) {
    updateDiscount(input: $input, condition: $condition) {
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
export const deleteDiscount = /* GraphQL */ `
  mutation DeleteDiscount(
    $input: DeleteDiscountInput!
    $condition: ModelDiscountConditionInput
  ) {
    deleteDiscount(input: $input, condition: $condition) {
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
