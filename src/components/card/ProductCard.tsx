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
import { IProduct } from "../../data/types";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({
  product,
  getProdsToAdd,
}: {
  product: IProduct;
  getProdsToAdd: (id: number, price: number) => void;
}) => {
  const navigate = useNavigate();
  return (
    <Box
      key={product.barcode}
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
        }}
      >
        <CardMedia
          image={product.image}
          width={"280px"}
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
            {product.size} {product.sizeType}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeigth: "700",
              marginBottom: "25px",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/products/${product.barcode}`)}
          >
            <b>{product.brand}</b> {product.title}
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#3F4E65" }}>
            Штрихкод: <b>{product.barcode}</b>
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#3F4E65" }}>
            Производитель: <b>{product.manufacturer}</b>
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#3F4E65" }}>
            Бренд: <b>{product.brand}</b>
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
            {product.price}{" "}
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
                getProdsToAdd(product.barcode, product.price);
              }}
            >
              В КОРЗИНУ
            </Button>
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};
