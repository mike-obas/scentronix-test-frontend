import * as React from 'react';
import Box from '@mui/material/Box';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import SubmitButton from './SubmitButton';
import CustomStyles from '@/styles/recipes';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function NotificationModal({
    imageUrl, title, subText, open, toggleCustomModal, handleAction, buttonText
}: any) {

    return (
        <div>
            <CustomStyles.BootstrapDialog
                onClose={toggleCustomModal}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth="sm"
                fullWidth={true}
            >
                <DialogContent>

                    <CustomStyles.VerticalItemCard
                        elevation={0}
                        style={{ padding: "50px 15px", background: "#ffffff" }}
                    >
                        <CheckCircleIcon color="primary" sx={{ fontSize: 80 }} />
                        <Typography variant="h6" fontWeight={700} sx={{ mt: 2, mb: 0.5 }}>{title}</Typography>
                        <Typography
                            variant="subtitle1" color="secondary.medium"
                            maxWidth={250}
                            lineHeight={1.5}
                        >
                            {subText}
                        </Typography>

                        <Box sx={{ mt: 2 }}>
                            <SubmitButton
                                text={buttonText}
                                textVariant={"subtitle2"}
                                height={35}
                                loading={false}
                                padding="10px 22px"
                                disableElevation={true}
                                variant="contained"
                                fullWidth={false}
                                onClickHandler={handleAction}
                            />
                        </Box>

                    </CustomStyles.VerticalItemCard>

                </DialogContent>
            </CustomStyles.BootstrapDialog>
        </div>
    );
}

export default NotificationModal