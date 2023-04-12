import { useLocation, useOutletContext } from "react-router-dom";
import products from "../../data/products.json";
import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductPage() {
  const { getProdsToAdd } = useOutletContext<any>();
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];

  const product = products.find((el) => el.barcode === Number(id));

  return (
    <Container sx={{ marginY: "30px" }}>
      <Box>
        <Stack direction={"row"} gap={"2vw"} sx={{ marginBottom: "50px" }}>
          <Typography
            sx={{ color: "#3F4E65", fontSize: "14px", fontWeight: "300" }}
          >
            Главная
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderStyle: "dashed" }}
          />
          <Typography
            sx={{ color: "#3F4E65", fontSize: "14px", fontWeight: "300" }}
          >
            Косметика и гигиена
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderStyle: "dashed" }}
          />
          <Typography
            sx={{
              color: "#3F4E65",
              fontSize: "14px",
              fontWeight: "300",
              opacity: "0.5",
            }}
          >
            {product?.title}
          </Typography>
        </Stack>
      </Box>
      <Box sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "3vw",
        "@media(max-width:900px)": {
          flexWrap: "wrap"
        },
      }}>
        <Box sx={{
          "@media(max-width:480px)": {
            display: "none"
          },
        }}><img src={product?.image} alt={product?.brand} style={{ maxWidth: "450px", }} /></Box>
        <Box sx={{
          display: "none", "@media(max-width:480px)": {
            display: "block"
          },
        }}><img src={product?.image} alt={product?.brand} style={{ maxWidth: "300px", }} /></Box>
        <Stack>
          <Box>
            <Typography sx={{ fontSize: "14px", color: "#1FD85D" }}>В наличии</Typography>
            <Typography sx={{ fontSize: "30px", color: "#111111" }}>{product?.title}</Typography>
            <Typography sx={{ fontSize: "12px", color: "#3F4E65" }}>{product?.size} {product?.sizeType}</Typography>
          </Box>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "10px",
            "@media(max-width:480px)": {
              flexDirection: "column",
              alignItems: "flex-start",
            },
          }}>
            <Typography sx={{ fontSize: "30px", color: "#111111", fontWeight: "600" }}>{product?.price} <CurrencyRubleIcon /> </Typography>
            <Button
              endIcon={
                <AddShoppingCartIcon
                  sx={{
                    fontSize: "30px",
                  }}
                />
              }
              variant="contained"
              sx={{
                width: "150px",
                height: "45px",
                fontSize: "10px",
                borderRadius: "80px",
                background: "#FFC85E",
                ":hover": {
                  background: "#FFC85E",
                },
              }}
              onClick={() => {
                getProdsToAdd(product?.barcode, product?.price);
              }}
            >
              В КОРЗИНУ
            </Button>
          </Box>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "35px",
            marginTop: "30px",
            flexWrap: "wrap"
          }}>
            <Button sx={{ width: "77px", height: "77px", boxShadow: "0px 15px 70px -11px rgba(43, 28, 1, 0.04)", borderRadius: "10px", background: "#FFFFFF" }}><ShareIcon sx={{ color: "#FFC85E" }} /></Button>
            <Typography sx={{ width: "300px", textAlign: "center", fontSize: "12px", color: "#3F4E65", boxShadow: "0px 15px 70px -11px rgba(43, 28, 1, 0.04)", borderRadius: "10px", background: "#FFFFFF", padding: "10px 15px" }}>При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области</Typography>
            <Button sx={{
              width: "185px",
              height: "75px",
              boxShadow: "0px 15px 70px -11px rgba(43, 28, 1, 0.04)", borderRadius: "10px", background: "#FFFFFF",
            }}>Прайс-лист</Button>
          </Box>
          <Stack>
            <Typography sx={{ fontSize: "14px", color: "#3F4E65" }}>Производитель: <b>{product?.manufacturer}</b></Typography>
            <Typography sx={{ fontSize: "14px", color: "#3F4E65" }}>Бренд: <b>{product?.brand}</b></Typography>
            <Typography sx={{ fontSize: "14px", color: "#3F4E65" }}>Артикул: <b>{product?.barcode}</b></Typography>
            <Typography sx={{ fontSize: "14px", color: "#3F4E65" }}>Штрихкод: <b>{product?.barcode}</b></Typography>
          </Stack>
          <Stack sx={{ marginTop: "30px" }}>
            <Typography sx={{ fontSize: "16px", color: "#111111", fontWeight: "600" }}>Описание:</Typography>
            <Typography sx={{ fontSize: "12px", color: "#3F4E65", maxWidth: "550px" }}>{product?.description}</Typography>
          </Stack>
        </Stack>
      </Box>
    </Container >
  );
}
