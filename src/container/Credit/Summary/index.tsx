import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import Input from "../../../components/Input";
import ListItem from "../../../components/ListItem";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Summary = () => {
    const classes = useStyles();
    const { selectedList } = useSelector((state: RootState) => state.users);
    const [value, setValue] = React.useState<string>("");
    const { user } = useSelector((state: RootState) => state.credit);
    const userInfo = Object.keys(user).map((key) => (
        <Typography key={key} fontSize={14}>
            {user[key]}
        </Typography>
    ));
    const onHandleChange = (e: any) => {
        setValue(e.target.value);
    };
    const selected = selectedList.map((item) => (
        <ListItem key={item.fin} {...item} />
    ));
    return (
        <Grid container justifyContent="space-between">
            <Grid item xs={6}>
                <h2>Müştəri</h2>
                {userInfo}
            </Grid>
            <Grid item xs={6}>
                <h2>Zaminin</h2>
                {selected}
            </Grid>
            <Grid item xs={12}>
                <Input
                    value={value}
                    onChange={onHandleChange}
                    label={"İmtina səbəb"}
                    className={classes.textarea}
                />

                <Link
                    to="/"
                    className={`${classes.link} ${
                        !value ? classes.disabled : ""
                    }`}
                >
                    <Button variant="outlined" disabled={!value} color="error">
                        Error
                    </Button>
                </Link>
                <Link to="/" className={classes.link}>
                    <Button>Kreditin təsdiqi</Button>
                </Link>
            </Grid>
        </Grid>
    );
};
export default Summary;
