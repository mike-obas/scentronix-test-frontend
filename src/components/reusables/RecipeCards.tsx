import React, { useEffect, useReducer } from 'react'
import CustomStyles from '@/styles/recipes';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from "@mui/material/CircularProgress";
import { loadingReducer } from '@/components/reusables/reducers';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import NoItemCard from './NoCardItem';
import Link from 'next/link';

const initialLoadingState = {
    preLoading: true
}

function RecipeCards({ myRecipes }: any) {
    const theme = useTheme()
    const [loading, setLoading] = useReducer(loadingReducer, initialLoadingState);

    const startLoading = (loadingType: string, value: boolean) => {
        setLoading({
            type: "setLoading",
            loadingType: loadingType,
            value: value,
        })
    }

    useEffect(() => {
        startLoading("preLoading", false)
    }, [])

    return (
        <>
            <CustomStyles.newsArea>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    columnSpacing={{ xs: 0, md: 3 }}
                    rowSpacing={{ xs: 1, md: 3 }}
                >
                    {loading.preLoading ?
                        <Box sx={{ m: 'auto', pt: 3, pb: 5 }}>
                            <CircularProgress />
                        </Box>
                        : myRecipes.length < 1 ?
                            <NoItemCard
                                title=""
                                subTitle=""
                                secondSubTitle={"No recipe yet"}
                                elevation={3}
                                xsP="0px 5px 15px"
                                mdP="5px 5px 15px"
                            />
                            :
                            (myRecipes.map((item: any) =>
                            (<Grid key={item.itemId} item xs={12} md={6}>
                                <CustomStyles.RecipeCardWrapper elevation={2}>
                                    <Link href={`recipes/${item.category}/${item.itemId}`} className="routerLink">
                                        <Grid container alignItems="center" flexWrap="nowrap">
                                            <Image width={100} style={{ borderRadius: theme.shape["borderRadius"] * 1.5 }} height={50} src={item?.image_url} alt="news image" />
                                            <Typography className='twoLineText' lineHeight={1.4} variant='subtitle1' fontWeight={500} sx={{ ml: 2 }}>
                                                {item?.title}
                                            </Typography>
                                        </Grid>
                                        <Box sx={{ width: '100%' }}>
                                            <Typography className='twoLineText' lineHeight={1.4} color="secondary.medium" variant='body2' fontWeight={400} sx={{ mt: 1 }}>
                                                {item?.description}
                                            </Typography>
                                        </Box>
                                    </Link>
                                </CustomStyles.RecipeCardWrapper>
                            </Grid>
                            )))
                    }
                </Grid>
            </CustomStyles.newsArea>
        </>
    )
}

export default RecipeCards