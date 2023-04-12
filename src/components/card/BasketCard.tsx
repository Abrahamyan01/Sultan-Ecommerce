import { Box, Button, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";

import productsJson from "./../../data/products.json";
import { useEffect, useState } from "react";
import { IQnt } from "../../data/types";

export const BasketCard = ({
  id,
  selectedProst,
  setSelectedProds,
  addedProducts,
  setAddedProducts,
}: {
  id: string;
  selectedProst: {
    [key: string]: number;
  };
  setSelectedProds: (val: { [key: string]: number }) => void;
  addedProducts: {
    [key: string]: number;
  };
  setAddedProducts: (prod: { [key: string]: number }) => void;
}) => {
  console.log("selectedProst", addedProducts);

  const prod = productsJson.find((pro) => pro.barcode === Number(id));
  const [qnt, setQnt] = useState<number>(1);
  // const [prodStatus, setProdStatus] = useState<IQnt>({
  //   key: id,
  //   qntAndPrice: prod?.price || 0,
  // });
  const addProd = () => {
    setSelectedProds({ ...addedProducts, [id]: qnt * addedProducts[id] });
  };
  const onRemove = (id: string) => {
    const copy: { [key: string]: number } = {};
    for (const key in addedProducts) {
      if (key !== id) {
        copy[key] = addedProducts[key];
      }
    }
    setAddedProducts(copy);
    setSelectedProds(copy);
  };

  useEffect(() => {
    addProd();
  }, [qnt]);

  // useEffect(() => {
  //   if (prod?.price) {
  //     // setProdStatus({ key: id, qntAndPrice: prod.price * qnt });
  //     // getStatus(prodStatus);
  //   }
  // }, [qnt]);

  return (
    <Box
      sx={{
        borderBottom: "1px dashed rgba(63,78,101,0.3)",
        paddingBottom: "40px",
        paddingTop: "40px",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={2} sx={{
        "@media(max-width:1200px)": {
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        },
      }}>
        <img
          src={prod?.image}
          alt={prod?.manufacturer}
          style={{ width: "240px" }}
        />
        <Box sx={{ maxWidth: "450px" }}>
          <Typography sx={{
            fontSize: "12px", color: "#3F4E65", "@media(max-width:1200px)": {
              textAlign: "center"
            },
          }}>
            {prod?.size} {prod?.sizeType}
          </Typography>
          <Typography
            sx={{
              fontSize: "30px", fontWeight: "700", color: "#111111", "@media(max-width:1200px)": {
                textAlign: "center"
              },
            }}
          >
            {prod?.title}
          </Typography>
          <Typography sx={{
            fontSize: "12px", color: "#3F4E65", "@media(max-width:1200px)": {
              textAlign: "center"
            },
          }}>
            {prod?.description}
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderStyle: "dashed" }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Button
            sx={{
              height: "28px",
              fontSize: "20px",
              color: "#111111",
              background:
                "linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%)",
              borderRadius: "1000px",
            }}
            onClick={() => {
              if (qnt - 1 > 0) {
                setQnt((prevqnt) => prevqnt - 1);
              }
            }}
          >
            -
          </Button>
          <Typography sx={{ color: "#3F4E65", fontSize: "20px" }}>
            {qnt}
          </Typography>
          <Button
            sx={{
              height: "28px",
              fontSize: "20px",
              color: "#111111",
              background:
                "linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%)",
              borderRadius: "1000px",
            }}
            onClick={() => {
              setQnt((prevqnt) => prevqnt + 1);
            }}
          >
            +
          </Button>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderStyle: "dashed" }}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ fontSize: "30px", fontWeight: "700", color: "#111111" }}
          >
            {prod?.price}
          </Typography>
          <CurrencyRubleIcon sx={{ fontSize: "30px", fontWeight: "700" }} />
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderStyle: "dashed" }}
        />
        <Box
          sx={{
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#FFC85E",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          onClick={() => onRemove(id)}
        >
          <DeleteIcon sx={{ color: "white" }} />
        </Box>
      </Stack>
    </Box>
  );
};
