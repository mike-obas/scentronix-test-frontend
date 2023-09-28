import React, { useEffect, useReducer } from 'react'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import CustomStyles from '@/styles/recipes';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupWorkOutlinedIcon from '@mui/icons-material/GroupWorkOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import { loadingReducer } from '@/components/reusables/reducers';
import { useRouter } from 'next/router';
import NotificationModal from "@/components/reusables/NotificationModal"

interface Props {
    onPrint: any
    hidePrintBtn: boolean
    itemId: string
    description: string
    prep: string
    bake: string
    total: string
    yieldString: string
}

const initialLoadingState = {
    isSaved: false,
    notificationModal: false
}

function ItemTextArea({
    onPrint, hidePrintBtn,
    itemId,
    description,
    prep,
    bake,
    total,
    yieldString
}: Props) {
    const [loading, setLoading] = useReducer(loadingReducer, initialLoadingState);
    const navigate = useRouter()

    const startLoading = (loadingType: string, value: boolean) => {
        setLoading({
            type: "setLoading",
            loadingType: loadingType,
            value: value,
        })
    }

    useEffect(() => {
        if (localStorage.getItem("savedRecipes")) {
            let storageRecipes = JSON.parse(`${localStorage.getItem("savedRecipes")}`);
            if (storageRecipes.includes(itemId)) startLoading("isSaved", true)
        }
    }, [])

    const handleNotificationModal = () => {
        const prevState = loading.notificationModal
        return startLoading("notificationModal", !prevState)
    }

    const gotoPage = () => {
        navigate.push("/recipes")
    }

    const handleSave = () => {
        if (localStorage.getItem("savedRecipes")) {
            let storageRecipes = JSON.parse(`${localStorage.getItem("savedRecipes")}`);
            if (storageRecipes.includes(itemId)) return;
            const updateLocalStorage = [...storageRecipes, itemId]
            localStorage.setItem("savedRecipes", JSON.stringify(updateLocalStorage))
            startLoading("isSaved", true)
            return handleNotificationModal()

        } else {
            localStorage.setItem("savedRecipes", JSON.stringify([itemId]))
            startLoading("isSaved", true)
            return handleNotificationModal()
        }
    }

    return (
        <>
            <CustomStyles.SubTextContainer sx={{ marginLeft: 0 }}>
                <Typography sx={{ my: 4 }} lineHeight={1.5} fontWeight={400} variant="subtitle1" color="secondary">
                    {description}
                </Typography>
            </CustomStyles.SubTextContainer>
            {/* button area */}
            <Grid
                container
                alignItems={"center"}
                columnSpacing={4}
                rowSpacing={2}
            >
                <Grid item>
                    <Grid container>
                        <AccessTimeIcon fontSize='large' />
                        <Grid item sx={{ ml: 1 }}>
                            <Typography color="secondary" fontWeight={600} variant='caption'>
                                PREP
                            </Typography>
                            <Typography fontWeight={600} variant='subtitle2'>
                                {prep}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Typography fontWeight={600} color="secondary" variant='caption'>
                        BAKE
                    </Typography>
                    <Typography fontWeight={600} variant='subtitle2'>
                        {bake}
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography fontWeight={600} color="secondary" variant='caption'>
                        TOTAL
                    </Typography>
                    <Typography fontWeight={600} variant='subtitle2'>
                        {total}
                    </Typography>
                </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Grid
                container
                alignItems={"center"}
                columnSpacing={4}
                rowSpacing={2}
            >
                <Grid item xs={12} sm={6}>
                    <Grid container flexWrap='nowrap'>
                        <GroupWorkOutlinedIcon fontSize='large' />
                        <Grid item sx={{ ml: 1 }}>
                            <Typography fontWeight={600} color="secondary" variant='caption'>
                                YIELD
                            </Typography>
                            <Typography fontWeight={600} variant='subtitle2'>
                                {yieldString}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sx={{ visibility: hidePrintBtn ? 'hidden' : 'visible' }}>
                    <Grid container columnGap={4}>
                        <CustomStyles.ContainedButton
                            disableElevation
                            variant='contained'
                            startIcon={!loading.isSaved ? <AddRoundedIcon /> : null}
                            onClick={handleSave}
                        >
                            {loading.isSaved ? "Recipe Saved" : "Save Recipe"}
                        </CustomStyles.ContainedButton>

                        <CustomStyles.OutlinedButton
                            variant='outlined'
                            startIcon={<PrintOutlinedIcon />}
                            onClick={onPrint}
                        >
                            Print
                        </CustomStyles.OutlinedButton>
                    </Grid>
                </Grid>

            </Grid>

            <NotificationModal
                imageUrl={""}
                title=""
                subText={"You've saved this recipe"}
                buttonText={"See saved recipe"}
                open={loading.notificationModal}
                toggleCustomModal={handleNotificationModal}
                handleAction={gotoPage}
            />
        </>
    )
}

export default ItemTextArea