import {
  Box,
  Button,
  InputAdornment,
  Link,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import NavBar from "../navbar/NavBar";
import SearchIcon from "@mui/icons-material/Search";
import WidgetsIcon from "@mui/icons-material/Widgets";
import DownloadIcon from "@mui/icons-material/Download";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PhoneIcon from '@mui/icons-material/Phone';
import MenuIcon from "@mui/icons-material/Menu";
import PlaceIcon from "@mui/icons-material/Place";
import MailIcon from "@mui/icons-material/Mail";
import sultan from "./../../img/sultan.png";
import girl from "./../../img/girl.png";
import { styled } from "@mui/material";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from 'react';

const HeaderPart = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "row-reverse",
    gap: "16px",
  },
}));

export default function Header({
  addedProducts,
}: {
  addedProducts: { [key: string]: number };
}) {
  const [open, setOpen] = useState<boolean>(false)

  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        justifyContent={"center"}
        sx={{
          marginTop: "10px",
          marginBottom: "10px",
          "&": {
            "@media(max-width:600px)": {
              justifyContent: "space-evenly",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "none",
            "&": {
              "@media(max-width:600px)": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "1000px",
                background: " #FFC85E",
                width: "40px",
                height: "40px",
                marginRight: "20px",
              },
            },
          }}
          onClick={() => setOpen(!open)}
        >
          <MenuIcon sx={{ color: "white" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <img src={sultan} alt="" />
          <Typography
            variant="h5"
            sx={{
              textTransform: "uppercase",
              color: "#3F4E65",
              fontWeight: "700",
              fontSize: { lg: "25px", md: "15px", sm: "15px", xs: "12px" },
              letterSpacing: "4px",
              cursor: "pointer"
            }}
            onClick={() => navigate("/")}
          >
            султан
          </Typography>
        </Box>
        <Button
          endIcon={<WidgetsIcon />}
          variant="contained"
          sx={{
            width: "190px",
            height: "60px",
            fontSize: { lg: "14px", md: "9px", sm: "9px" },
            borderRadius: "80px",
            background: "#FFC85E",
            ":hover": {
              background: "#FFC85E",
            },
            "&": {
              "@media(max-width:600px)": {
                display: "none",
              },
            },
          }}
          onClick={() => navigate('/catalog')}
        >
          Каталог
        </Button>
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
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderRadius: `36px`,
                border: "none",
              },
            },
            "&": {
              "@media(max-width:750px)": {
                display: "none",
              },
            },
          }}
        ></TextField>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
              minWidth: { lg: "140px", md: "100px" },
              "&": {
                "@media(max-width:900px)": {
                  display: "none",
                },
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: { lg: "14px", md: "10px" } }}
            >
              +7 (777) 490-00-91
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { lg: "10px", md: "8px" } }}
            >
              время работы: 9:00-20:00
            </Typography>
            <Link sx={{ fontSize: { lg: "10px", md: "8px" } }}>
              Заказать звонок
            </Link>
          </Box>
          <Box
            sx={{
              borderRight: "1px dashed rgb(128,128,128,0.2)",
              paddingRight: "20px",
              position: "relative",
              "&": {
                "@media(max-width:900px)": {
                  display: "none",
                },
              },
            }}
          >
            <img src={girl} alt="Manager" style={{ height: "80px" }} />
            <Box
              sx={{
                position: "absolute",
                background: "#1FD85D",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                right: "15px",
                top: "25px",
                border: "2px solid #F0F6FA",
              }}
            ></Box>
          </Box>
        </Stack>
        <Button
          endIcon={<DownloadIcon />}
          variant="contained"
          sx={{
            width: "190px",
            height: "60px",
            fontSize: { lg: "14px", md: "9px", sm: "9px" },
            borderRadius: "80px",
            background: "#FFC85E",
            ":hover": {
              background: "#FFC85E",
            },
            "&": {
              "@media(max-width:600px)": {
                display: "none",
              },
            },
          }}
        >
          Прайс-лист
        </Button>
        <Box
          onClick={() => navigate("/basket")}
          sx={{
            display: "flex",
            alignItems: "center",
            borderLeft: "1px dashed rgb(128,128,128,0.2)",
            paddingLeft: "20px",
            gap: "20px",
            "&": {
              "@media(max-width:600px)": {
                border: "none",
                paddingLeft: "0",
              },
            },
          }}
        >
          <Stack position={"relative"} sx={{ cursor: "pointer" }}>
            <AddShoppingCartIcon
              sx={{
                fontSize: "30px",
              }}
            />
            <Box
              sx={{
                color: "white",
                background: "#FFC85E",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                right: "-10px",
                top: "-5px",
              }}
            >
              {Object.keys(addedProducts).length}
            </Box>
          </Stack>
          <Stack
            direction={"column"}
            sx={{
              "&": {
                "@media(max-width:600px)": {
                  display: "none",
                },
              },
            }}
          >
            <Typography
              sx={{
                color: "#3F4E65",
                fontSize: { lg: "12px", md: "10px", sm: "9px" },
              }}
            >
              Корзина
            </Typography>
            <Typography
              sx={{
                color: "#111111",
                fontSize: { lg: "10px", md: "8px", sm: "6px" },
                fontWeight: "600",
              }}
            >
              12 478 ₸{" "}
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Box
        sx={{
          display: "none",
          borderTop: "1px solid rgba(63,78,101,0.1)",
          paddingTop: "10px",
          paddingBottom: "10px",
          "&": {
            "@media(max-width:600px)": {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            },
          },
        }}
      >
        <Button
          startIcon={<WidgetsIcon />}
          variant="text"
          sx={{
            color: "#3F4E65",
            textTransform: "capitalize",
            fontSize: "12px",
          }}
        >
          Каталог
        </Button>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderStyle: "dashed" }}
        />
        <Button
          startIcon={<SearchIcon />}
          variant="text"
          sx={{
            color: "#3F4E65",
            textTransform: "capitalize",
            fontSize: "12px",
          }}
        >
          Поиск
        </Button>
      </Box>
      {open &&
        <Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "15px",
            paddingBottom: "25px",
            borderBottom: "1px dashed rgba(63,78,101,0.2)",
            marginBottom: "25px"
          }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"12px"}
              sx={{
                marginTop: "10px"
              }}
            >
              <PlaceIcon sx={{ color: "#3F4E65" }} />
              <Stack>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  г. Кокчетав, ул. Ж. Ташенова 129Б
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#3F4E65",
                  }}
                >
                  (Рынок Восточный)
                </Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={"12px"}>
              <MailIcon sx={{ color: "#3F4E65" }} />
              <Stack>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  opt.sultan@mail.ru
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#3F4E65",
                  }}
                >
                  На связи в любое время
                </Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={"12px"}>
              <PhoneIcon sx={{ color: "#3F4E65" }} />
              <Stack>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  Отдел продаж
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#3F4E65",
                  }}
                >
                  +7 (777) 490-00-91 <br />
                  время работы: 9:00-20:00
                </Typography>
              </Stack>
            </Stack>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "10px"
            }}>
              <Box sx={{
                width: "30px",
                height: "30px",
                background: "#FFC85E",
                borderRadius: "1000px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}><PhoneIcon sx={{ color: "white", fontSize: "12px" }} /></Box>
              <Typography sx={{
                color: "#3F4E65",
                fontSize: "10px",
                textDecoration: "underline"
              }}>Заказать звонок</Typography>
            </Box>
          </Box>
          <List>
            <ListItem
              sx={{
                fontSize: "20px",
                color: "#3F4E65",
                fontWeight: "600",
                marginBottom: "25px",
              }}
            >
              Меню сайта:
            </ListItem>
            <ListItem sx={{ fontSize: "14px", color: "#3F4E65" }}>
              О компании
            </ListItem>
            <ListItem sx={{ fontSize: "14px", color: "#3F4E65" }}>
              Доставка и оплата
            </ListItem>
            <ListItem sx={{ fontSize: "14px", color: "#3F4E65" }}>Возврат</ListItem>
            <ListItem sx={{ fontSize: "14px", color: "#3F4E65" }}>Контакты</ListItem>
          </List>
          <Button
            endIcon={<DownloadIcon />}
            variant="contained"
            sx={{
              width: "290px",
              height: "70px",
              fontSize: "14px",
              fontWeight: "700",
              borderRadius: "80px",
              background: "#FFC85E",
              marginY: "25px",
              ":hover": {
                background: "#FFC85E",
              },
            }}
          >
            Прайс-лист
          </Button>
        </Box >}
    </>
  );
}
