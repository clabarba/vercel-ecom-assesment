import Image from "next/image";

import { Navbar } from "@/components/nav-bar";
import { ProductPageContent } from "@/components/product-page-content";
import { shopifyFetchAllProducts, shopifyFetchProduct } from "@/lib/shopify";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

async function ProductPage({ params }) {
    console.log(params.id);
    const data = await shopifyFetchProduct(params.id);
    console.log(data);
    return (
      <div className="h-full text-white">
        <ProductPageContent product={data.product}/>
      </div>
    );
  }
  
  export default ProductPage;
  