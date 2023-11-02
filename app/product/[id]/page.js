import Image from "next/image";

import { ProductPageContent } from "@/components/product-page-content";
import { shopifyFetchProduct } from "@/lib/shopify";


async function ProductPage({ params }) {
    const data = await shopifyFetchProduct(params.id);
    return (
      <div className="h-full text-white">
        <ProductPageContent product={data.product}/>
      </div>
    );
  }
  
  export default ProductPage;
  