/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  id?: string | null,
  name: string,
  desc: string,
  category_id?: string | null,
  price?: number | null,
  created_at?: string | null,
  modified_at?: string | null,
  deleted_at?: string | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  category_id?: ModelIDInput | null,
  price?: ModelFloatInput | null,
  created_at?: ModelStringInput | null,
  modified_at?: ModelStringInput | null,
  deleted_at?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
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
  category_id?: string | null,
  category?: ModelProductCategoryConnection | null,
  price?: number | null,
  created_at?: string | null,
  modified_at?: string | null,
  deleted_at?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelProductCategoryConnection = {
  __typename: "ModelProductCategoryConnection",
  items:  Array<ProductCategory | null >,
  nextToken?: string | null,
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
  owner?: string | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  desc?: string | null,
  category_id?: string | null,
  price?: number | null,
  created_at?: string | null,
  modified_at?: string | null,
  deleted_at?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

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

export type CreateCartInput = {
  id?: string | null,
  total?: number | null,
  created_at?: string | null,
  modified_at?: string | null,
  deleted_at?: string | null,
};

export type ModelCartConditionInput = {
  total?: ModelIntInput | null,
  created_at?: ModelStringInput | null,
  modified_at?: ModelStringInput | null,
  deleted_at?: ModelStringInput | null,
  and?: Array< ModelCartConditionInput | null > | null,
  or?: Array< ModelCartConditionInput | null > | null,
  not?: ModelCartConditionInput | null,
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

export type Cart = {
  __typename: "Cart",
  id: string,
  products?:  Array<Product | null > | null,
  total?: number | null,
  created_at?: string | null,
  modified_at?: string | null,
  deleted_at?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateCartInput = {
  id: string,
  total?: number | null,
  created_at?: string | null,
  modified_at?: string | null,
  deleted_at?: string | null,
};

export type DeleteCartInput = {
  id: string,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  category_id?: ModelIDInput | null,
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

export type ModelCartFilterInput = {
  id?: ModelIDInput | null,
  total?: ModelIntInput | null,
  created_at?: ModelStringInput | null,
  modified_at?: ModelStringInput | null,
  deleted_at?: ModelStringInput | null,
  and?: Array< ModelCartFilterInput | null > | null,
  or?: Array< ModelCartFilterInput | null > | null,
  not?: ModelCartFilterInput | null,
};

export type ModelCartConnection = {
  __typename: "ModelCartConnection",
  items:  Array<Cart | null >,
  nextToken?: string | null,
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
    category_id?: string | null,
    category?:  {
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    price?: number | null,
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
    category_id?: string | null,
    category?:  {
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    price?: number | null,
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
    category_id?: string | null,
    category?:  {
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    price?: number | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
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
    owner?: string | null,
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
    owner?: string | null,
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
    owner?: string | null,
  } | null,
};

export type CreateCartMutationVariables = {
  input: CreateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type CreateCartMutation = {
  createCart?:  {
    __typename: "Cart",
    id: string,
    products?:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      desc: string,
      category_id?: string | null,
      category?:  {
        __typename: "ModelProductCategoryConnection",
        nextToken?: string | null,
      } | null,
      price?: number | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    total?: number | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCartMutationVariables = {
  input: UpdateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type UpdateCartMutation = {
  updateCart?:  {
    __typename: "Cart",
    id: string,
    products?:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      desc: string,
      category_id?: string | null,
      category?:  {
        __typename: "ModelProductCategoryConnection",
        nextToken?: string | null,
      } | null,
      price?: number | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    total?: number | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCartMutationVariables = {
  input: DeleteCartInput,
  condition?: ModelCartConditionInput | null,
};

export type DeleteCartMutation = {
  deleteCart?:  {
    __typename: "Cart",
    id: string,
    products?:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      desc: string,
      category_id?: string | null,
      category?:  {
        __typename: "ModelProductCategoryConnection",
        nextToken?: string | null,
      } | null,
      price?: number | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    total?: number | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    category_id?: string | null,
    category?:  {
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    price?: number | null,
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
      category_id?: string | null,
      category?:  {
        __typename: "ModelProductCategoryConnection",
        nextToken?: string | null,
      } | null,
      price?: number | null,
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
    owner?: string | null,
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
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCartQueryVariables = {
  id: string,
};

export type GetCartQuery = {
  getCart?:  {
    __typename: "Cart",
    id: string,
    products?:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      desc: string,
      category_id?: string | null,
      category?:  {
        __typename: "ModelProductCategoryConnection",
        nextToken?: string | null,
      } | null,
      price?: number | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    total?: number | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCartsQueryVariables = {
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartsQuery = {
  listCarts?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "Cart",
      id: string,
      products?:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        desc: string,
        category_id?: string | null,
        price?: number | null,
        created_at?: string | null,
        modified_at?: string | null,
        deleted_at?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      total?: number | null,
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

export type OnCreateProductSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    desc: string,
    category_id?: string | null,
    category?:  {
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    price?: number | null,
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
    category_id?: string | null,
    category?:  {
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    price?: number | null,
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
    category_id?: string | null,
    category?:  {
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    price?: number | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateProductCategorySubscriptionVariables = {
  owner?: string | null,
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
    owner?: string | null,
  } | null,
};

export type OnUpdateProductCategorySubscriptionVariables = {
  owner?: string | null,
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
    owner?: string | null,
  } | null,
};

export type OnDeleteProductCategorySubscriptionVariables = {
  owner?: string | null,
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
    owner?: string | null,
  } | null,
};

export type OnCreateCartSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCartSubscription = {
  onCreateCart?:  {
    __typename: "Cart",
    id: string,
    products?:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      desc: string,
      category_id?: string | null,
      category?:  {
        __typename: "ModelProductCategoryConnection",
        nextToken?: string | null,
      } | null,
      price?: number | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    total?: number | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCartSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCartSubscription = {
  onUpdateCart?:  {
    __typename: "Cart",
    id: string,
    products?:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      desc: string,
      category_id?: string | null,
      category?:  {
        __typename: "ModelProductCategoryConnection",
        nextToken?: string | null,
      } | null,
      price?: number | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    total?: number | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCartSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCartSubscription = {
  onDeleteCart?:  {
    __typename: "Cart",
    id: string,
    products?:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      desc: string,
      category_id?: string | null,
      category?:  {
        __typename: "ModelProductCategoryConnection",
        nextToken?: string | null,
      } | null,
      price?: number | null,
      created_at?: string | null,
      modified_at?: string | null,
      deleted_at?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    total?: number | null,
    created_at?: string | null,
    modified_at?: string | null,
    deleted_at?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
