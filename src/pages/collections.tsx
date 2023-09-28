import React from 'react'
import Head from 'next/head'
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

function collections() {
    return (
        <>
            <Head>
                <title>Scentronix Test - Collections</title>
                <meta name="description" content="Scentronix is a tech company devoted to developing technology solutions and services for scent products and experiences." />
            </Head>

            <Container sx={{ my: 5 }}>
                <Typography
                    variant="h5"
                    color="secondary.medium"
                    fontWeight={600}
                    textAlign="center"
                >
                    This is our collections page
                </Typography>
            </Container>
        </>
    )
}

export default collections