'use client';
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { ProductListItem } from "@/types/ProductType";

export const CategoryProductListGrid = () => {
  const [products, setProducts] = useState<Array<ProductListItem>>()

  const getProductByCategorySlug = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/category/smartphones",
      );
      const result = await response.json()
      setProducts(result.products)
    } catch {
      // 
      console.log("Error fetching products")
    }
  }

  useEffect(() => {
    // return () => {
      getProductByCategorySlug()
    // }
  }, [])

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Smart Phones
        </h2>
        <div className="mt-6 gap-x-6 gap-y-10">
          {products && products.length > 0 ? (
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={20}
              slidesPerView={4}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {products.map((prod: ProductListItem, i: number) => (
                <SwiperSlide key={i}>
                  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                    <a href={'/product/'+prod.id}>
                      <img
                        className="p-8 rounded-t-lg"
                        src={prod.thumbnail}
                        alt="product image"
                      />
                    </a>
                    <div className="px-5 pb-5">
                      <a href={'/product/'+prod.id}>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                          {prod.title}
                        </h5>
                      </a>
                      <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                          {[1, 2, 3, 4, 5].map((val: number) => (
                            <svg
                              key={val}
                              className={`size-4 ${Math.ceil(prod.rating) >= val ? "text-yellow-300" : "text-gray-200"}`}
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          ))}
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm  ms-3">
                          {Math.ceil(prod.rating)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-900">
                          {Intl.NumberFormat("us", {
                            style: "currency",
                            currency: "usd",
                          }).format(prod.price)}
                        </span>
                        <button className="bg-amber-500 p-2 rounded-m text-white">
                          <span className="label">+ Add to card</span>
                          <span className="gradient-container">
                            <span className="gradient"></span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
