import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonInfo from "./PersonInfo";
import CreditInformation from "./CreditInformation";
import AttachSurety from "./AttachSurety";
import { Grid } from "@mui/material";
import CreditСalculator from "./CreditСalculator";
import Summary from "./Summary";

const steps = [
    "Şəxs haqqında məlumat",
    "Kredit barədə məlumat",
    "Zaminin əlavəsi",
    "Kredit Kalkulyatoru",
    "Xülasə",
];

const StepComponent: any = {
    0: PersonInfo,
    1: CreditInformation,
    2: AttachSurety,
    3: CreditСalculator,
    4: Summary,
};

const Credit = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    const Components = StepComponent[activeStep];
    return (
        <Box sx={{ width: "100%" }} marginTop={1}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <Grid container justifyContent="center">
                    <Box
                        sx={{
                            width: 780,
                            display: "flex",
                            flexDirection: "row",
                            marginTop: 2,
                        }}
                    >
                        <Components
                            handleNext={handleNext}
                            handleBack={handleBack}
                            footer={
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: "1 1 auto" }} />
                                    <Button type="submit">
                                        {activeStep === steps.length - 1
                                            ? "Finish"
                                            : "Next"}
                                    </Button>
                                </Box>
                            }
                        />
                    </Box>
                </Grid>
            )}
        </Box>
    );
};
export default Credit;
