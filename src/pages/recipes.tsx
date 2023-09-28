import React from 'react'
import Head from 'next/head'
import OurRecipes from '@/components/reusables/OurRecipes'
import MyRecipes from '@/components/reusables/MyRecipes'
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import CustomStyles from "@/styles/recipes"

export default function Home() {

  return (
    <>
      <Head>
        <title>Scentronix Test - Our Recipes</title>
        <meta name="description" content="Scentronix is a tech company devoted to developing technology solutions and services for scent products and experiences." />
        <meta property="og:title" content="Scentronix Test - Algorithmic Perfumery" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Scentronix is a tech company devoted to developing technology solutions and services for scent products and experiences." />
        <meta property="og:image" content="https://bitbama.io/images/chimpanzee-1200.png" />
        <meta property="og:url" content="https://scentronix.com/" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630 " />
        <meta name="twitter:image" content="https://bitbama.io/images/chimpanzee-1200.png" />
        <meta name="twitter:image:type" content="image/jpeg" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630 " />
        <meta property="twitter:url" content="https://scentronix.com/" />
      </Head>

      <Container>
        <CustomStyles.CustomSecWrapper elevation={0}
        >
          <CustomStyles.SubTextContainer sx={{ mt: 1, mb: 5 }}>
            <Typography
              variant="h5"
              color="secondary.medium"
              fontWeight={600}
              textAlign="center"
            >
              Our Recipes
            </Typography>
          </CustomStyles.SubTextContainer>
          <OurRecipes />
        </CustomStyles.CustomSecWrapper>

        <CustomStyles.CustomSecWrapper sx={{ my: 5 }} elevation={0}
        >
          <CustomStyles.SubTextContainer sx={{ mt: 1, mb: 5 }}>
            <Typography
              variant="h5"
              color="secondary.medium"
              fontWeight={600}
              textAlign="center"
            >
              Saved Recipes
            </Typography>
          </CustomStyles.SubTextContainer>
          <MyRecipes />
        </CustomStyles.CustomSecWrapper>
      </Container>
    </>
  )
}
