import { Box, Typography } from "@mui/material";
import qimik from "./../../img/qimik.png";
import cosmetik from "./../../img/cosmetik.png";
import forhome from "./../../img/forhome.png";
import baby from "./../../img/baby.png";
import kitchen from "./../../img/kitchen.png";

export default function Categories() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "100px 0px",
      }}
    >
      <Box
        sx={{
          marginBottom: "50px",
          marginLeft: "40px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textTransform: "uppercase",
            fontWeight: "500",
            fontSize: "40px",
            color: "#111",
            "@media(max-width:600px)": {
              fontSize: "28px",
            },
          }}
        >
          <span style={{ color: "#FFC85E", fontWeight: "800" }}>категории</span>{" "}
          товаров
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "300",
            color: "#3F4E65",
            "@media(max-width:600px)": {
              fontSize: "14px",
            },
          }}
        >
          10 000+ ходовых позиций по спецмальным ценам
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "10px",
          "@media(max-width:1380px)": {
            flexWrap: "wrap",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: "250px",
              height: "250px",
              background: "#f8f3d9",
              borderRadius: "20px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "start",
              overflow: "hidden",
            }}
          >
            <img src={qimik} alt="" />
          </Box>
          <Typography
            sx={{
              fontSize: "16px",
            }}
          >
            Бытовая химия
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: "250px",
              height: "250px",
              background: "#f8f3d9",
              borderRadius: "20px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "start",
              overflow: "hidden",
            }}
          >
            <img src={cosmetik} alt="" />
          </Box>
          <Typography
            sx={{
              fontSize: "16px",
            }}
          >
            Косметика и гигиена
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: "250px",
              height: "250px",
              background: "#f8f3d9",
              borderRadius: "20px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "start",
              overflow: "hidden",
            }}
          >
            <img src={forhome} alt="" />
          </Box>
          <Typography
            sx={{
              fontSize: "16px",
            }}
          >
            Товары для дома
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: "250px",
              height: "250px",
              background: "#f8f3d9",
              borderRadius: "20px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "start",
              overflow: "hidden",
            }}
          >
            <img src={baby} alt="" />
          </Box>
          <Typography
            sx={{
              fontSize: "16px",
            }}
          >
            Товары для детей и мам
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: "250px",
              height: "250px",
              background: "#f8f3d9",
              borderRadius: "20px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "start",
              overflow: "hidden",
            }}
          >
            <img src={kitchen} alt="" />
          </Box>
          <Typography
            sx={{
              fontSize: "16px",
            }}
          >
            Посуда
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
