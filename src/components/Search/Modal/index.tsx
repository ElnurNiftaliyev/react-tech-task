import React from "react";
import Button from "@mui/material/Button";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Input from "../../Input";
import { useDispatch } from "react-redux";
import { addUser } from "../../../features/usersSlice/index";

import useStyles from "./styles";

interface Props {
    open: boolean;
    onHandleClose: (value: false) => void;
}
const Modal = ({ open, onHandleClose }: Props): JSX.Element => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => {
        dispatch(addUser(data));
        reset();
        handleClose();
    };
    const handleClose = () => {
        onHandleClose(false);
    };
    return (
        <div>
            <Dialog
                className={classes.root}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Add new User"}
                </DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent className={classes.content}>
                        <Controller
                            name={"address"}
                            control={control}
                            rules={{ required: "This is Required" }}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    value={value}
                                    onChange={onChange}
                                    label="Faktiki ünvan"
                                    errors={errors.address}
                                />
                            )}
                        />
                        <Controller
                            name={"cardInfo"}
                            control={control}
                            rules={{ required: "This is Required" }}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    value={value}
                                    onChange={onChange}
                                    label="Şəxsiyyət vəsiqəsi məlumatları"
                                    errors={errors.cardInfo}
                                />
                            )}
                        />
                        <Controller
                            name={"fin"}
                            control={control}
                            rules={{ required: "This is Required" }}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    value={value}
                                    onChange={onChange}
                                    label="FİN"
                                    errors={errors.fin}
                                />
                            )}
                        />
                        <Controller
                            name={"no"}
                            control={control}
                            rules={{ required: "This is Required" }}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    value={value}
                                    onChange={onChange}
                                    label="Seriya və kod"
                                    errors={errors.no}
                                />
                            )}
                        />
                        <Controller
                            name={"nameSurname"}
                            control={control}
                            rules={{
                                required: "This is Required",
                                pattern: {
                                    value: /^[A-Za-z_ ]+$/i,
                                    message: "Ancaq herifler",
                                },
                            }}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    value={value}
                                    onChange={onChange}
                                    label="Ad Soyad Ata adı"
                                    errors={errors.nameSurname}
                                />
                            )}
                        />
                        <Controller
                            name={"registrationAddress"}
                            control={control}
                            rules={{ required: "This is Required" }}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    value={value}
                                    onChange={onChange}
                                    label="Qeydiyyat ünvanı"
                                    errors={errors.registrationAddress}
                                />
                            )}
                        />
                        <Controller
                            name={"dateOfBirth"}
                            control={control}
                            rules={{ required: "This is Required" }}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    required
                                    value={value}
                                    onChange={onChange}
                                    label="Doğum tarixi"
                                    errors={errors.dateOfBirth}
                                />
                            )}
                        />
                        <Controller
                            name={"phone"}
                            control={control}
                            rules={{ required: "This is Required" }}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    value={value}
                                    onChange={onChange}
                                    label="Telefon (mobil + ev)"
                                    errors={errors.phone}
                                />
                            )}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button type="submit" autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
};
export default Modal;
