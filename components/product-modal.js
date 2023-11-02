"use client"
import { useState } from "react";

import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogFooter, 
    DialogHeader, 
    DialogTitle } from "@/components/ui/dialog";
import { useProductModal } from "@/hooks/use-product-modal";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Store } from "lucide-react"

function ProductModal(props){
    const ProductModal = useProductModal();
    const { product } = props

    console.log(product, "PRODUCT SELECTED FOR MODAL")

    // if (!product) return null;

    return (
        <Dialog open={ProductModal.isOpen} onOpenChange={ProductModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2 font-bold py-1">
                            Upgrade to NocaAi
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {product.map((item) => (
                            <Card
                                key={item.title}
                                className="p-3 border-black/5 flex items-center justify-between hover:shadow-lg transition cursor-pointer"
                            >
                                <div className="flex items-center gap-x-4">
                                    <div className={cn("p-2 w-fit rounded-md")}>
                                        <Store className={cn("h-8 w-8")} />
                                    </div>
                                    <div className="font-semibold text-sm">
                                        {item.description}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex justify-center">
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ProductModal;