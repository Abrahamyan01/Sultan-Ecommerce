import {
  Box,
  Button,
  InputAdornment,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DownloadIcon from "@mui/icons-material/Download";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import whiteSultan from "./../../img/whiteSultan.png";
import visa from "../../img/visa.png";
import mastercard from "../../img/mastercard.png";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "5vw",
        background: "#3F4E65",
        padding: "70px 0px 100px 0px",
        "&": {
          "@media(max-width:1200px)": {
            gap: "1.5vw",
            padding: "50px 0px 80px 0px",
          },
          "@media(max-width:900px)": {
            flexWrap: "wrap",
          },
        },
      }}
    >
      <List>
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src={whiteSultan} alt="Sultan" />
          <Typography
            sx={{
              fontSize: "22px",
              color: "white",
              fontWeight: "700",
              letterSpacing: "4px",
            }}
          >
            СУЛТАН
          </Typography>
        </ListItem>
        <ListItem sx={{ fontSize: "16px", color: "white" }}>
          Компания «Султан» — снабжаем
          <br />
          розничные магазины товарами
          <br />
          "под ключ" в Кокчетаве и Акмолинской
          <br />
          области
        </ListItem>
        <ListItem sx={{ fontSize: "12px", color: "white" }}>
          Подпишись на скидки и акции
        </ListItem>
        <ListItem>
          <TextField
            placeholder="Введите ваш E-mail"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ArrowForwardIosIcon
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
            }}
          ></TextField>
        </ListItem>
      </List>
      <List>
        <ListItem
          sx={{
            fontSize: "20px",
            color: "white",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          Меню сайта:
        </ListItem>
        <ListItem sx={{ fontSize: "14px", color: "white" }}>
          О компании
        </ListItem>
        <ListItem sx={{ fontSize: "14px", color: "white" }}>
          Доставка и оплата
        </ListItem>
        <ListItem sx={{ fontSize: "14px", color: "white" }}>Возврат</ListItem>
        <ListItem sx={{ fontSize: "14px", color: "white" }}>Контакты</ListItem>
      </List>
      <List>
        <ListItem
          sx={{
            fontSize: "20px",
            color: "white",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          Категории:
        </ListItem>
        <ListItem sx={{ fontSize: "14px", color: "white" }}>
          Бытовая химия
        </ListItem>
        <ListItem sx={{ fontSize: "14px", color: "white" }}>
          Косметика и гигиена
        </ListItem>
        <ListItem sx={{ fontSize: "14px", color: "white" }}>
          Товары для дома
        </ListItem>
        <ListItem sx={{ fontSize: "14px", color: "white" }}>
          Товары для детей и мам
        </ListItem>
        <ListItem sx={{ fontSize: "14px", color: "white" }}>Посуда</ListItem>
      </List>
      <List>
        <ListItem
          sx={{
            fontSize: "20px",
            color: "white",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          Скачать прайс-лист:
        </ListItem>
        <ListItem>
          <Button
            endIcon={<DownloadIcon />}
            variant="contained"
            sx={{
              width: "200px",
              height: "60px",
              borderRadius: "80px",
              background: "#FFC85E",
              ":hover": {
                background: "#FFC85E",
              },
            }}
          >
            Прайс-лист
          </Button>
        </ListItem>
        <ListItem sx={{ fontSize: "14px", color: "white" }}>
          Связь в мессенджерах:
        </ListItem>
        <ListItem>
          <Box
            sx={{
              background: "#00E676",
              padding: "5px 8px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          >
            <WhatsAppIcon sx={{ fontSize: "30px", color: "white" }} />
          </Box>
          <Box
            sx={{
              background: "#40B3E0",
              padding: "5px 8px",
              borderRadius: "50%",
            }}
          >
            <TelegramIcon sx={{ fontSize: "30px", color: "white" }} />
          </Box>
        </ListItem>
      </List>
      <List>
        <ListItem
          sx={{
            fontSize: "20px",
            color: "white",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          Контакты:
        </ListItem>
        <ListItem sx={{ fontSize: "14px", color: "white", fontWeight: "500" }}>
          +7 (777) 490-00-91
        </ListItem>
        <ListItem sx={{ fontSize: "12px", color: "white", fontWeight: "300" }}>
          время работы: 9:00-20:00
          <br />
          Заказать звонок
        </ListItem>
        <ListItem sx={{ fontSize: "12px", color: "white", fontWeight: "300" }}>
          opt.sultan@mail.ru
          <br />
          На связи в любое время
        </ListItem>
        <ListItem>
          <Box
            sx={{
              width: "60px",
              height: "39px",
              padding: "5px",
              background: "white",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            <img src={visa} width={"100%"} alt="" />
          </Box>
          <Box
            sx={{
              width: "60px",
              height: "39px",
              padding: "5px",
              background: "#0F3560",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={mastercard} width={"100%"} alt="" />
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}
