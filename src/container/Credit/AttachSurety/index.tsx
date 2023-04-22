import { Box, Button, Grid, List } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import Search from "../../../components/Search";

import ListItem from "../../../components/ListItem";
import useStyles from "./styles";
import {
    putSelectedItemId,
    deleteFromSelected,
} from "../../../features/usersSlice";

interface Props {
    handleNext: () => void;
    handleBack: () => void;
}

const AttachSurety = ({ handleNext, handleBack }: Props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [value, setValue] = React.useState<string>("");

    const { list, selectedList } = useSelector(
        (state: RootState) => state.users,
    );

    const onHandleSelect = (fin: string): void => {
        dispatch(putSelectedItemId(fin));
    };
    const onHandleDelete = (fin: string) => {
        dispatch(deleteFromSelected(fin));
    };

    const result = list
        .filter((item) => item.fin === value || !value)
        .map((card) => (
            <ListItem
                key={card.fin}
                hideSelect
                onHandleSelect={onHandleSelect}
                {...card}
            />
        ));
    const selected = selectedList.map((card) => (
        <ListItem key={card.fin} onHandleSelect={onHandleDelete} {...card} />
    ));

    return (
        <Grid container justifyContent="center" className={classes.root}>
            <Grid item xs={12}>
                <Search onHandleChange={setValue} value={value} />
            </Grid>
            <List className={classes.searchList}>{result}</List>
            <List className={classes.selectedList}>{selected}</List>
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
        </Grid>
    );
};
export default AttachSurety;
