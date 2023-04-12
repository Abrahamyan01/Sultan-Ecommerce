import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Typography } from "@mui/material";
import air from "../../img/brands/air.png";
import fresh from "../../img/brands/fresh.png";
import colgate from "../../img/brands/colgate.png";
import nivea from "../../img/brands/nivea.png";
import nefis from "../../img/brands/nefis.png";
import johnsons from "../../img/brands/johnsons.png";
import camay from "../../img/brands/camay.png";
import cotton from "../../img/brands/cotton.png";
import sibi from "../../img/brands/sibi.png";
import nc from "../../img/brands/nc.png";

export default function BestSlider() {
  return (
    <Box
      sx={{
        margin: "100px 30px",
      }}
    >
      <Box
        sx={{
          marginBottom: "50px",
          marginLeft: "10px",
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "40px",
            "@media(max-width:600px)": {
              fontSize: "28px",
            },
          }}
        >
          <span style={{ color: "#FFC85E", fontWeight: "800" }}>Лучшие</span>{" "}
          товары
        </Typography>
        <Typography
          sx={{
            color: "#3F4E65",
            fontSize: "20px",
            fontWeight: "300",
            "@media(max-width:600px)": {
              fontSize: "14px",
            },
          }}
        >
          От ведущих мировых брендов
        </Typography>
      </Box>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={window.innerWidth > 700 ? 5 : 2}
        navigation
      >
        <SwiperSlide>
          <Box
            sx={{
              background: "#FCFCFC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "5px",
              width: "100%",
            }}
          >
            <img src={air} alt="air" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              background: "#FCFCFC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "5px",
            }}
          >
            <img src={fresh} alt="air" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              background: "#FCFCFC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "15px 5px",
            }}
          >
            <img src={sibi} alt="air" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              background: "#FCFCFC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "5px",
            }}
          >
            <img src={cotton} alt="air" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              background: "#FCFCFC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "5px",
            }}
          >
            <img src={camay} alt="air" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              background: "#FCFCFC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "15px 5px",
            }}
          >
            <img src={johnsons} alt="air" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              background: "#FCFCFC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "15px 5px",
            }}
          >
            <img src={colgate} alt="air" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              background: "#FCFCFC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "5px",
            }}
          >
            <img src={nivea} alt="air" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              background: "#FCFCFC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "5px",
            }}
          >
            <img src={nc} alt="air" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              background: "#FCFCFC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "5px",
            }}
          >
            <img src={nefis} alt="air" />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
