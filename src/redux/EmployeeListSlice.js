import { createSlice } from '@reduxjs/toolkit';
import { mockedData } from '../data/mockedData.js';

export const employeeListSlice = createSlice({
    name: 'employeeList',
    initialState: {
        employees: mockedData,
    },
    reducers: {
        addEmployee: (state, { payload }) => {
            state.employees.push(payload);
        },
    },
});

export const { addEmployee } = employeeListSlice.actions;
export default employeeListSlice.reducer;
