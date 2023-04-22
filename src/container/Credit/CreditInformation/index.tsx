import { Grid } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Input from "../../../components/Input";
import { updateCreditData } from "../../../features/creditSlice";

interface Props {
    handleNext: () => void;
    footer: JSX.Element;
}

const CreditInformation = ({ handleNext, footer }: Props) => {
    const dispatch = useDispatch();
    const {
        handleSubmit,
        control,
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
                    name={"currency"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            value={value}
                            onChange={onChange}
                            label="Valyuta"
                        />
                    )}
                />
                <Controller
                    name={"description"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            value={value}
                            onChange={onChange}
                            label="Biznes kreditin məqsədi"
                        />
                    )}
                />
                <Controller
                    name={"amount"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            value={value}
                            onChange={onChange}
                            label="Məbləğ"
                        />
                    )}
                />
                <Controller
                    name={"period"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            value={value}
                            onChange={onChange}
                            label="Müddət"
                        />
                    )}
                />
                <Controller
                    name={"percent"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input value={value} onChange={onChange} label="Faiz" />
                    )}
                />
            </Grid>
            {footer}
        </form>
    );
};
export default CreditInformation;
