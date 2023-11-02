const GRAPHQL_ENDPOINT = "/api/2023-01/graphql.json";
const domain = `https://${process.env.SHOPIFY_DOMAIN}`;
const endpoint = `${domain}${GRAPHQL_ENDPOINT}`;
const key = process.env.SHOPIFY_TOKEN;

const allProductsQuery = `{
    products (first:50, query:"status:active AND published_status:published") {
      nodes {
        id
        handle
        availableForSale
        title
        description
        descriptionHtml
        options {
        id
        name
        values
        }
        priceRange {
        maxVariantPrice {
            amount
            currencyCode
        }
        minVariantPrice {
            amount
            currencyCode
        }
        }
        variants(first: 250) {
        edges {
            node {
            id
            title
            availableForSale
            selectedOptions {
                name
                value
            }
            price {
                amount
                currencyCode
            }
            }
        }
        }
        featuredImage {
        ...image
        }
        images(first: 20) {
        edges {
            node {
                ...image
            }
        }
        }
        tags
        updatedAt
      }
    }
  }
  fragment image on Image {
    url
    altText
    width
    height
  }`;

const getProductQuery = `
query getProduct($handle: String!) {
  product(handle: $handle) {
    ...product
  }
}
fragment product on Product {
    id
    handle
    availableForSale
    title
    description
    descriptionHtml
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    tags
    updatedAt
  }
  fragment image on Image {
    url
    altText
    width
    height
  }`

export async function shopifyFetchAllProducts(
  cache = "no-store",
  headers = {},
  query = allProductsQuery,
  tags = null,
  variables = null
) {
  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      ...(tags && { next: { tags } }),
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      products: body.data.products.nodes,
    };
  } catch (e) {
    throw {
      error: e,
      query,
    };
  }
}

export async function shopifyFetchProduct(
  id,
  cache = "no-store",
  headers = {},
  query = getProductQuery,
  tags = null,
  variables = { handle: id }
) {
  try {
    // const variables = { variables: { handle: id } }
    // console.log("id", id, "variables", variables)
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      ...(tags && { next: { tags } }),
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    console.log(body, "BODY")

    return {
      status: result.status,
      product: body.data.product,
    };
  } catch (e) {
    throw {
      error: e,
      query,
    };
  }
}
