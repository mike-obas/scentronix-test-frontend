import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIosRounded";

const CustomStyles = {
  SectionWrapper: styled("div")(({ theme }) => ({
    padding: "50px 0px",
    [theme.breakpoints.up("md")]: {
      padding: "70px 0px",
    },
  })),

  CustomSecWrapper: styled(Paper)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius * 4,
    padding: "25px 15px",
    [theme.breakpoints.up("lg")]: {
      padding: "35px 20px",
    },
  })),

  Section: styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {},
  })),

  BgText: styled(Grid)(({ theme }) => ({
    marginBottom: "8px",
  })),

  LinkButton: styled(Button)(({ theme }) => ({
    padding: "0px",
    fontWeight: 500,
    fontSize: "12px",
    zIndex: 1,
    minWidth: 0,
    color: theme.palette.secondary.dark,
  })),

  ArrowForward: styled(ArrowForwardIcon)(({ theme }) => ({
    fontSize: "11px",
    margin: "0px 3px",
    color: theme.palette.primary.dark,
    fontWeight: 700,
  })),

  ContainedButton: styled(Button)(({ theme }) => ({
    color: "#ffffff",
    textTransform: "capitalize",
  })),

  OutlinedButton: styled(Button)(({ theme }) => ({
    textTransform: "initial",
  })),

  SubTextContainer: styled("div")(({ theme }) => ({
    maxWidth: "500px",
    margin: "auto",
  })),

  ImageContainer: styled(Grid)(({ theme }) => ({
    padding: 0,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 20,
    },
  })),

  VerticalItemCard: styled(Paper)(({ theme }) => ({
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.secondary.light,
    padding: "25px 15px",
    textAlign: "center",
    borderRadius: theme.shape.borderRadius * 4,
    [theme.breakpoints.up("lg")]: {
      padding: "35px 20px",
      height: "auto",
    },
  })),

  BootstrapDialog: styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  })),

  MainImage: styled(Image)({
    width: "100%",
    height: "auto",
    objectFit: "contain",
  }),
  newsArea: styled("div")(({ theme }) => ({
    maxWidth: 1100,
    margin: "auto",
  })),

  RecipeCardWrapper: styled(Paper)(({ theme }) => ({
    cursor: "pointer",
    height: 135,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
    background: theme.palette.secondary.light,
    "&:hover": {
      background: theme.palette.primary.light,
    },
    [theme.breakpoints.up("md")]: {},
  })),
};

export default CustomStyles;
