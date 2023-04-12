import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import bgSlider from "./../../img/bgSlider.png";
import slider from "../../img/slider.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function Slider() {
  return (
    <Box
      sx={{
        margin: "0 40px",
        "@media(max-width:550px)": {
          margin: "0 10px",
        },
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={2}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Box
            sx={{
              background: `url(${bgSlider})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                padding: "80px 0 90px 110px",
                background: `url(${slider})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "right",
                borderRadius: "20px",
                width: "100%",
                "@media(max-width:1100px)": {
                  padding: "40px 0 45px 55px",
                },
                "@media(max-width:550px)": {
                  padding: "25px 10px",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  textTransform: "uppercase",
                  fontSize: "14px",
                  color: "white",
                  "@media(max-width:930px)": {
                    fontSize: "10px",
                  },
                  "@media(max-width:740px)": {
                    fontSize: "6px",
                  },
                  "@media(max-width:550px)": {
                    fontSize: "4px",
                  },
                }}
              >
                *Акция действует до 04/09/22
              </Typography>
              <Typography
                sx={{
                  fontSize: "45px",
                  color: "white",
                  marginTop: "10px",
                  "@media(max-width:930px)": {
                    fontSize: "25px",
                  },
                  "@media(max-width:740px)": {
                    fontSize: "18px",
                  },
                  "@media(max-width:550px)": {
                    marginTop: "5px",
                    fontSize: "12px",
                  },
                }}
              >
                <span style={{ fontWeight: "800" }}>Название</span> Акции
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "white",
                  marginTop: "35px",
                  "@media(max-width:930px)": {
                    fontSize: "14px",
                  },
                  "@media(max-width:740px)": {
                    fontSize: "10px",
                    marginTop: "10px",
                  },
                  "@media(max-width:550px)": {
                    marginTop: "5px",
                    fontSize: "8px",
                  },
                }}
              >
                Условия акции в пару строк, Условия акции <br />в пару строк,
                Условия акции в пару строк
              </Typography>
              <Button
                variant="contained"
                sx={{
                  width: "340px",
                  height: "90px",
                  borderRadius: "80px",
                  marginTop: "50px",
                  color: "white",
                  background: "#FFC85E",
                  ":hover": {
                    background: "#FFC85E",
                  },
                  "@media(max-width:930px)": {
                    width: "240px",
                    height: "70px",
                    marginTop: "30px",
                  },
                  "@media(max-width:740px)": {
                    width: "160px",
                    height: "40px",
                    marginTop: "15px",
                    fontSize: "12px",
                  },
                  "@media(max-width:550px)": {
                    width: "100px",
                    height: "30px",
                    marginTop: "5px",
                    fontSize: "7px",
                  },
                }}
              >
                ПРИНЯТЬ УЧАСТИЕ
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              background: `url(${bgSlider})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                padding: "80px 0 90px 110px",
                background: `url(${slider})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "right",
                borderRadius: "20px",
                width: "100%",
                "@media(max-width:1100px)": {
                  padding: "40px 0 45px 55px",
                },
                "@media(max-width:550px)": {
                  padding: "25px 10px",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  textTransform: "uppercase",
                  fontSize: "14px",
                  color: "white",
                  "@media(max-width:930px)": {
                    fontSize: "10px",
                  },
                  "@media(max-width:740px)": {
                    fontSize: "6px",
                  },
                  "@media(max-width:550px)": {
                    fontSize: "4px",
                  },
                }}
              >
                *Акция действует до 04/09/22
              </Typography>
              <Typography
                sx={{
                  fontSize: "45px",
                  color: "white",
                  marginTop: "10px",
                  "@media(max-width:930px)": {
                    fontSize: "25px",
                  },
                  "@media(max-width:740px)": {
                    fontSize: "18px",
                  },
                  "@media(max-width:550px)": {
                    marginTop: "5px",
                    fontSize: "12px",
                  },
                }}
              >
                <span style={{ fontWeight: "800" }}>Название</span> Акции
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "white",
                  marginTop: "35px",
                  "@media(max-width:930px)": {
                    fontSize: "14px",
                  },
                  "@media(max-width:740px)": {
                    fontSize: "10px",
                    marginTop: "10px",
                  },
                  "@media(max-width:550px)": {
                    marginTop: "5px",
                    fontSize: "8px",
                  },
                }}
              >
                Условия акции в пару строк, Условия акции <br />в пару строк,
                Условия акции в пару строк
              </Typography>
              <Button
                variant="contained"
                sx={{
                  width: "340px",
                  height: "90px",
                  borderRadius: "80px",
                  marginTop: "50px",
                  color: "white",
                  background: "#FFC85E",
                  ":hover": {
                    background: "#FFC85E",
                  },
                  "@media(max-width:930px)": {
                    width: "240px",
                    height: "70px",
                    marginTop: "30px",
                  },
                  "@media(max-width:740px)": {
                    width: "160px",
                    height: "40px",
                    marginTop: "15px",
                    fontSize: "12px",
                  },
                  "@media(max-width:550px)": {
                    width: "100px",
                    height: "30px",
                    marginTop: "5px",
                    fontSize: "7px",
                  },
                }}
              >
                ПРИНЯТЬ УЧАСТИЕ
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              background: `url(${bgSlider})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                padding: "80px 0 90px 110px",
                background: `url(${slider})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "right",
                borderRadius: "20px",
                width: "100%",
                "@media(max-width:1100px)": {
                  padding: "40px 0 45px 55px",
                },
                "@media(max-width:550px)": {
                  padding: "25px 10px",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  textTransform: "uppercase",
                  fontSize: "14px",
                  color: "white",
                  "@media(max-width:930px)": {
                    fontSize: "10px",
                  },
                  "@media(max-width:740px)": {
                    fontSize: "6px",
                  },
                  "@media(max-width:550px)": {
                    fontSize: "4px",
                  },
                }}
              >
                *Акция действует до 04/09/22
              </Typography>
              <Typography
                sx={{
                  fontSize: "45px",
                  color: "white",
                  marginTop: "10px",
                  "@media(max-width:930px)": {
                    fontSize: "25px",
                  },
                  "@media(max-width:740px)": {
                    fontSize: "18px",
                  },
                  "@media(max-width:550px)": {
                    marginTop: "5px",
                    fontSize: "12px",
                  },
                }}
              >
                <span style={{ fontWeight: "800" }}>Название</span> Акции
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "white",
                  marginTop: "35px",
                  "@media(max-width:930px)": {
                    fontSize: "14px",
                  },
                  "@media(max-width:740px)": {
                    fontSize: "10px",
                    marginTop: "10px",
                  },
                  "@media(max-width:550px)": {
                    marginTop: "5px",
                    fontSize: "8px",
                  },
                }}
              >
                Условия акции в пару строк, Условия акции <br />в пару строк,
                Условия акции в пару строк
              </Typography>
              <Button
                variant="contained"
                sx={{
                  width: "340px",
                  height: "90px",
                  borderRadius: "80px",
                  marginTop: "50px",
                  color: "white",
                  background: "#FFC85E",
                  ":hover": {
                    background: "#FFC85E",
                  },
                  "@media(max-width:930px)": {
                    width: "240px",
                    height: "70px",
                    marginTop: "30px",
                  },
                  "@media(max-width:740px)": {
                    width: "160px",
                    height: "40px",
                    marginTop: "15px",
                    fontSize: "12px",
                  },
                  "@media(max-width:550px)": {
                    width: "100px",
                    height: "30px",
                    marginTop: "5px",
                    fontSize: "7px",
                  },
                }}
              >
                ПРИНЯТЬ УЧАСТИЕ
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              background: `url(${bgSlider})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                padding: "80px 0 90px 110px",
                background: `url(${slider})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "right",
                borderRadius: "20px",
                width: "100%",
                "@media(max-width:1100px)": {
                  padding: "40px 0 45px 55px",
                },
                "@media(max-width:550px)": {
                  padding: "25px 10px",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  textTransform: "uppercase",
                  fontSize: "14px",
                  color: "white",
                  "@media(max-width:930px)": {
                    fontSize: "10px",
                  },
                  "@media(max-width:740px)": {
                    fontSize: "6px",
                  },
                  "@media(max-width:550px)": {
                    fontSize: "4px",
                  },
                }}
              >
                *Акция действует до 04/09/22
              </Typography>
              <Typography
                sx={{
                  fontSize: "45px",
                  color: "white",
                  marginTop: "10px",
                  "@media(max-width:930px)": {
                    fontSize: "25px",
                  },
                  "@media(max-width:740px)": {
                    fontSize: "18px",
                  },
                  "@media(max-width:550px)": {
                    marginTop: "5px",
                    fontSize: "12px",
                  },
                }}
              >
                <span style={{ fontWeight: "800" }}>Название</span> Акции
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "white",
                  marginTop: "35px",
                  "@media(max-width:930px)": {
                    fontSize: "14px",
                  },
                  "@media(max-width:740px)": {
                    fontSize: "10px",
                    marginTop: "10px",
                  },
                  "@media(max-width:550px)": {
                    marginTop: "5px",
                    fontSize: "8px",
                  },
                }}
              >
                Условия акции в пару строк, Условия акции <br />в пару строк,
                Условия акции в пару строк
              </Typography>
              <Button
                variant="contained"
                sx={{
                  width: "340px",
                  height: "90px",
                  borderRadius: "80px",
                  marginTop: "50px",
                  color: "white",
                  background: "#FFC85E",
                  ":hover": {
                    background: "#FFC85E",
                  },
                  "@media(max-width:930px)": {
                    width: "240px",
                    height: "70px",
                    marginTop: "30px",
                  },
                  "@media(max-width:740px)": {
                    width: "160px",
                    height: "40px",
                    marginTop: "15px",
                    fontSize: "12px",
                  },
                  "@media(max-width:550px)": {
                    width: "100px",
                    height: "30px",
                    marginTop: "5px",
                    fontSize: "7px",
                  },
                }}
              >
                ПРИНЯТЬ УЧАСТИЕ
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
