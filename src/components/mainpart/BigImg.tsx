import { Box, Button, Stack, Typography } from "@mui/material";
import big from "./../../img/big.png";
import { useNavigate } from "react-router-dom";


export default function BigImg() {
  const navigate = useNavigate()
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${big})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          "&": {
            "@media(max-width:1200px)": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          },
        }}
      >
        <Box
          sx={{
            backdropFilter: "blur(6.5px)",
            maxWidth: "650px",
            padding: "90px 0",
            paddingLeft: "270px",
            "&": {
              "@media(max-width:1200px)": {
                padding: "40px 40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              },
              "@media(max-width:900px)": {
                maxHeight: "300px",
              },
              "@media(max-width:600px)": {
                display: "none",
              },
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "700",
              color: "white",
              fontSize: {
                xl: "70px",
                lg: "55px",
                md: "30px",
                sm: "26px",
                xs: "24px",
              },
              "@media(max-width:900px)": {
                paddingTop: "40px",
              },
            }}
          >
            Бытовая химия,
            <br />
            косметика <br />и хозтовары
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              color: "white",
              fontSize: {
                xl: "30px",
                lg: "20px",
                md: "15px",
                sm: "12px",
                xs: "12px",
              },
              marginTop: "40px",
              marginBottom: "60px",
            }}
          >
            оптом по кокчетаву и области
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/catalog')}
            sx={{
              width: "300px",
              height: "95px",
              color: "white",
              borderRadius: "80px",
              background: "#FFC85E",
              marginBottom: "91px",
              ":hover": {
                background: "#FFC85E",
              },
              "&": {
                "@media(max-width:1200px)": {
                  width: "220px",
                  height: "65px",
                },
              },
            }}
          >
            В КАТАЛОГ
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "35px",
              "@media(max-width:900px)": {
                display: "none",
              },
            }}
          >
            <Stack direction={"row"} spacing={2}>
              <Box
                sx={{
                  background: "#FFC856",
                  width: "39px",
                  height: "39px",
                  color: "white",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  borderRadius: "50%",
                }}
              >
                +
              </Box>
              <Typography
                variant="body2"
                sx={{ color: "white", fontSize: "14px", fontWeight: "400" }}
              >
                Только самые <br /> выгодные предложения
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={2}>
              <Box
                sx={{
                  background: "#FFC856",
                  width: "39px",
                  height: "39px",
                  color: "white",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  borderRadius: "50%",
                }}
              >
                +
              </Box>
              <Typography
                variant="body2"
                sx={{ color: "white", fontSize: "14px", fontWeight: "400" }}
              >
                Бесплатная доставка <br />
                по <b>Кокчетаву от 10 тыс ₸</b>
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "35px 0",
            display: "none",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            width: "280px",
            height: "auto",
            margin: "20px 0",
            background:
              " linear-gradient(89.86deg, #8A94AB 0.13%, rgba(138, 148, 171, 0) 99.89%)",
            backdropFilter: "blur(4.5px)",
            "@media(max-width:600px)": {
              display: "flex",
            },
          }}
        >
          <Typography
            sx={{ textAlign: "center", fontSize: "18px", color: "white" }}
          >
            Бытовая химия, косметика <br />и хозтовары
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              color: "white",
              fontSize: "10px",
              textAlign: "center",
            }}
          >
            оптом по кокчетаву и области
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "none",
          alignItems: "center",
          gap: "20px",
          "@media(max-width:900px)": {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "20px",
            marginLeft: "40px",
          },
          "@media(max-width:600px)": {
            marginLeft: "0px",
          },
        }}
      >
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Box
            sx={{
              background: "#FFC856",
              width: "39px",
              height: "39px",
              color: "white",
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              borderRadius: "50%",
            }}
          >
            +
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "#3F4E65",
              fontSize: "14px",
              fontWeight: "400",
              "@media(max-width:600px)": {
                fontSize: "10px",
              },
            }}
          >
            Только самые выгодные предложения
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Box
            sx={{
              background: "#FFC856",
              width: "39px",
              height: "39px",
              color: "white",
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              borderRadius: "50%",
            }}
          >
            +
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "#3F4E65",
              fontSize: "14px",
              fontWeight: "400",
              "@media(max-width:600px)": {
                fontSize: "10px",
              },
            }}
          >
            Бесплатная доставка по <b>Кокчетаву от 10 тыс ₸</b>
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
