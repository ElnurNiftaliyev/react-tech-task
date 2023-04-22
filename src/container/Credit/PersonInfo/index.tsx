import React from "react";
import { Grid } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import InputMask from "react-input-mask";
import Input from "../../../components/Input";
import { updateCreditData } from "../../../features/creditSlice";

interface Props {
    handleNext: () => void;
    footer: JSX.Element;
}
interface Props {
    footer: JSX.Element;
}
const PersonInfo = ({ handleNext, footer }: Props) => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        control,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => {
        dispatch(updateCreditData(data));
        reset();
        handleNext();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
                container
                flexWrap="wrap"
                justifyContent="space-between"
                sx={{ maxWidth: 1000 }}
            >
                <Controller
                    name={"activitySector"}
                    control={control}
                    rules={{ required: "This is Required" }}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            value={value}
                            onChange={onChange}
                            label="Fəaliyyət sektoru"
                            errors={errors.activitySector}
                        />
                    )}
                />
                <Controller
                    name={"monthlyIncome"}
                    control={control}
                    rules={{
                        required: "This is Required",
                    }}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            value={value}
                            onChange={onChange}
                            label="Aylıq gəliri"
                            errors={errors.monthlyIncome}
                        />
                    )}
                />
                <Controller
                    name={"workExperienceM"}
                    control={control}
                    rules={{
                        required: "This is Required",
                    }}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            value={value}
                            onChange={onChange}
                            label="Iş təcrübəsi (il)"
                            errors={errors.workExperienceM}
                        />
                    )}
                />
                <Controller
                    name={"workExperienceD"}
                    control={control}
                    rules={{ required: "This is Required" }}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            value={value}
                            onChange={onChange}
                            label="İş təcrübəsi (ay)"
                            errors={errors.workExperienceD}
                        />
                    )}
                />
                <Controller
                    name={"region"}
                    control={control}
                    rules={{ required: "This is Required" }}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            value={value}
                            onChange={onChange}
                            label="Region"
                            errors={errors.region}
                        />
                    )}
                />
                <Controller
                    name={"businessAddress"}
                    control={control}
                    rules={{ required: "This is Required" }}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            value={value}
                            onChange={onChange}
                            label="Biznes ünvanı"
                            errors={errors.businessAddress}
                        />
                    )}
                />
            </Grid>
            {footer}
        </form>
    );
};
export default PersonInfo;
