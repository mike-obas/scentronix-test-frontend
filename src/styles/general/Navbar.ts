import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import Image from "next/image";

const CustomStyles = {
  AppBarWrapper: styled(Container)(({ theme }) => ({
    position: "relative",
    flexDirection: "row-reverse",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down(910)]: {
      padding: "10px 0",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
      flexDirection: "row",
      height: 80,
    },
  })),

  Appbar: styled(Paper)(({ theme }) => ({
    position: "fixed",
    zIndex: 10,
    top: 0,
    width: "100%",
    borderRadius: 0,
  })),

  HeaderSection: styled(Box)(({ theme }) => ({
    width: "100%",
    display: "none",
    padding: "10px 0px",
    marginTop: 80,
    background: theme.palette.primary.light,
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  })),

  PageWrapper: styled(Box)(({ theme }) => ({
    width: "100%",
    marginTop: 100,
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
    },
  })),

  AppBarLinkBox: styled(Box)(({ theme }) => ({
    display: "none",
    marginLeft: 0,
    [theme.breakpoints.up("md")]: {
      marginLeft: 120,
      display: "block",
    },
  })),

  AppbarLink: styled(Link)(({ theme }) => ({
    textTransform: "capitalize",
    padding: "2px 0px",
    "&:not(:last-of-type)": {
      marginRight: 35,
    },
  })),

  AppLinkText: styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.dark,
    display: "inline-block",
    fontWeight: 400,
    "&:hover": {
      fontWeight: 500,
    },
  })),

  Logo: styled(Image)(({ theme }) => ({
    height: "30px",
    width: "auto",
    objectFit: "contain",
    [theme.breakpoints.up("md")]: {
      height: "35px",
    },
  })),

  CustomLogo: styled(Image)(({ theme }) => ({
    position: "absolute",
    top: 10,
    left: 15,
    [theme.breakpoints.up("md")]: {
      top: 10,
      left: 0,
    },
  })),

  WrapperLink: styled(Link)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),

  MainButton: styled(Button)(({ theme }) => ({
    padding: "7px 15px",
    background: theme.palette.primary.main,
    color: "#ffffff",
    textTransform: "capitalize",
    borderRadius: theme.shape["borderRadius"] * 1.5,
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  })),
};

export default CustomStyles;
