import { Container, Grid } from "@mui/material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import products from "../../data/products.json"
import { useNavigate, useOutletContext } from "react-router-dom";
import React from 'react';

export default function Promo() {
  // const { getProdsToAdd } = useOutletContext<any>();
  const navigate = useNavigate()
  return (
    <>
      <Box
        sx={{
          margin: "50px 0px 50px 40px"
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
          <span style={{ color: "#FFC85E", fontWeight: "800" }}>Акционные</span>{" "}
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
      <Container sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "25px",
        "@media(max-width:1200px)": {
          gridTemplateColumns: "1fr 1fr 1fr",
        },
        "@media(max-width:900px)": {
          gridTemplateColumns: "1fr 1fr",
        },
        "@media(max-width:600px)": {
          gridTemplateColumns: "1fr",
        },
      }}>
        {
          products.map((el, index) => {
            if (index < 8) {
              return <Box
                key={el.barcode}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{
                    maxWidth: 310,
                    maxHeight: "490",
                    position: "relative"
                  }}
                >
                  <Box sx={{
                    width: "96px",
                    height: "25px",
                    background: "#1FD85D",
                    color: "white",
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    borderRadius: "8px",
                    top: "5px",
                    left: "5px"
                  }}>
                    ПОПУЛЯРНОЕ
                  </Box>
                  <CardMedia
                    image={el.image}
                    width={"300px"}
                    height={"320px"}
                    component="img"
                    alt="Product"
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#3F4E65",
                        marginBottom: "10px",
                      }}
                    >
                      {el.size} {el.sizeType}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeigth: "700",
                        marginBottom: "25px",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate(`/products/${el.barcode}`)}
                    >
                      <b>{el.brand}</b> {el.title}
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "#3F4E65" }}>
                      Штрихкод: <b>{el.barcode}</b>
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "#3F4E65" }}>
                      Производитель: <b>{el.manufacturer}</b>
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "#3F4E65" }}>
                      Бренд: <b>{el.brand}</b>
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "3vw",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "800",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {el.price}{" "}
                      <CurrencyRubleIcon
                        sx={{
                          fontSize: "16px",
                        }}
                      />{" "}
                    </Typography>
                    <IconButton aria-label="add to favorites">
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
                          // getProdsToAdd(el.barcode, el.price);
                        }}
                      >
                        В КОРЗИНУ
                      </Button>
                    </IconButton>
                  </CardActions>
                </Card>
              </Box >
            }
          })
        }
      </Container >
    </>
  );
}
