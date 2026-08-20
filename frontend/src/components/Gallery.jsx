import React, { useEffect, useRef } from 'react';
import { galleryImages } from '../data/portfolioData';

const infiniteGallery = [...galleryImages, ...galleryImages];

export default function Gallery() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrameId;
    let scrollAmount = 0;

    const smoothScroll = () => {
      scrollAmount += 0.6;
      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0;
      }
      carousel.scrollLeft = scrollAmount;
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    animationFrameId = requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="w-full">
      <div className="inline-block font-silkscreen bg-[#ff4502] text-[#fcfff7] px-5 py-2 text-sm sm:text-base font-bold tracking-wider rounded-md mb-6 shadow-md">
        SNAPSHOTS & MEMORIES
      </div>

      <div className="overflow-hidden rounded-2xl border-2 border-[#222] bg-[#111] p-3">
        <div
          ref={carouselRef}
          id="carousel"
          className="flex gap-3.5 select-none"
          style={{ overflowX: 'hidden' }}
        >
          {infiniteGallery.map((img, index) => (
            <div
              key={index}
              className="shrink-0 w-[220px] sm:w-[260px] h-[160px] sm:h-[180px] rounded-xl overflow-hidden bg-[#1a1a1a] border-2 border-[#333] hover:border-[#c2ff01] transition-all group"
            >
              <img
                src={img}
                alt="Gallery highlight"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
