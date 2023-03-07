import React from "react";
import Image from "next/image";
import { useCallback } from "react";
import styles from "../css/Carousel.module.css";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Container from "./container";
import artichokeImg from "../public/img/artichokee-vis1.jpg";
import dateImg from "../public/img/Box-DD-1.jpeg";
import tomatoImg from "../public/img/tomatoe-visual1-2.png";

export default function ProductsCarousel(props) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const products = [
    {
      "name":"Sun-dried tomatoes",
      "img":tomatoImg
    },
    {
      "name":"Fresh Dates",
      "img":dateImg
    },
    {
      "name":"Canned Artichoke Hearts",
      "img":artichokeImg
    }
  ]

  const checkScrolls = useCallback(() => {
    if (emblaApi) {
      if (emblaApi.canScrollNext())
        document.getElementById("next_button").classList.remove(styles.greyed);
      else document.getElementById("next_button").classList.add(styles.greyed);
      if (emblaApi.canScrollPrev())
        document.getElementById("prev_button").classList.remove(styles.greyed);
      else document.getElementById("prev_button").classList.add(styles.greyed);
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  if (emblaApi) emblaApi.on("select", checkScrolls);

  checkScrolls();

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:flex-nowrap w-3/5">
        <div className="h-screen items-center justify-center center w-full text-center mx-auto">
          <div className="flex flex-row h-[90vh]">
            <button id="prev_button" className="left m-2 outline-0 border-transparent focus:border-transparent focus:ring-0" onClick={scrollPrev}>
              <FontAwesomeIcon icon={faAngleLeft} size="2x" />
            </button>

            <div className={styles.embla} ref={emblaRef}>
              <div className={styles.embla__container}>
                {products.map(product => 
                  <div className={styles.embla__slide}>
                  <CarouselItem
                    name={product.name}
                    img={product.img}
                  />
                </div>
              )}
              </div>
            </div>
            <button id="next_button" className="right m-2 outline-0 border-transparent focus:border-transparent focus:ring-0" onClick={scrollNext}>
              <FontAwesomeIcon icon={faAngleRight} size="2x" />
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
function CarouselItem(props) {
  return (
    <div className="h-[80vh] w-[80vw] md:w-[80vw] m-3 flex flex-col md:flex-col justify-center items-center text-left">
      <div id="image" className="w-2/5 mx-2 center items-center ">
        <Image src={props.img} className="" alt="project img" />
      </div>
      <div className="text-xl font-sans mx-4">
        <div>
            <b>{props.name}</b>
          </div>
      </div>
    </div>
  );
}
