"use client";

import banner1 from "../../public/banner1.png"
import banner2 from "../../public/banner2.png"
import banner3 from "../../public/banner3.png"

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Peças Básicas",
      button: "Descobrir",
      src: banner1,
    },
    {
      title: "Nova Coleção",
      button: "Ver Descontos",
      src: banner2,
    },
    {
      title: "Leve 3 por 2",
      button: "Aproveitar",
      src: banner3,
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full">
      <Carousel slides={slideData} />
    </div>
  );
}
