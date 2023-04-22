import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Card from "../../components/Card";
import Search from "../../components/Search/index";
import useStyles from "./styles";

const Main = () => {
    const classes = useStyles();
    const [value, setValue] = useState<string>("");
    const usersList = useSelector((state: RootState) => state.users.list);
    const result = usersList
        .filter((item: any) => item.fin === value || !value)
        .map((card: any) => <Card {...card} />);

    return (
        <div>
            <Search onHandleChange={setValue} value={value} />
            <div className={classes.list}>{result}</div>
        </div>
    );
};
export default Main;
