import React from "react";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { Search } from "@mui/icons-material";
import { PersonAdd } from "@mui/icons-material";
import useStyles from "./styles";
import Modal from "./Modal";

interface Props {
    placeholder?: string;
    onHandleChange: (value: string) => void;
    value: string;
}
const SearchInput = ({
    placeholder,
    onHandleChange,
    value,
}: Props): JSX.Element => {
    const classes = useStyles();
    const [open, setOpen] = React.useState<boolean>(false);
    const handleChange = (e: any): void => {
        onHandleChange(e.target.value);
    };
    const onHandleOpen = () => {
        setOpen(!open);
    };

    return (
        <div>
            <OutlinedInput
                id="outlined-adornment-weight"
                className={classes.root}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                startAdornment={
                    <InputAdornment position="end">
                        <Search />
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position="end" onClick={onHandleOpen}>
                        <PersonAdd />
                    </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                    "aria-label": "weight",
                }}
            />
            <Modal open={open} onHandleClose={setOpen} />
        </div>
    );
};

export default SearchInput;
