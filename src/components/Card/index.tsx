import React from "react";
import {
    Card as CardMUI,
    Box,
    Button,
    CardActions,
    CardContent,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
    fin: string;
    nameSurname: string;
    phone: string | number;
    cardInfo: string;
}

const Card = ({ fin, nameSurname, phone, cardInfo }: Props): JSX.Element => {
    return (
        <Box sx={{ maxWidth: 275 }}>
            <CardMUI variant="outlined">
                <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        {fin}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {nameSurname}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {phone}
                    </Typography>
                    <Typography variant="body2">
                        {cardInfo}
                        <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/credit/${fin}`}>
                        <Button size="small">Yeni kredit</Button>
                    </Link>
                </CardActions>
            </CardMUI>
        </Box>
    );
};
export default Card;
