import { Box, Container, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import mapbig from "./../../img/mapbig.png";

export default function Map() {
  return (
    <Container
      sx={{
        marginBottom: "100px",
      }}
    >
      <Box
        sx={{
          background: `url(${mapbig})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          minHeight: "600px",
          paddingTop: "30px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "20px",
            padding: "40px 0px 50px 50px",
            borderRadius: "8px",
            width: "580px",
            background: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(15px)",
            "@media(max-width:900px)": {
              width: "400px",
            },
            "@media(max-width:550px)": {
              width: "200px",
              padding: "20px 10px 20px 10px",
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#3F4E65",
              marginBottom: "15px",
              "@media(max-width:550px)": {
                fontSize: "16px",
              },
            }}
          >
            Контакты
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#3F4E65",
              marginBottom: "25px",
              "@media(max-width:550px)": {
                fontSize: "12px",
              },
            }}
          >
            Оптовый поставщик «Султан»
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "30px",
              "@media(max-width:900px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingBottom: "15px",
                borderBottom: "1px dashed rgba(63,78,101,0.2)",
                gap: "10px",
              }}
            >
              <PlaceIcon sx={{ color: "#3F4E65" }} />
              <Typography
                sx={{
                  color: "#3F4E65",
                  "@media(max-width:550px)": {
                    fontSize: "10px",
                  },
                }}
              >
                <b>Адрес:</b> <br />
                г. Кокчетав, ул. Ж. Ташенова 129Б
                <br />
                (Рынок Восточный)
              </Typography>
            </Box>
            <Box
              sx={{
                paddingBottom: "15px",
                borderBottom: "1px dashed rgba(63,78,101,0.2)",
              }}
            >
              <Typography
                sx={{
                  color: "#3F4E65",
                  "@media(max-width:550px)": {
                    fontSize: "10px",
                  },
                }}
              >
                <b>Отдел продаж:</b>
                <br />
                +7 (777) 490-00-91
                <br />
                opt.sultan@mail.ru
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "25px",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <InsertDriveFileIcon sx={{ color: "#3F4E65" }} />
            <Typography
              sx={{
                color: "#3F4E65",
                "@media(max-width:550px)": {
                  fontSize: "10px",
                },
              }}
            >
              <b>Данные налогоплательщика:</b>
              <br />
              ИП Катран Д.С.
              <br />
              ИИН: 860113450858
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
