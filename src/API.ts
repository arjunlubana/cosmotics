/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductCategoryInput = {
  id?: string | null,
  name: string,
  desc: string,
  created_at?: string | null,
  modified_at?: string | null,
  deleted_at?: string | null,
};

export type ModelProductCategoryConditionInput = {
  name?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  created_at?: ModelStringInput | null,
  modified_at?: ModelStringInput | null,
  deleted_at?: ModelStringInput | null,
  and?: Array< ModelProductCategoryConditionInput | null > | null,
  or?: Array< ModelProductCategoryConditionInput | null > | null,
  not?: ModelProductCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ProductCategory = {
  __typename: "ProductCategory",
  id: string,
  name: string,
  desc: string,
  created_at?: string | null,
  modified_at?: string | null,
  deleted_at?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductCategoryInput = {
  id: string,
  name?: string | null,
  desc?: string | null,
  created_at?: string | null,
  modified_at?: string | null,
  deleted_at?: string | null,
};

export type DeleteProductCategoryInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  name: string,
  desc: string,
  SKU?: string | null,
  price?: number | null,
  created_at?: string | null,
  modified_at?: string | null,
  deleted_at?: string | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  SKU?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  created_at?: ModelStringInput | null,
  modified_at?: ModelStringInput | null,
  deleted_at?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  desc: string,
  SKU?: string | null,
  category?: ProductCategory | null,
  inventory?: ProductInventory | null,
  price?: number | null,
  discount?: Discount | null,
  created_at?: string | null,
  modified_at?: string | null,
  deleted_at?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ProductInventory = {
  __typename: "ProductInventory",
  id: string,
  quantity?: number | null,
  created_at?: string | null,
  modified_at?: string | null,
  deleted_at?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Discount = {
  __typename: "Discount",
  id: string,
  name?: string | null,
  desc?: string | null,
  discount_percent?: number | null,
  active?: boolean | null,
  created_at?: string | null,
  modified_at?: string | null,
  deleted_at?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  desc?: string | null,
  SKU?: string | null,
  price?: number | null,
  created_at?: string | null,
  modified_at?: string | null,
  deleted_at?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateProductInventoryInput = {
  id?: string | null,
  quantity?: number | null,
  created_at?: string | null,
  modified_at?: string | null,
  deleted_at?: string | null,
};

export type ModelProductInventoryConditionInput = {
  quantity?: ModelIntInput | null,
  created_at?: ModelStringInput | null,
  modified_at?: ModelStringInput | null,
  deleted_at?: ModelStringInput | null,
  and?: Array< ModelProductInventoryConditionInput | null > | null,
  or?: Array< ModelProductInventoryConditionInput | null > | null,
  not?: ModelProductInventoryConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateProductInventoryInput = {
  id: string,
  quantity?: number | null,
  created_at?: string | null,
  modified_at?: string | null,
  deleted_at?: string | null,
};

export type DeleteProductInventoryInput = {
  id: string,
};

export type CreateDiscountInput = {
  id?: string | null,
  name?: string | null,
  desc?: string | null,
  discount_percent?: number | null,
  active?: boolean | null,
  created_at?: string | null,
  modified_at?: string | null,
  deleted_at?: string | null,
};

export type ModelDiscountConditionInput = {
  name?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  discount_percent?: ModelFloatInput | null,
  active?: ModelBooleanInput | null,
  created_at?: ModelStringInput | null,
  modified_at?: ModelStringInput | null,
  deleted_at?: ModelStringInput | null,
  and?: Array< ModelDiscountConditionInput | null > | null,
  or?: Array< ModelDiscountConditionInput | null > | null,
  not?: ModelDiscountConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateDiscountInput = {
  id: string,
  name?: string | null,
  desc?: string | null,
  discount_percent?: number | null,
  active?: boolean | null,
  created_at?: string | null,
  modified_at?: string | null,
  deleted_at?: string | null,
};

export type DeleteDiscountInput = {
  id: string,
};

export type ModelProductCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  created_at?: ModelStringInput | null,
  modified_at?: ModelStringInput | null,
  deleted_at?: ModelStringInput | null,
  and?: Array< ModelProductCategoryFilterInput | null > | null,
  or?: Array< ModelProductCategoryFilterInput | null > | null,
  not?: ModelProductCategoryFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelProductCategoryConnection = {
  __typename: "ModelProductCategoryConnection",
  items:  Array<ProductCategory | null >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  SKU?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  created_at?: ModelStringInput | null,
  modified_at?: ModelStringInput | null,
  deleted_at?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelProductInventoryFilterInput = {
  id?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  created_at?: ModelStringInput | null,
  modified_at?: ModelStringInput | null,
  deleted_at?: ModelStringInput | null,
  and?: Array< ModelProductInventoryFilterInput | null > | null,
  or?: Array< ModelProductInventoryFilterInput | null > | null,
  not?: ModelProductInventoryFilterInput | null,
};

export type ModelProductInventoryConnection = {
  __typename: "ModelProductInventoryConnection",
  items:  Array<ProductInventory | null >,
  nextToken?: string | null,
};

export type ModelDiscountFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  discount_percent?: ModelFloatInput | null,
  active?: ModelBooleanInput | null,
  created_at?: ModelStringInput | null,
  modified_at?: ModelStringInput | null,
  deleted_at?: ModelStringInput | null,
  and?: Array< ModelDiscountFilterInput | null > | null,
  or?: Array< ModelDiscountFilterInput | null > | null,
  not?: ModelDiscountFilterInput | null,
};

export type ModelDiscountConnection = {
  __typename: "ModelDiscountConnection",
  items:  Array<Discount | null >,
  nextToken?: string | null,
};

export type CreateProductCategoryMutationVariables = {
  input: CreateProductCategoryInput,
  condition?: ModelProductCategoryConditionInput | null,
};

export type CreateProductCategoryMutation = {
  createProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    name: string,
    desc: string,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductCategoryMutationVariables = {
  input: UpdateProductCategoryInput,
  condition?: ModelProductCategoryConditionInput | null,
};

export type UpdateProductCategoryMutation = {
  updateProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    name: string,
    desc: string,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductCategoryMutationVariables = {
  input: DeleteProductCategoryInput,
  condition?: ModelProductCategoryConditionInput | null,
};

export type DeleteProductCategoryMutation = {
  deleteProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    name: string,
    desc: string,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    desc: string,
    SKU?: string | null,
    category?:  {
      __typename: "ProductCategory",
      id: string,
      name: string,
      desc: string,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    inventory?:  {
      __typename: "ProductInventory",
      id: string,
      quantity?: number | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    price?: number | null,
    discount?:  {
      __typename: "Discount",
      id: string,
      name?: string | null,
      desc?: string | null,
      discount_percent?: number | null,
      active?: boolean | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    desc: string,
    SKU?: string | null,
    category?:  {
      __typename: "ProductCategory",
      id: string,
      name: string,
      desc: string,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    inventory?:  {
      __typename: "ProductInventory",
      id: string,
      quantity?: number | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    price?: number | null,
    discount?:  {
      __typename: "Discount",
      id: string,
      name?: string | null,
      desc?: string | null,
      discount_percent?: number | null,
      active?: boolean | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    desc: string,
    SKU?: string | null,
    category?:  {
      __typename: "ProductCategory",
      id: string,
      name: string,
      desc: string,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    inventory?:  {
      __typename: "ProductInventory",
      id: string,
      quantity?: number | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    price?: number | null,
    discount?:  {
      __typename: "Discount",
      id: string,
      name?: string | null,
      desc?: string | null,
      discount_percent?: number | null,
      active?: boolean | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateProductInventoryMutationVariables = {
  input: CreateProductInventoryInput,
  condition?: ModelProductInventoryConditionInput | null,
};

export type CreateProductInventoryMutation = {
  createProductInventory?:  {
    __typename: "ProductInventory",
    id: string,
    quantity?: number | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateProductInventoryMutationVariables = {
  input: UpdateProductInventoryInput,
  condition?: ModelProductInventoryConditionInput | null,
};

export type UpdateProductInventoryMutation = {
  updateProductInventory?:  {
    __typename: "ProductInventory",
    id: string,
    quantity?: number | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteProductInventoryMutationVariables = {
  input: DeleteProductInventoryInput,
  condition?: ModelProductInventoryConditionInput | null,
};

export type DeleteProductInventoryMutation = {
  deleteProductInventory?:  {
    __typename: "ProductInventory",
    id: string,
    quantity?: number | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateDiscountMutationVariables = {
  input: CreateDiscountInput,
  condition?: ModelDiscountConditionInput | null,
};

export type CreateDiscountMutation = {
  createDiscount?:  {
    __typename: "Discount",
    id: string,
    name?: string | null,
    desc?: string | null,
    discount_percent?: number | null,
    active?: boolean | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateDiscountMutationVariables = {
  input: UpdateDiscountInput,
  condition?: ModelDiscountConditionInput | null,
};

export type UpdateDiscountMutation = {
  updateDiscount?:  {
    __typename: "Discount",
    id: string,
    name?: string | null,
    desc?: string | null,
    discount_percent?: number | null,
    active?: boolean | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteDiscountMutationVariables = {
  input: DeleteDiscountInput,
  condition?: ModelDiscountConditionInput | null,
};

export type DeleteDiscountMutation = {
  deleteDiscount?:  {
    __typename: "Discount",
    id: string,
    name?: string | null,
    desc?: string | null,
    discount_percent?: number | null,
    active?: boolean | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetProductCategoryQueryVariables = {
  id: string,
};

export type GetProductCategoryQuery = {
  getProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    name: string,
    desc: string,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductCategoriesQueryVariables = {
  filter?: ModelProductCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductCategoriesQuery = {
  listProductCategories?:  {
    __typename: "ModelProductCategoryConnection",
    items:  Array< {
      __typename: "ProductCategory",
      id: string,
      name: string,
      desc: string,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    desc: string,
    SKU?: string | null,
    category?:  {
      __typename: "ProductCategory",
      id: string,
      name: string,
      desc: string,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    inventory?:  {
      __typename: "ProductInventory",
      id: string,
      quantity?: number | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    price?: number | null,
    discount?:  {
      __typename: "Discount",
      id: string,
      name?: string | null,
      desc?: string | null,
      discount_percent?: number | null,
      active?: boolean | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      desc: string,
      SKU?: string | null,
      category?:  {
        __typename: "ProductCategory",
        id: string,
        name: string,
        desc: string,
        created_at?: string | null,
        modified_at?: string | null,
        deleted_at?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      inventory?:  {
        __typename: "ProductInventory",
        id: string,
        quantity?: number | null,
        created_at?: string | null,
        modified_at?: string | null,
        deleted_at?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      price?: number | null,
      discount?:  {
        __typename: "Discount",
        id: string,
        name?: string | null,
        desc?: string | null,
        discount_percent?: number | null,
        active?: boolean | null,
        created_at?: string | null,
        modified_at?: string | null,
        deleted_at?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductInventoryQueryVariables = {
  id: string,
};

export type GetProductInventoryQuery = {
  getProductInventory?:  {
    __typename: "ProductInventory",
    id: string,
    quantity?: number | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListProductInventoriesQueryVariables = {
  filter?: ModelProductInventoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductInventoriesQuery = {
  listProductInventories?:  {
    __typename: "ModelProductInventoryConnection",
    items:  Array< {
      __typename: "ProductInventory",
      id: string,
      quantity?: number | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDiscountQueryVariables = {
  id: string,
};

export type GetDiscountQuery = {
  getDiscount?:  {
    __typename: "Discount",
    id: string,
    name?: string | null,
    desc?: string | null,
    discount_percent?: number | null,
    active?: boolean | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListDiscountsQueryVariables = {
  filter?: ModelDiscountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiscountsQuery = {
  listDiscounts?:  {
    __typename: "ModelDiscountConnection",
    items:  Array< {
      __typename: "Discount",
      id: string,
      name?: string | null,
      desc?: string | null,
      discount_percent?: number | null,
      active?: boolean | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProductCategorySubscription = {
  onCreateProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    name: string,
    desc: string,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductCategorySubscription = {
  onUpdateProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    name: string,
    desc: string,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductCategorySubscription = {
  onDeleteProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    name: string,
    desc: string,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    desc: string,
    SKU?: string | null,
    category?:  {
      __typename: "ProductCategory",
      id: string,
      name: string,
      desc: string,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    inventory?:  {
      __typename: "ProductInventory",
      id: string,
      quantity?: number | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    price?: number | null,
    discount?:  {
      __typename: "Discount",
      id: string,
      name?: string | null,
      desc?: string | null,
      discount_percent?: number | null,
      active?: boolean | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    desc: string,
    SKU?: string | null,
    category?:  {
      __typename: "ProductCategory",
      id: string,
      name: string,
      desc: string,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    inventory?:  {
      __typename: "ProductInventory",
      id: string,
      quantity?: number | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    price?: number | null,
    discount?:  {
      __typename: "Discount",
      id: string,
      name?: string | null,
      desc?: string | null,
      discount_percent?: number | null,
      active?: boolean | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    desc: string,
    SKU?: string | null,
    category?:  {
      __typename: "ProductCategory",
      id: string,
      name: string,
      desc: string,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    inventory?:  {
      __typename: "ProductInventory",
      id: string,
      quantity?: number | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    price?: number | null,
    discount?:  {
      __typename: "Discount",
      id: string,
      name?: string | null,
      desc?: string | null,
      discount_percent?: number | null,
      active?: boolean | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateProductInventorySubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateProductInventorySubscription = {
  onCreateProductInventory?:  {
    __typename: "ProductInventory",
    id: string,
    quantity?: number | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateProductInventorySubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateProductInventorySubscription = {
  onUpdateProductInventory?:  {
    __typename: "ProductInventory",
    id: string,
    quantity?: number | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteProductInventorySubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteProductInventorySubscription = {
  onDeleteProductInventory?:  {
    __typename: "ProductInventory",
    id: string,
    quantity?: number | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateDiscountSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateDiscountSubscription = {
  onCreateDiscount?:  {
    __typename: "Discount",
    id: string,
    name?: string | null,
    desc?: string | null,
    discount_percent?: number | null,
    active?: boolean | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateDiscountSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateDiscountSubscription = {
  onUpdateDiscount?:  {
    __typename: "Discount",
    id: string,
    name?: string | null,
    desc?: string | null,
    discount_percent?: number | null,
    active?: boolean | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteDiscountSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteDiscountSubscription = {
  onDeleteDiscount?:  {
    __typename: "Discount",
    id: string,
    name?: string | null,
    desc?: string | null,
    discount_percent?: number | null,
    active?: boolean | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
