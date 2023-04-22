import React from "react";
import { InputLabel, OutlinedInput, Typography } from "@mui/material";
import useStyle from "./styles";

interface Props {
    fullWidth?: boolean;
    id?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    value: string;
    type?: string;
    onChange?: (e: any) => void;
    className?: string;
    grey?: boolean;
    readOnly?: boolean;
    errors?: any;
    required?: boolean;
}
const Input = ({
    fullWidth = false,
    id,
    name,
    label,
    placeholder,
    value = "",
    type = "text",
    onChange,
    className = "",
    grey = false,
    readOnly = false,
    errors,
    required,
}: Props): JSX.Element => {
    const classes = useStyle();
    return (
        <div className={className ? className : classes.root}>
            <InputLabel>
                <Typography
                    fontSize={14}
                    className={`${errors ? classes.error : ""}`}
                >
                    {label}
                    <sup className={classes.error}>{required ? " *" : ""}</sup>
                </Typography>
            </InputLabel>
            <OutlinedInput
                error={errors}
                readOnly={readOnly}
                placeholder={placeholder}
                fullWidth={fullWidth}
                value={value}
                type={type}
                style={{ width: "100%" }}
                onChange={onChange}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                    "aria-label": "weight",
                }}
            />
            {errors ? (
                <Typography fontSize={16} color="red">
                    {errors.message}
                </Typography>
            ) : null}
        </div>
    );
};

export default Input;
