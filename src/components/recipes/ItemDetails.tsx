import React, { useRef, useReducer, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import CustomStyles from '@/styles/recipes';
import { NextRouter, useRouter } from 'next/router';
import ItemTextArea from './ItemTextArea';
import { useReactToPrint } from 'react-to-print';
import { loadingReducer } from '@/components/reusables/reducers';
import { myRecipes } from "@/components/reusables/OurRecipes"

export interface Props {
    page: string
    category: string
    itemId: string

}

const initialLoadingState = {
    hidePrintBtn: false,
    preLoading: true
}

const ItemDetails = ({ page, category, itemId }: Props) => {
    const [loading, setLoading] = useReducer(loadingReducer, initialLoadingState);
    const navigate: NextRouter = useRouter()

    const getItemIdAsText = (itemId: string) => {
        const itemIdAsText = itemId.split("-").join(" ")
        return itemIdAsText;
    }

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

    const gotoPage = (url: string) => () => {
        navigate.push(`/${url}`)
    }

    const parentComponentRef = useRef<any>(null);

    const finalisePrint = useReactToPrint({
        content: () => parentComponentRef.current,
        onAfterPrint: () => {
            startLoading("hidePrintBtn", false)
        }
    })

    const handlePrint = () => {
        startLoading("hidePrintBtn", true)
        setTimeout(() => {
            finalisePrint()
        }, 500);
    }

    const getRecipe = myRecipes.filter((item: any) => item.itemId === itemId)
    const currentRecipe = myRecipes.length > 0 ? getRecipe[0] : null

    return (
        <CustomStyles.SectionWrapper ref={parentComponentRef}>
            <CustomStyles.Section>
                {((!loading.preLoading && currentRecipe) &&
                    <Grid
                        container
                        flexWrap="wrap"
                        columnSpacing={{ xs: 0, md: 5 }}
                    >
                        {/* Title Area */}
                        <Grid item xs={12} md={6} order={1}>
                            <CustomStyles.BgText alignItems="center">
                                <CustomStyles.LinkButton onClick={gotoPage(`${page}`)} variant='text'>{page}</CustomStyles.LinkButton>
                                <CustomStyles.ArrowForward />
                                <CustomStyles.LinkButton variant='text'>{category}</CustomStyles.LinkButton>
                                <CustomStyles.ArrowForward />
                                <CustomStyles.LinkButton onClick={gotoPage(`${page}/${category}/${itemId}`)} variant='text'>{getItemIdAsText(itemId)}</CustomStyles.LinkButton>
                            </CustomStyles.BgText>
                            <Typography sx={{ mt: 3 }} lineHeight={1.2} variant="h3" fontWeight={500} color="dark">{currentRecipe?.title}</Typography>

                            <Hidden mdDown>
                                <ItemTextArea
                                    onPrint={handlePrint}
                                    hidePrintBtn={loading.hidePrintBtn}
                                    itemId={currentRecipe.itemId}
                                    description={currentRecipe.description}
                                    prep={currentRecipe.prep}
                                    bake={currentRecipe.bake}
                                    total={currentRecipe.total}
                                    yieldString={currentRecipe.yield}
                                />
                            </Hidden>
                        </Grid>

                        {/* text area */}
                        <Hidden mdUp>
                            <Grid item xs={12} md={6} order={{ xs: 3, md: 2 }}>
                                <ItemTextArea
                                    onPrint={handlePrint}
                                    hidePrintBtn={loading.hidePrintBtn}
                                    itemId={currentRecipe.itemId}
                                    description={currentRecipe.description}
                                    prep={currentRecipe.prep}
                                    bake={currentRecipe.bake}
                                    total={currentRecipe.total}
                                    yieldString={currentRecipe.yield}
                                />
                            </Grid>
                        </Hidden>
                        {/* Image area */}

                        <CustomStyles.ImageContainer item xs={12} md={6} order={2} sx={{ mt: { xs: 7, md: 0 } }}>

                            <CustomStyles.MainImage priority src={currentRecipe?.image_url} width={400} height={200} alt={currentRecipe?.itemId} />

                        </CustomStyles.ImageContainer>

                    </Grid>
                )}

            </CustomStyles.Section>
        </CustomStyles.SectionWrapper>
    )
}

export default ItemDetails
