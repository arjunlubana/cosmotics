import { Authenticator } from "@aws-amplify/ui-react";
import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { API, withSSRContext } from "aws-amplify";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { RiAddBoxLine, RiDeleteBin6Line, RiFileEditLine } from "react-icons/ri";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ProductCard from "../components/ProductCard";
import { deleteProduct } from "../src/graphql/mutations";
import { listProducts } from "../src/graphql/queries";

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  const response = await SSR.API.graphql({
    query: listProducts
  });
  return {
    props: {
      products: response.data.listProducts.items,
    },
  };
}

export default function Admin({ products }) {
  const router = useRouter();

  async function handleDelete(product) {
    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: deleteProduct,
        variables: {
          input: { id: product.id },
        },
      });
      router.push("/");
    } catch ({ errors }) {
      console.error(...errors);
      throw new Error(errors[0].message);
    }
  }
  return (
    <>
      <Header />
      <Authenticator>
        {({ signOut, user }) => (
          <Flex
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              w: "80vw",
              alignItems: "center",
              m: "auto",
            }}
          >
            <Avatar size="2xl" />
            <Text m={2}>{user.attributes.email}</Text>
            <NextLink href="product/new" passHref>
              <Button
                leftIcon={<RiAddBoxLine />}
                colorScheme="teal"
                variant="solid"
                as="a"
              >
                Add Product
              </Button>
            </NextLink>

            {products.map((product) => (
              <Flex key={product.id} direction="column">
                <ProductCard product={product}>
                  <Flex sx={{ m: "2" }}>
                    <NextLink href={`/product/${product.id}/update`} passHref>
                      <Button
                        leftIcon={<RiFileEditLine />}
                        colorScheme="teal"
                        variant="solid"
                        as="a"
                        fontSize="sm"
                      >
                        Update
                      </Button>
                    </NextLink>
                    <Button
                      onClick={() => handleDelete(product)}
                      mx={2}
                      leftIcon={<RiDeleteBin6Line />}
                      colorScheme="red"
                      variant="solid"
                      fontSize="sm"
                    >
                      Delete
                    </Button>
                  </Flex>
                </ProductCard>
              </Flex>
            ))}
          </Flex>
        )}
      </Authenticator>

      <Footer />
    </>
  );
}
