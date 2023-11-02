"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ModalProvider from "@/components/modal-provider";
import Link from "next/link";

export const ProductPageContent = (props) => {
  const [productData, setProductData] = useState([]);
  const { product } = props;

  console.log("productsasdf", product);

  const onSubmit = (id) => {
    try {
      console.log(id);

      setProductData(productSelected);
    } catch (error) {
      console.log(error, "ERROR");
    }
  };
  return (
    <div className="px-10 pb-20 max-width">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Product Page for {product.title}
      </h2>
      <div className="flex justify-center">
            <Card
              key={product.description}
              className="bg-[#192339] border-none text-white cursor-pointer items-center" 
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <Image
                    src={product.featuredImage.url}
                    width={200}
                    height={200}
                    alt="product-image"
                  />
                  <div>
                    <p className="text-lg">{product.handle}</p>
                    <p className="text-zinc-400 text-sm">{product.title}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  <p className="text-lg">{product.description}</p>
                  <p className="text-zinc-400 text-sm">
                    ${product.priceRange.maxVariantPrice.amount}
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
      </div>
      {/* <ModalProvider product={productData} />  unable to get Modal to show at this time, using product page instead */}
    </div>
  );
};
