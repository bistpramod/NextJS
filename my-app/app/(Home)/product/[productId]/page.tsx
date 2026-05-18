import { ProductListItem } from "@/types/ProductType"
import { Metadata } from "next"

export const generateMetadata = async ({params}: Readonly<{params: Promise<{productId: string}>}>): Promise<Metadata> => {
  const param = await params

  const response = await fetch('https://dummyjson.com/product/'+param.productId)
  const productDetail = await response.json() as ProductListItem;

  return {
    title: productDetail.title,
    description: productDetail.description
  }
}
export default async function ProductDetail({
  params,
}: Readonly<{ params: Promise<{ productId: string }> }>) {
  const param = await params;

  const response = await fetch(
    "https://dummyjson.com/product/" + param.productId,
  );
  const productDetail = (await response.json()) as ProductListItem;
  
  console.log(productDetail)
  
  return <></>;
}