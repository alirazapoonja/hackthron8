import React from "react";
import Image from "next/image";

type ProductType = {
  title: string;
  price: string;
  oldPrice: string | null;
  image: string;
};

const product = [
  {
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: null,
    image: "image.png",
  },
  {
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: "",
    image: "image.png",
  },
  {
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: "",
    image: "image.png",
  },
  {
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: "",
    image: "image.png",
  },
];

const ProductBox = ({ product }: { product: ProductType }) => (
  <div>
    <div className="group shadow-md bg-neutral-100 w-[220px] h-[180px] flex justify-center items-center relative cursor-pointer">
      <Image src={product.image} width={150} height={100} alt={product.title} />
      <div className="absolute top-2 right-2 flex flex-col items-center space-y-2 "></div>
      <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
        New
      </button>
    </div>
    <h1 className="font-bold font-sans pt-2">{product.title}</h1>
    <div className="flex items-center space-x-2">
      <span className="text-red-500 font-bold">{product.price}</span>
      {product.oldPrice && (
        <span className="text-grey-400 font-bold line-through">{product.oldPrice}</span>
      )}
    </div>
  </div>
);

export default ProductBox;
