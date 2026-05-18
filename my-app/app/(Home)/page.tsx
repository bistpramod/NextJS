import Ads from "@/components/ads/Ads"
import Hero from "@/components/banner/Hero"
import { CategoryProductListGrid } from "@/components/product/CategoryProductList";
import ProductListGrid from "@/components/product/HomeList";

//
export default function Home() {
  return (
    <section className="flex flex-col gap-10 w-full">
      <Hero />  
      <Ads />
        
        <CategoryProductListGrid />
        <ProductListGrid />
    </section>
  );
}
