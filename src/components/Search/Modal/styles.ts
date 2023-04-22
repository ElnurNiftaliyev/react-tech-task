import { makeStyles } from "@mui/styles";

export default makeStyles({
    root: {
        width: "100%",
        borderRadius: 7,
        "& input::placeholder": {
            fontSize: "14px",
        },
    },
    content: {
        width: 500,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        "& div": {
            margin: 5,
        },
    },
});
