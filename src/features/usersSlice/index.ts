import { createSlice, current } from "@reduxjs/toolkit";

interface User {
    fin: string;
    address: string;
    no: string | number;
    nameSurname: string;
    registrationAddress: string;
    dateOfBirth: string;
    cardInfo: string;
    phone: string | number;
}
interface Payload {
    list: Array<User>;
    selectedList: Array<User>;
}

const initialState: Payload = {
    list: [
        {
            address: "Vezirov 3",
            cardInfo: "Yoxdu",
            fin: "12345",
            no: "AA",
            nameSurname: "Sehriyar",
            registrationAddress: "Vezirov 3",
            dateOfBirth: "22.07.1995",
            phone: "+994513101898",
        },
        {
            address: "Buzovna",
            cardInfo: "yoxdu",
            fin: "34567",
            no: "AA",
            nameSurname: "Samir",
            registrationAddress: "Buzovna",
            dateOfBirth: "22.07.1995",
            phone: "+994513191898",
        },
    ],
    selectedList: [],
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser(state, action) {
            state.list = [...state.list, action.payload];
        },
        putSelectedItemId(state, action) {
            const newValue = state.list.filter(
                (item) => item.fin === action.payload,
            );
            state.selectedList = [
                ...state.selectedList.filter(
                    (item) => item.fin != action.payload,
                ),
                ...newValue,
            ];
        },
        deleteFromSelected: (state, action) => {
            const newValue = state.selectedList.filter(
                (item) => item.fin !== action.payload,
            );
            state.selectedList = newValue;
        },
    },
});

export const {
    addUser,
    putSelectedItemId,
    deleteFromSelected,
} = usersSlice.actions;
export default usersSlice.reducer;
