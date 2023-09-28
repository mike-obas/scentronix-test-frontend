import React from 'react'
import CustomStyles from "@/styles/recipes";
import Typography from '@mui/material/Typography';

interface Props {
    title: string
    subTitle: string
    secondSubTitle: string
    actionButton?: any
    elevation: number
    xsP?: string
    mdP?: string
}

function NoItemCard({
    title,
    subTitle,
    secondSubTitle,
    actionButton = null,
    elevation = 3,
    xsP = "25px 15px",
    mdP = "35px 25px",
}: Props) {
    return (
        <CustomStyles.VerticalItemCard
            elevation={elevation}
            sx={{ padding: { xs: xsP, md: mdP } }}
        >
            <Typography variant="h6" fontWeight={700}>
                {title}
            </Typography>
            <Typography variant="subtitle1" lineHeight={1.4} sx={{ mt: 0.7 }}>
                {subTitle} <br /> {secondSubTitle}
            </Typography>
            {actionButton && actionButton}
        </CustomStyles.VerticalItemCard>
    )
}

export default NoItemCard