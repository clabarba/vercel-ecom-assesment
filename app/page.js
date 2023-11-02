import { Navbar } from "@/components/nav-bar";
import { ProductContent } from "@/components/product-list-content";
import { shopifyFetchAllProducts } from "@/lib/shopify";

async function HomePage() {
    const products = await shopifyFetchAllProducts();
    return (
      <div className="h-full w-full">
        <ProductContent products={products}/>
      </div>
    );
  }
  
  export default HomePage;
  