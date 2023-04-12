import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import { BasketCard } from "../../components/card/BasketCard";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Basket() {
  const { setAddedProducts, addedProducts, } = useOutletContext<any>();

  const [selectedProst, setSelectedProds] = useState<{ [key: string]: number }>(
    addedProducts
  );
  const navigate = useNavigate()  
  return (
    <Container>
      <Box
        sx={{
          borderBottom: "1px dashed rgba(63,78,101,0.3)",
          paddingBottom: "50px",
          marginTop: "20px"
        }}
      >
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
            sx={{
              color: "#3F4E65",
              fontSize: "14px",
              fontWeight: "300",
              opacity: "0.5",
            }}
          >
            Корзина
          </Typography>
        </Stack>
        <Typography
          sx={{ color: "#111111", fontSize: "40px", fontWeight: "500" }}
        >
          Корзина
        </Typography>
      </Box>
      <Box sx={{
        "@media(max-width:1200px)": {
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "8vw"
        },
        "@media(max-width:600px)": {
          flexWrap: "wrap"
        },
      }}>
        <>
          {Object.keys(addedProducts).map((item) => {
            return (
              <BasketCard
                id={item}
                key={item}
                selectedProst={selectedProst}
                setSelectedProds={setSelectedProds}
                addedProducts={addedProducts}
                setAddedProducts={setAddedProducts}
              />
            );
          })}
        </>
      </Box>
      <Box
        sx={{
          marginTop: "50px",
          marginBottom: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "190px",
            height: "60px",
            color: "white",
            borderRadius: "80px",
            background: "#FFC85E",
            ":hover": {
              background: "#FFC85E",
            },
          }}
          onClick={() => navigate('/checkout')}
        >
          Оформить заказ
        </Button>
        <Typography
          sx={{ color: "#111111", fontSize: "30px", fontWeight: "700" }}
        >
          {(Object.values(selectedProst).length > 0 &&
            Object.values(selectedProst)?.reduce((acc, cur) => acc + cur)) ||
            0}
          <CurrencyRubleIcon />
        </Typography>
      </Box>
    </Container>
  );
}
