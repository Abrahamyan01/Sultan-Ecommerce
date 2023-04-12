import { Box, List, ListItem, Stack, styled } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import MailIcon from "@mui/icons-material/Mail";
import Typography from "@mui/material/Typography";
import React from 'react';

const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: ["none"],
  },
}));

export default function NavBar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderBottom: "2px solid rgb(128,128,128,0.2)",
        padding: "5px 0px",
        "&": {
          "@media(max-width:600px)": {
            display: "none",
          },
        },
      }}
    >
      <Responsive>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2vw",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={"12px"}
            sx={{
              borderRight: "1px dashed rgb(128,128,128,0.2)",
              paddingRight: "30px",
            }}
          >
            <PlaceIcon sx={{ color: "gray" }} />
            <Stack>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { lg: "14px", md: "10px" },
                  fontWeight: "bold",
                }}
              >
                г. Кокчетав, ул. Ж. Ташенова 129Б
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "12px", md: "8px" },
                  color: "gray",
                }}
              >
                (Рынок Восточный)
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={"12px"}>
            <MailIcon sx={{ color: "gray" }} />
            <Stack>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { lg: "14px", md: "10px" },
                  fontWeight: "bold",
                }}
              >
                opt.sultan@mail.ru
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "12px", md: "8px" },
                  color: "gray",
                }}
              >
                На связи в любое время
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Responsive>
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          fontSize: "12px",
          color: "#3F4E65",
        }}
      >
        <ListItem sx={{ borderRight: "1px dashed rgb(128,128,128,0.2)" }}>
          О компании
        </ListItem>
        <ListItem
          sx={{
            borderRight: "1px dashed rgb(128,128,128,0.2)",
          }}
        >
          Доставка и оплата
        </ListItem>
        <ListItem sx={{ borderRight: "1px dashed rgb(128,128,128,0.2)" }}>
          Возврат
        </ListItem>
        <ListItem>Контакты</ListItem>
      </List>
    </Box>
  );
}
