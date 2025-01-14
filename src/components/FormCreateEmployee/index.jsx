// Import dependencies
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// Import Redux actions
import * as employeeListActions from '../../redux/EmployeeListSlice.js';
// Import components
import ButtonSave from '../ButtonSave/index.jsx';
import InputDatePicker from '../InputDatePicker/index.jsx';
import InputSelect from '../InputSelect/index.jsx';
import InputStandard from '../InputStandard/index.jsx';
// Import my modal
import Modal from '@kevin-j/simple-react-modal/src/modal.jsx';
// Import data
import departments from '../../data/departments.js';
import states from '../../data/states.js';

function FormCreateEmployee() {
    // Global state (new instance of useDispatch)
    const dispatch = useDispatch();

    // Local state (Form inputs)
    const initialState = {
        id: uuidv4(),
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: '',
    };

    const [employee, setEmployee] = useState(initialState);

    // Local state (Display modal)
    const [displayModal, setDisplayModal] = useState(false);

    // Toggle modal
    function toggleModal() {
        setDisplayModal(!displayModal);
    }

    // Check if form is valid
    function getIsFormValid() {
        return (
            employee.firstName &&
            employee.lastName &&
            employee.dateOfBirth &&
            employee.startDate &&
            employee.street &&
            employee.city &&
            employee.state &&
            employee.zipCode &&
            employee.department
        );
    }

    // Update employee properties
    function changeHandler(e) {
        if (e.target.name) {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
        } else {
            setEmployee({
                ...employee,
                [e.target.attributes.type.value]:
                    e.target.attributes.name.value,
            });
        }
    }

    // Submit form
    function submitHandler(e) {
        e.preventDefault();
        dispatch(employeeListActions.addEmployee(employee));
        setEmployee(initialState);
        toggleModal();
    }

    return (
        <>
            <form className="form" onSubmit={submitHandler}>
                <div className="inputsContainer">
                    <div className="formColumn">
                        <InputStandard
                            type="text"
                            label="First Name"
                            id="first-name"
                            name="firstName"
                            value={employee.firstName}
                            change={changeHandler}
                        />
                        <InputStandard
                            type="text"
                            label="Last Name"
                            id="last-name"
                            name="lastName"
                            value={employee.lastName}
                            change={changeHandler}
                        />
                        <InputDatePicker
                            id="birth-date"
                            label="Date of Birth"
                            change={setEmployee}
                            object={employee}
                            property="dateOfBirth"
                            isSubmitted={displayModal}
                        />
                        <InputDatePicker
                            id="start-date"
                            label="Start Date"
                            change={setEmployee}
                            object={employee}
                            property="startDate"
                            isSubmitted={displayModal}
                        />
                        <InputSelect
                            label="Department"
                            type="department"
                            options={departments}
                            value={employee.department}
                            change={changeHandler}
                        />
                    </div>
                    <div className="formColumn">
                        <fieldset className="fieldset">
                            <legend className="legend">Address</legend>
                            <InputStandard
                                type="text"
                                label="Street"
                                id="street"
                                name="street"
                                value={employee.street}
                                change={changeHandler}
                            />
                            <InputStandard
                                type="text"
                                label="City"
                                id="city"
                                name="city"
                                value={employee.city}
                                change={changeHandler}
                            />

                            <InputSelect
                                label="States"
                                type="state"
                                options={states}
                                value={employee.state}
                                change={changeHandler}
                            />

                            <InputStandard
                                type="number"
                                label="Zip Code"
                                id="zip-code"
                                name="zipCode"
                                value={employee.zipCode}
                                change={changeHandler}
                            />
                        </fieldset>
                    </div>
                </div>
                <ButtonSave
                    status={!getIsFormValid()}
                    valid="Create Employee"
                    invalid="Please fill in all fields"
                />
            </form>
            <Modal
                message="Employee Created!"
                toggle={toggleModal}
                isOpen={displayModal}
            />
        </>
    );
}

export default FormCreateEmployee;
