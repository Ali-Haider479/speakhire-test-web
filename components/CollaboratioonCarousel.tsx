"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
interface CollaborationsCarouselProps {
  data: {
    title: string;
    carousel_images: any[];
  };
}

const CollaborationsCarousel = ({ data }: CollaborationsCarouselProps) => {
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstPart = words.slice(0, 1).join(" ");
      const lastPart = words.slice(1).join(" ");

      return (
        <>
          
          <span style={{ color: "#0F99C3" }}> {firstPart} </span>
          {lastPart}
        </>
      );
    } else {
      return "";
    }
  };
  return (
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 1, md: 6 },
        // px: 2,
        maxWidth:{xs:"90vw",md:"100vw"},
        mx: "auto",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 4, width: { xs: "95%" } }}
      >
        {HighlightText(data.title)}
      </Typography>

      {/* Carousel */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        freeMode={true}
        centeredSlides={true}
        initialSlide={1} 
        breakpoints={{
          640: {
            slidesPerView: 1.25,
            centeredSlides: false,
            initialSlide: 1, // Ensure it works in responsive breakpoints
          },
          1024: {
            slidesPerView: 1.25,
            centeredSlides: true,
            initialSlide: 1, // Ensure it works in responsive breakpoints
          },
        }}
        style={{ paddingBottom: "40px" }}
      >
        {data.carousel_images.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: "relative",
                borderRadius: {xs:"16px",md:"28px"},
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
                  width: {xs:"94%",md:"98%"},
                  background:
                    "linear-gradient(transparent, rgba(0, 0, 0, 0.8))",
                  color: "white",
                  pb: { xs: 1.5, md: 3 },
                  px: { xs: 1.5, md: 4 },
                  ml: 0,
                  textAlign:{xs:"center",md:"left"}
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontSize: { xs: "1.1rem", md:"1.25rem" } }}
                >
                  {slide.title}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: {xs:"0.7rem", md:"0.9rem"} }}>
                  {slide.description}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CollaborationsCarousel;
