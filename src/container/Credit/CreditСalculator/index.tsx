import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import Input from "../../../components/Input";

import useStyles from "./styles";

interface Props {
    handleNext: () => void;
    handleBack: () => void;
    footer: JSX.Element;
}

const CreditСalculator = ({ footer, handleNext, handleBack }: Props) => {
    const classes = useStyles();
    const { amount, period, percent } = useSelector(
        (state: RootState) => state.credit.user,
    );

    return (
        <div>
            <Input value="12" readOnly label="Azn" />
            <Grid item xs={12}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
                        Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button onClick={handleNext}>Next</Button>
                </Box>
            </Grid>
        </div>
    );
};
export default CreditСalculator;
