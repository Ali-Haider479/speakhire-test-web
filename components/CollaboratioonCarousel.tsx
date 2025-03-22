"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    img: "/slide.png",
    title: "Celebrating WHM at City Hall",
    description:
      "On March 19 I had the honor of participating in the city Council event to celebrate women's month thanks to SPEAKHIRE. It was one of the most beautiful and important experiences I have had to date in NY...",
  },
  {
    img: "/slide.png",
    title: "Empowering Women in Tech",
    description:
      "A great event showcasing the talents of women in the tech industry, celebrating innovation, diversity, and progress in the sector.",
  },
  {
    img: "/slide.png",
    title: "Community Engagement",
    description:
      "Engaging with local communities and fostering relationships to build a strong and supportive network.",
  },
];

interface CollaborationsCarouselProps {
  data: {
    title: string;
    carousel_images: any[];
  };
}

const CollaborationsCarousel = ({ data }: CollaborationsCarouselProps) => {
  return (
    <Box
      sx={{ textAlign: "center", py: 6, px: 2, maxWidth: "80vw", mx: "auto" }}
    >
      {/* Heading */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        {data.title}
      </Typography>

      {/* Carousel */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={true}
        breakpoints={{
          640: { slidesPerView: 1.5, centeredSlides: true },
          1024: { slidesPerView: 2.5, centeredSlides: true },
        }}
        style={{ paddingBottom: "40px" }}
      >
        {data.carousel_images.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                width: "100%",
                aspectRatio: "16/9",
              }}
            >
              <Image
                src={
                  slide?.cover_image?.source.url
                    ? process.env.NEXT_PUBLIC_STRAPI_URL +
                      slide.cover_image.source.url
                    : null
                }
                alt={slide.cover_image.alternate_text}
                fill
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "90%",
                  background:
                    "linear-gradient(transparent, rgba(0, 0, 0, 0.8))",
                  color: "white",
                  pb: 3,
                  px: 4,
                  ml: 0,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {slide.title}
                </Typography>
                <Typography variant="body2">{slide.description}</Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CollaborationsCarousel;
