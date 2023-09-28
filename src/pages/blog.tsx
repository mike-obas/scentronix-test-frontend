import React from 'react'
import Head from 'next/head'
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

function blog() {
    return (
        <>
            <Head>
                <title>Scentronix Test - Blog</title>
                <meta name="description" content="Scentronix is a tech company devoted to developing technology solutions and services for scent products and experiences." />
            </Head>

            <Container sx={{ my: 5 }}>
                <Typography
                    variant="h5"
                    color="secondary.medium"
                    fontWeight={600}
                    textAlign="center"
                >
                    This is our blog page
                </Typography>
            </Container>
        </>
    )
}

export default blog