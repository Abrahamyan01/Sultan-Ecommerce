import { Box, Button, Container, Divider, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';



export default function Checkout() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const navigate = useNavigate()
    return (
        <>
            <Container sx={{ position: "relative" }}>
                <Box >
                    <Stack direction={"row"} gap={"2vw"} sx={{ marginBottom: "50px" }}>
                        <Typography sx={{ color: "#3F4E65", fontSize: "14px", fontWeight: "300" }}>Главная</Typography>
                        <Divider orientation="vertical" flexItem sx={{ borderStyle: "dashed" }} />
                        <Typography sx={{ color: "#3F4E65", fontSize: "14px", fontWeight: "300" }}>Корзина</Typography>
                        <Divider orientation="vertical" flexItem sx={{ borderStyle: "dashed" }} />
                        <Typography sx={{ color: "#3F4E65", fontSize: "14px", fontWeight: "300", opacity: "0.5" }}>Оформление заказа</Typography>
                    </Stack>
                    <Typography sx={{ color: "#111111", fontSize: "40px", fontWeight: "500" }}>Оформление заказа</Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    marginTop: "60px",
                    marginBottom: "100px"
                }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        gap: "16vw",
                        "@media(max-width:800px)": {
                            flexWrap: "wrap",
                            gap: "5vh"
                        },
                    }}>
                        <Stack>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "15px",
                                marginBottom: "30px"
                            }}>
                                <Box sx={{
                                    background: "linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%)",
                                    borderRadius: "50%",
                                    width: "35px",
                                    height: "35px",
                                    color: "#3F4E65",
                                    fontSize: "14px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>1</Box>
                                <Typography sx={{
                                    fontSize: "16px",
                                    color: "#111111",
                                    textTransform: "uppercase",
                                    fontWeight: "500"
                                }}>Контактные данные</Typography>
                            </Box>
                            <Typography sx={{
                                fontSize: "16px",
                                color: "#111111",
                                fontWeight: "500",
                                marginBottom: "10px"
                            }}>Имя*</Typography>
                            <TextField
                                placeholder="Введите ваше имя"
                                sx={{
                                    background: "#EDEDED",
                                    borderRadius: "36px",
                                    width: "290px",
                                    paddingLeft: "10px",
                                    marginBottom: "15px",
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderRadius: `36px`,
                                            border: "none",
                                        },
                                    },
                                    "& input::placeholder": {
                                        fontSize: "12px"
                                    }
                                }}
                            ></TextField>
                            <Typography sx={{
                                fontSize: "16px",
                                color: "#111111",
                                fontWeight: "500",
                                marginBottom: "10px"
                            }}>Телефон*</Typography>
                            <TextField
                                placeholder="Введите ваш телефон"
                                sx={{
                                    background: "#EDEDED",
                                    borderRadius: "36px",
                                    width: "290px",
                                    paddingLeft: "10px",
                                    marginBottom: "15px",
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderRadius: `36px`,
                                            border: "none",
                                        },
                                    },
                                    "& input::placeholder": {
                                        fontSize: "12px"
                                    }
                                }}
                            ></TextField>
                            <Typography sx={{
                                fontSize: "16px",
                                color: "#111111",
                                fontWeight: "500",
                                marginBottom: "10px"
                            }}>E-mail*</Typography>
                            <TextField
                                placeholder="Введите ваш E-mail"
                                sx={{
                                    background: "#EDEDED",
                                    borderRadius: "36px",
                                    width: "290px",
                                    paddingLeft: "10px",
                                    marginBottom: "15px",
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderRadius: `36px`,
                                            border: "none",
                                        },
                                    },
                                    "& input::placeholder": {
                                        fontSize: "12px"
                                    }
                                }}
                            ></TextField>
                            <Typography sx={{
                                fontSize: "16px",
                                color: "#111111",
                                fontWeight: "500",
                                marginBottom: "10px"
                            }}>Название организации</Typography>
                            <TextField
                                placeholder="Введите название организации"
                                sx={{
                                    background: "#EDEDED",
                                    borderRadius: "36px",
                                    width: "290px",
                                    paddingLeft: "10px",
                                    marginBottom: "15px",
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderRadius: `36px`,
                                            border: "none",
                                        },
                                    },
                                    "& input::placeholder": {
                                        fontSize: "12px"
                                    }
                                }}
                            ></TextField>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "15px",
                                marginBottom: "30px",
                                marginTop: "45px"
                            }}>
                                <Box sx={{
                                    background: "linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%)",
                                    borderRadius: "50%",
                                    width: "35px",
                                    height: "35px",
                                    color: "#3F4E65",
                                    fontSize: "14px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>2</Box>
                                <Typography sx={{
                                    fontSize: "16px",
                                    color: "#111111",
                                    textTransform: "uppercase",
                                    fontWeight: "500"
                                }}>Контактные данные</Typography>
                            </Box>
                            <Typography sx={{
                                fontSize: "16px",
                                color: "#111111",
                                fontWeight: "500",
                                marginBottom: "10px"
                            }}>Город</Typography>
                            <Select
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    background: "#EDEDED",
                                    borderRadius: "36px",
                                    border: "none",
                                    width: "290px",
                                    paddingLeft: "10px",
                                    marginBottom: "15px",
                                }}
                            >
                                <MenuItem disabled value="">
                                    <em>Выберите ваш город</em>
                                </MenuItem>
                                <MenuItem value={"Москва"}>Москва</MenuItem>
                                <MenuItem value={"Екатеринбург"}>Екатеринбург</MenuItem>
                                <MenuItem value={"Санкт-Петербург"}>Санкт-Петербург</MenuItem>
                                <MenuItem value={"Краснодар"}>Краснодар</MenuItem>
                                <MenuItem value={"Волгоград"}>Волгоград</MenuItem>
                                <MenuItem value={"Ростов-на-Дону"}>Ростов-на-Дону</MenuItem>
                            </Select>
                            <Typography sx={{
                                fontSize: "16px",
                                color: "#111111",
                                fontWeight: "500",
                                marginBottom: "10px"
                            }}>Адрес</Typography>
                            <TextField
                                placeholder="Введите адрес доставки"
                                sx={{
                                    background: "#EDEDED",
                                    borderRadius: "36px",
                                    width: "290px",
                                    paddingLeft: "10px",
                                    marginBottom: "15px",
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderRadius: `36px`,
                                            border: "none",
                                        },
                                    },
                                    "& input::placeholder": {
                                        fontSize: "12px"
                                    }
                                }}
                            ></TextField>
                            <Button
                                variant="contained"
                                sx={{
                                    width: "290px",
                                    height: "60px",
                                    color: "white",
                                    borderRadius: "80px",
                                    marginTop: "30px",
                                    background: "#FFC85E",
                                    ":hover": {
                                        background: "#FFC85E",
                                    },
                                    "@media(max-width:800px)": {
                                        display: "none"
                                    },
                                }}
                                onClick={() => handleClickOpen()}
                            >
                                Подтверждение заказа
                            </Button>
                        </Stack>
                        <Stack>
                            <Box sx={{
                                background: "white",
                                boxShadow: "0px 14px 39px -11px rgba(0, 0, 0, 0.1)",
                                borderRadius: "10px",
                                width: "290px",
                                padding: "15px",
                                marginBottom: "20px"
                            }}>
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "15px",
                                    marginBottom: "15px"
                                }}>
                                    <Box sx={{
                                        background: "linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%)",
                                        borderRadius: "50%",
                                        width: "35px",
                                        height: "35px",
                                        color: "#3F4E65",
                                        fontSize: "14px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}> <AccountBalanceWalletIcon sx={{ fontSize: "18px", color: "#3F4E65" }} /></Box>
                                    <Typography sx={{
                                        fontSize: "16px",
                                        color: "#111111",
                                        textTransform: "uppercase",
                                        fontWeight: "500"
                                    }}>Оплата</Typography>
                                </Box>
                                <Typography sx={{
                                    fontSize: "12px",
                                    color: "#3F4E65"
                                }}>Принимаем оплату наличными, по карте и через расчетный счет.</Typography>
                            </Box>
                            <Box sx={{
                                background: "white",
                                boxShadow: "0px 14px 39px -11px rgba(0, 0, 0, 0.1)",
                                borderRadius: "10px",
                                width: "290px",
                                padding: "15px",
                                marginBottom: "20px"
                            }}>
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "15px",
                                    marginBottom: "15px"
                                }}>
                                    <Box sx={{
                                        background: "linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%)",
                                        borderRadius: "50%",
                                        width: "35px",
                                        height: "35px",
                                        color: "#3F4E65",
                                        fontSize: "14px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}> <AirportShuttleIcon sx={{ fontSize: "18px", color: "#3F4E65" }} /></Box>
                                    <Typography sx={{
                                        fontSize: "16px",
                                        color: "#111111",
                                        textTransform: "uppercase",
                                        fontWeight: "500"
                                    }}>Доставка</Typography>
                                </Box>
                                <Typography sx={{
                                    fontSize: "12px",
                                    color: "#3F4E65"
                                }}>Бесплатная доставка от <b>10 000 ₸</b> <br />
                                    по области. Наша доставка работает<br />
                                    ежедневно.</Typography>
                            </Box>
                            <Box sx={{
                                background: "white",
                                boxShadow: "0px 14px 39px -11px rgba(0, 0, 0, 0.1)",
                                borderRadius: "10px",
                                width: "290px",
                                padding: "15px",
                                marginBottom: "20px"
                            }}>
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "15px",
                                    marginBottom: "15px"
                                }}>
                                    <Box sx={{
                                        background: "linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%)",
                                        borderRadius: "50%",
                                        width: "35px",
                                        height: "35px",
                                        color: "#3F4E65",
                                        fontSize: "14px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}> <QuestionMarkIcon sx={{ fontSize: "18px", color: "#3F4E65" }} /></Box>
                                    <Typography sx={{
                                        fontSize: "16px",
                                        color: "#111111",
                                        textTransform: "uppercase",
                                        fontWeight: "500"
                                    }}>возникли вопросы?</Typography>
                                </Box>
                                <Typography sx={{
                                    fontSize: "12px",
                                    color: "#3F4E65"
                                }}>Звоните: <b>+7 777 490 00 91 </b><br />
                                    Менеджер Вам ответит на все вопросы.</Typography>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "15px",
                                marginBottom: "30px",
                                marginTop: "20px"
                            }}>
                                <Box sx={{
                                    background: "linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%)",
                                    borderRadius: "50%",
                                    width: "35px",
                                    height: "35px",
                                    color: "#3F4E65",
                                    fontSize: "14px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>3</Box>
                                <Typography sx={{
                                    fontSize: "16px",
                                    color: "#111111",
                                    textTransform: "uppercase",
                                    fontWeight: "500"
                                }}>Дополнительно</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{
                                    fontSize: "16px",
                                    color: "#111111",
                                    fontWeight: "500",
                                    marginBottom: "10px"
                                }}>Комментарий</Typography>
                            </Box>
                            <TextField
                                placeholder="Введите ваш комментарий"
                                multiline
                                rows={12}
                                sx={{
                                    background: "#EDEDED",
                                    borderRadius: "36px",
                                    width: "290px",
                                    padding: "10px",
                                    marginBottom: "15px",
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderRadius: `36px`,
                                            border: "none",
                                        },
                                    },
                                    "& input::placeholder": {
                                        fontSize: "12px"
                                    }
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    display: "none",
                                    width: "290px",
                                    height: "60px",
                                    color: "white",
                                    borderRadius: "80px",
                                    marginTop: "30px",
                                    background: "#FFC85E",
                                    ":hover": {
                                        background: "#FFC85E",
                                    },
                                    "@media(max-width:800px)": {
                                        display: "block"
                                    },
                                }}
                                onClick={() => handleClickOpen()}
                            >
                                Подтверждение заказа
                            </Button>
                        </Stack>
                    </Box>

                </Box>

                {open && <Box sx={{
                    position: "absolute",
                    background: "#FFFFFF",
                    borderRadius: "8px",
                    top: "50%",
                    left: "20%",
                    padding: "115px 100px"
                }}>
                    <Stack direction={"column"} alignItems={"center"} gap={"3vh"} sx={{ position: "relative" }}>
                        <Box sx={{
                            width: "60px",
                            height: "60px",
                            background: "#FFC85E",
                            borderRadius: "80px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}> <DoneAllIcon sx={{ color: "white" }} /></Box>
                        <Typography sx={{
                            fontSize: "40px", color: "#111111", textTransform: "uppercase", fontWeight: "500"
                        }}>Спасибо за заказ</Typography>
                        <Typography sx={{
                            fontSize: "20px", color: "#3F4E65",
                        }}>Наш менеджер свяжется с вами в ближайшее время</Typography>
                        <Button
                            sx={{
                                position: "absolute",
                                right: "-90px",
                                top: "-80px"
                            }}
                            onClick={() => {
                                handleClose()
                                localStorage.clear()
                                navigate("/catalog")
                            }}
                        >X</Button>
                    </Stack>
                </Box>
                }
            </Container>
        </>
    )
}
