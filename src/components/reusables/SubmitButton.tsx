import React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from "@/utils/CircularProgress"

function SubmitButton({
    text,
    textVariant = "subtitle1",
    loading,
    height,
    padding = null,
    onClickHandler,
    disableElevation = false,
    variant,
    backgroundColor = "primary",
    fullWidth = true,
    startIcon = null,
    mt = 2,
    borderRadius = 1.5,
    fullWidthOnSm = false,
    fontWeight = 500
}: any) {
    return (
        <Button
            disabled={loading}
            disableElevation={disableElevation}
            fullWidth={fullWidth}
            onClick={onClickHandler}
            color={backgroundColor}
            startIcon={startIcon}
            sx={{
                mt: mt, borderRadius: borderRadius,
                padding: padding ? padding : "12px 20px",
                height: height,
                width: fullWidthOnSm ? { xs: '100%', md: 'auto' } : 'auto'
            }}
            variant={variant}
        >
            {
                !loading ? <Typography variant={textVariant}
                    fontWeight={fontWeight} textTransform="initial" lineHeight={1.2}>
                    {text}
                </Typography> : <CircularProgress />
            }
        </Button>
    )
}

export default SubmitButton