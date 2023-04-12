import { Box, Pagination } from "@mui/material";
import { IProduct } from "./types";
import { ProductCard } from "../components/card/ProductCard";

export default function Products({
  products,
  getProdsToAdd,
}: {
  products: IProduct[];
  getProdsToAdd: (id: number, price: number) => void;
}) {
  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "320px 320px 320px",
          gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
          justifyContent: "center",
          rowGap: "20px",
          columnGap: "10px",
          margin: "100px 0",
          "@media(max-width:1324px)": {
            gridTemplateColumns: "320px 320px",
          },
          "@media(max-width:696px)": {
            gridTemplateColumns: "320px",
          },
        }}
      >
        {products.map((product) => {
          return (
            <ProductCard product={product} getProdsToAdd={getProdsToAdd} />
          );
        })}
      </Box>
      <Box sx={{
        marginBottom: "20px"
      }}>
        <Pagination
          count={Math.floor(products.length / 10)}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Box>
  );
}
