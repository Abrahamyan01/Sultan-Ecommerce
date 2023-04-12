import { IProduct } from "./../../data/types";
import { IFilterProduct } from "./../../data/types";
import { ISortProduct } from "./../../data/types";
import { IPriceSearchProduct } from "./../../data/types";
import productsJson from "./../../data/products.json";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormGroup,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import Container from "@mui/material/Container";
import Products from "../../data/Products";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { ManufacturerCheckBox } from "../../components/catalogpart/ManufacturerCheckBox";
import { BrandCheckBox } from "../../components/catalogpart/BrandCheckBox";
import { useOutletContext } from "react-router-dom";
import productJson from "../../data/products.json";

export default function Catalog() {
  const [filter, setFilter] = useState<IFilterProduct>({});
  const [sort, setSort] = useState<ISortProduct>({});
  const { getProdsToAdd } = useOutletContext<any>();
  const [priceSearch, setPriceSearch] = useState<IPriceSearchProduct>({
    min: 0,
    max: 10000,
    manufacturer: [],
    brand: [],
  });
  const [products, setProducts] = useState<IProduct[]>(productsJson);
  const [selectedGroup, setSelectedGroup] = useState<IProduct[] | null>(null);
  const [checkedItems, setCheckedItems] = useState<string[] | []>([]);
  const [checkedManufactures, setCheckedManufactures] = useState<string[] | []>(
    []
  );
  const [manufacturer, setManufacturer] = useState(
    products
      .map((el) => el.manufacturer)
      .filter((el, index, arr) => arr.indexOf(el) === index)
  );
  const [brand, setBrand] = useState(
    products
      .map((el) => el.brand)
      .filter((el, index, arr) => arr.indexOf(el) === index)
  );
  const [manufactText, setManufactText] = useState("");
  const [brandText, setBrandText] = useState("");

  const onCheck = (checkedItems: string[]): void => {
    setPriceSearch({ ...priceSearch, manufacturer: checkedItems });
  };

  const onCheckBrand = (checkedItems: string[]): void => {
    setPriceSearch({ ...priceSearch, brand: checkedItems });
  };

  const allManufacturers = products
    .map((el) => el.manufacturer)
    .filter((el, index, arr) => arr.indexOf(el) === index);

  const allBrands = products
    .map((el) => el.brand)
    .filter((el, index, arr) => arr.indexOf(el) === index);

  const onFilterChange = (
    priceSearch: IPriceSearchProduct,
    products: IProduct[]
  ) => {
    const byPrice = products.filter((el) => {
      if (priceSearch.min && priceSearch.max) {
        return el.price >= priceSearch.min && el.price <= priceSearch.max;
      } else if (priceSearch.max) {
        return el.price >= 0 && el.price <= priceSearch.max;
      } else {
        return el;
      }
    });

    const byManufacturer = (() => {
      let filtered: IProduct[] = [];
      byPrice.filter((el) => {
        priceSearch.manufacturer?.forEach((man) => {
          if (el.manufacturer == man) {
            filtered.push(el);
          }
        });
      });
      return filtered;
    })();

    const byBrand = (() => {
      let filtered: IProduct[] = [];
      byPrice.filter((el) => {
        priceSearch.brand?.forEach((br) => {
          if (el.brand == br) {
            filtered.push(el);
          }
        });
      });
      return filtered;
    })();

    const afterAll = Array.from(new Set([...byManufacturer, ...byBrand]));
    setProducts(afterAll);
  };

  useEffect(() => {
    (() => {
      if (filter.for) {
        const activateProductGroup = productsJson.filter(
          (el: IFilterProduct) => el.for === filter?.for
        );
        setProducts(activateProductGroup);
        setSelectedGroup(activateProductGroup);
      }
    })();
  }, [filter]);

  useEffect(() => {
    setManufacturer(
      allManufacturers.filter((el) => el.toLowerCase().includes(manufactText))
    );
    setBrand(allBrands.filter((el) => el.toLowerCase().includes(brandText)));
  }, [manufactText, brandText]);

  const makeSort = (value: string) => {
    if (value === "По возрастанию цены") {
      const sortedState = []
        .concat(products as any)
        .sort(
          (a: { price: number }, b: { price: number }) => a.price - b.price
        );
      setProducts(sortedState);
    } else if (value === "По убыванию цены") {
      const sortedState = []
        .concat(products as any)
        .sort(
          (a: { price: number }, b: { price: number }) => b.price - a.price
        );
      setProducts(sortedState);
    } else if (value === "По убыванию названия") {
      const sortedState = []
        .concat(products as any)
        .sort((a: { title: string }, b: { title: string }) =>
          a.title > b.title ? 1 : b.title > a.title ? -1 : 0
        );
      setProducts(sortedState);
    } else if (value === "По возрастанию названия") {
      const sortedState = []
        .concat(products as any)
        .sort((a: { title: string }, b: { title: string }) =>
          b.title > a.title ? 1 : a.title > b.title ? -1 : 0
        );
      setProducts(sortedState);
    }
  };
  
  return (
    <Container>
      <Box sx={{ marginTop: "45px" }}>
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
            Косметика и гигиена
          </Typography>
        </Stack>
        <Stack
          sx={{ marginTop: "50px" }}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            sx={{
              fontSize: { lg: "40px", md: "34px", sm: "20px", xs: "16px" },
              color: "#111111",
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Косметика и гигиена
          </Typography>
          <Box sx={{
            display: "flex", "@media(max-width:600px)": {
              flexWrap: "wrap"
            },
          }}>
            <Typography
              sx={{
                fontSize: "16px", fontWeight: "500", color: "#111111",
                "@media(max-width:600px)": {
                  fontSize: "12px"
                },
              }}
            >
              Сортировка:
            </Typography>
            <select
              name="sort"
              style={{ border: "none", width: "120px" }}
              onChange={(e) => makeSort(e.target.value)}
            >
              <option value="Название" selected disabled>
                Название
              </option>
              <option value="По убыванию цены">По убыванию цены</option>
              <option value="По возрастанию цены">По возрастанию цены</option>
              <option value="По убыванию названия">По убыванию названия</option>
              <option value="По возрастанию названия">
                По возрастанию названия
              </option>
            </select>
          </Box>
        </Stack>
        <Stack direction={"row"} sx={{ marginTop: "25px" }} flexWrap={"wrap"}>
          <Box
            sx={{
              width: "100px",
              height: "70px",
              background: "white",
              boxShadow: " 0px 15px 70px -11px rgba(43, 28, 1, 0.04)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ":hover": {
                cursor: "pointer",
                background: "#FFC85E",
                transition: "all 0.3s ease-in-out",
              },
            }}
            onClick={() => {
              setProducts(productsJson);
              setCheckedItems([]);
              setCheckedManufactures([]);
            }}
          >
            <Typography
              sx={{
                color: "#3F4E65",
                fontSize: "14px",
                textAlign: "center",
                padding: "0px 10px",
              }}
            >
              Всё
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100px",
              height: "70px",
              background: "white",
              boxShadow: " 0px 15px 70px -11px rgba(43, 28, 1, 0.04)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ":hover": {
                cursor: "pointer",
                background: "#FFC85E",
                transition: "all 0.3s ease-in-out",
              },
            }}
            onClick={() => {
              setFilter({ ...filter, for: "Уход за телом" });
              setCheckedItems([]);
              setCheckedManufactures([]);
            }}
          >
            <Typography
              sx={{
                color: "#3F4E65",
                fontSize: "14px",
                textAlign: "center",
                padding: "0px 10px",
              }}
            >
              Уход за телом
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100px",
              height: "70px",
              background: "white",
              boxShadow: " 0px 15px 70px -11px rgba(43, 28, 1, 0.04)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ":hover": {
                cursor: "pointer",
                background: "#FFC85E",
                transition: "all 0.3s ease-in-out",
              },
            }}
            onClick={() => {
              setFilter({ ...filter, for: "Уход за руками" });
              setCheckedItems([]);
              setCheckedManufactures([]);
            }}
          >
            <Typography
              sx={{
                color: "#3F4E65",
                fontSize: "14px",
                textAlign: "center",
                padding: "0px 10px",
              }}
            >
              Уход за руками
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100px",
              height: "70px",
              background: "white",
              boxShadow: " 0px 15px 70px -11px rgba(43, 28, 1, 0.04)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ":hover": {
                cursor: "pointer",
                background: "#FFC85E",
                transition: "all 0.3s ease-in-out",
              },
            }}
            onClick={() => {
              setFilter({ ...filter, for: "Уход за лицом" });
              setCheckedItems([]);
              setCheckedManufactures([]);
            }}
          >
            <Typography
              sx={{
                color: "#3F4E65",
                fontSize: "14px",
                textAlign: "center",
                padding: "0px 10px",
              }}
            >
              Уход за лицом
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100px",
              height: "70px",
              background: "white",
              boxShadow: " 0px 15px 70px -11px rgba(43, 28, 1, 0.04)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#3F4E65",
                fontSize: "14px",
                textAlign: "center",
                padding: "0px 10px",
              }}
            >
              Уход за ногами
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100px",
              height: "70px",
              background: "white",
              boxShadow: " 0px 15px 70px -11px rgba(43, 28, 1, 0.04)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#3F4E65",
                fontSize: "14px",
                textAlign: "center",
                padding: "0px 10px",
              }}
            >
              Уход за волосами
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100px",
              height: "70px",
              background: "white",
              boxShadow: " 0px 15px 70px -11px rgba(43, 28, 1, 0.04)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#3F4E65",
                fontSize: "14px",
                textAlign: "center",
                padding: "0px 10px",
              }}
            >
              Средства для загара
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100px",
              height: "70px",
              background: "white",
              boxShadow: " 0px 15px 70px -11px rgba(43, 28, 1, 0.04)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#3F4E65",
                fontSize: "14px",
                textAlign: "center",
                padding: "0px 10px",
              }}
            >
              Средства для бритья
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100px",
              height: "70px",
              background: "white",
              boxShadow: " 0px 15px 70px -11px rgba(43, 28, 1, 0.04)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#3F4E65",
                fontSize: "14px",
                textAlign: "center",
                padding: "0px 10px",
              }}
            >
              Подарочные наборы
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100px",
              height: "70px",
              background: "white",
              boxShadow: " 0px 15px 70px -11px rgba(43, 28, 1, 0.04)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#3F4E65",
                fontSize: "14px",
                textAlign: "center",
                padding: "0px 10px",
              }}
            >
              Гигиеническая продукция
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100px",
              height: "70px",
              background: "white",
              boxShadow: " 0px 15px 70px -11px rgba(43, 28, 1, 0.04)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#3F4E65",
                fontSize: "14px",
                textAlign: "center",
                padding: "0px 10px",
              }}
            >
              Бумажная продукция
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "2vw",
          "@media(max-width:1000px)": {
            flexWrap: "wrap"
          },
        }}
      >
        <Box sx={{
          marginTop: "100px",
          "@media(max-width:1000px)": {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "15vw"
          },
          "@media(max-width:600px)": {
            flexWrap: "wrap"
          },
        }}>
          <Box>
            <Stack sx={{
              marginBottom: "30px", "@media(max-width:1000px)": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            }}>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "500", color: "#111111" }}
              >
                ПОДБОР ПО ПАРАМЕТРАМ
              </Typography>
              <Typography
                sx={{
                  marginBottom: "15px",
                  fontSize: "14px",
                  color: "#3F4E65",
                  marginTop: "10px",
                }}
              >
                Цена{" "}
                <CurrencyRubleIcon
                  sx={{
                    fontSize: "15px",
                    color: "#111111",
                    verticalAlign: "middle",
                  }}
                />
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <TextField
                  placeholder="0"
                  onChange={(e) => {
                    setPriceSearch({
                      ...priceSearch,
                      min: Number(e.target.value),
                    });
                  }}
                  sx={{
                    background:
                      "linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%)",
                    borderRadius: "36px",
                    width: "105px",
                    height: "25px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: `36px`,
                        border: "none",
                      },
                    },
                    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                      padding: "2px 5px 0 30px",
                    },
                  }}
                ></TextField>
                <Typography>-</Typography>
                <TextField
                  placeholder="10000"
                  onChange={(e) => {
                    setPriceSearch({
                      ...priceSearch,
                      max: Number(e.target.value),
                    });
                  }}
                  sx={{
                    background:
                      "linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%)",
                    borderRadius: "36px",
                    width: "105px",
                    height: "25px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: `36px`,
                        border: "none",
                      },
                    },
                    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                      padding: "2px 5px 0 30px",
                    },
                  }}
                ></TextField>
              </Box>
            </Stack >
            <Stack
              sx={{
                borderBottom: "1px dashed #3F4E65", paddingBottom: "15px", "@media(max-width:1000px)": {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#111111",
                  fontWeight: "500",
                }}
              >
                Производитель
              </Typography>
              <TextField
                placeholder="Поиск..."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon
                        sx={{
                          color: "white",
                          background: "#FFC85E",
                          borderRadius: "50%",
                          padding: "5px",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  background: "#EDEDED",
                  borderRadius: "36px",
                  marginTop: "15px",
                  width: "240px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: `36px`,
                      border: "none",
                    },
                  },
                }}
                value={manufactText}
                onChange={(e) => setManufactText(e.target.value)}
              ></TextField>
              <FormControl
                component="fieldset"
                sx={{ maxWidth: "240px", marginTop: "15px" }}
              >
                <FormGroup aria-label="position">
                  <ManufacturerCheckBox
                    onCheck={onCheck}
                    checkedItems={checkedManufactures}
                    setCheckedItems={setCheckedManufactures}
                    manufacturer={manufacturer}
                  />
                </FormGroup>
              </FormControl>
            </Stack>
          </Box>
          <Stack sx={{
            marginTop: "20px", "@media(max-width:1000px)": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "0"
            },
          }}>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#111111",
                fontWeight: "500",
              }}
            >
              Бренд
            </Typography>
            <TextField
              placeholder="Поиск..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon
                      sx={{
                        color: "white",
                        background: "#FFC85E",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                background: "#EDEDED",
                borderRadius: "36px",
                marginTop: "15px",
                width: "240px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: `36px`,
                    border: "none",
                  },
                },
              }}
              value={brandText}
              onChange={(e) => setBrandText(e.target.value)}
            ></TextField>
            <FormControl
              component="fieldset"
              sx={{ maxWidth: "240px", marginTop: "15px" }}
            >
              <FormGroup aria-label="position">
                <BrandCheckBox
                  onCheckBrand={onCheckBrand}
                  checkedItems={checkedItems}
                  setCheckedItems={setCheckedItems}
                  brand={brand}
                />
              </FormGroup>
            </FormControl>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "25px",
              }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  onFilterChange(priceSearch, selectedGroup || productsJson);
                }}
                sx={{
                  width: "170px",
                  height: "60px",
                  borderRadius: "80px",
                  background: "#FFC85E",
                  ":hover": {
                    background: "#FFC85E",
                  },
                }}
              >
                Показать
              </Button>
              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FFC85E",
                  borderRadius: "50%",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={() => {
                  setCheckedItems([]);
                  setCheckedManufactures([]);
                }}
              >
                <DeleteIcon sx={{ color: "white" }} />
              </Box>
            </Box>
          </Stack>
        </Box>
        <Products products={products} getProdsToAdd={getProdsToAdd} />
      </Box>
    </Container>
  );
}
