"use client";

import { useEffect, useState } from "react";

import ProductModal from "@/components/product-modal";


function ModalProvider(props) {
  const [isMounted, setIsMounted] = useState(false);
  const { product } = props

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <ProductModal product={product}/>
        </>
    );
}

export default ModalProvider;