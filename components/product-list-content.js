"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ModalProvider from "@/components/modal-provider";
import Link from "next/link";

export const ProductContent = (props) => {
  const [productData, setProductData] = useState([]);
  const { products } = props;
  const data = products;

  // data.products.map((item) => {
  //     console.log(item);
  // });

  // making each product card a clickable link to load product page, makes it unessesary to add an onclick action for the same purpose
  // const onSubmit = (id) => {
  //   try {
  //     console.log(id);

  //     const productSelected = data.products.filter(
  //       (item) => item.handle === id
  //     );

  //     setProductData(productSelected);
  //   } catch (error) {
  //     console.log(error, "ERROR");
  //   }
  // };
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        All Products from Shopify Store
      </h2>
      <div className="grid grid-cols-1 sm-grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.products.map((item) => (
          <Link href={`/product/${item.handle}`} key={item.description}>
            <Card
              key={item.description}
              className="bg-[#192339] border-none text-white cursor-pointer"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <Image
                    src={item.featuredImage.url}
                    width={50}
                    height={50}
                    alt="product-image"
                  />
                  <div>
                    <p className="text-zinc-400 text-sm">{item.title}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  <p className="text-zinc-400 text-sm">
                    ${item.priceRange.maxVariantPrice.amount}
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
      {/* <ModalProvider product={productData} />  unable to get Modal to show at this time, using product page instead */}
    </div>
  );
};
