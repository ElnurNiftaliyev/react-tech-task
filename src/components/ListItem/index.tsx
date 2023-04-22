import { IconButton, ListItem, ListItemText } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { ArrowBack } from "@mui/icons-material";

interface Props {
    fin: string;
    nameSurname: string;
    phone: string | number;
    onHandleSelect?: (fin: string) => void;
    hideSelect?: boolean;
}

const Card = ({
    fin,
    nameSurname,
    phone,
    onHandleSelect,
    hideSelect,
}: Props): JSX.Element => {
    const onHandleClick = (): void => {
        onHandleSelect ? onHandleSelect(fin) : null;
    };
    return (
        <ListItem
            key={fin}
            secondaryAction={
                onHandleSelect ? (
                    <IconButton edge="end" onClick={onHandleClick}>
                        {!hideSelect ? <ArrowBack /> : <ArrowForwardIcon />}
                    </IconButton>
                ) : null
            }
        >
            <ListItemText primary={nameSurname} secondary={phone} />
        </ListItem>
    );
};
export default Card;
