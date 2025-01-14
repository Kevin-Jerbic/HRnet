import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// React data table component
import DataTable from 'react-data-table-component';
// Import input
import InputStandard from '../InputStandard';

const columns = [
    {
        name: 'First Name',
        selector: row => row.firstName,
        sortable: true,
        width: '150px',
    },
    {
        name: 'Last Name',
        selector: row => row.lastName,
        sortable: true,
        width: '150px',
    },
    {
        name: 'Date of Birth',
        selector: row => row.dateOfBirth,
        sortable: true,
        width: '145px',
    },
    {
        name: 'Start Date',
        selector: row => row.startDate,
        sortable: true,
        width: '130px',
    },
    {
        name: 'Street',
        selector: row => row.street,
        sortable: true,
        width: '200px',
    },
    {
        name: 'City',
        selector: row => row.city,
        sortable: true,
        width: '120px',
    },
    {
        name: 'State',
        selector: row => row.state,
        sortable: true,
        width: '130px',
    },
    {
        name: 'Zip Code',
        selector: row => row.zipCode,
        sortable: true,
        width: '120px',
    },
    {
        name: 'Department',
        selector: row => row.department,
        sortable: true,
        width: '160px',
    },
];

const customStyles = {
    headCells: {
        style: {
            fontSize: '14px',
            fontWeight: 'bold',
        },
    },
};

/**
 * TableEmployees component.
 *
 * @returns {JSX.Element} - Rendered component.
 */
function TableEmployees() {
    const employees = useSelector(state => state.employeeList.employees);
    // Initialize the state with only the employees list
    const [records, setRecords] = useState(employees);

    // Update the records when the employees list changes
    useEffect(() => {
        setRecords(employees);
    }, [employees]);

    const handleFilterChange = e => {
        let query = e.target.value.toLowerCase();
        const allRecords = employees;
        const newRecords = allRecords.filter(item => {
            return (
                (item.firstName &&
                    item.firstName.toLowerCase().includes(query)) ||
                (item.lastName &&
                    item.lastName.toLowerCase().includes(query)) ||
                (item.dateOfBirth &&
                    item.dateOfBirth.toLowerCase().includes(query)) ||
                (item.startDate &&
                    item.startDate.toLowerCase().includes(query)) ||
                (item.street && item.street.toLowerCase().includes(query)) ||
                (item.city && item.city.toLowerCase().includes(query)) ||
                (item.state && item.state.toLowerCase().includes(query)) ||
                (item.zipCode && item.zipCode.toLowerCase().includes(query)) ||
                (item.department &&
                    item.department.toLowerCase().includes(query))
            );
        });

        setRecords(newRecords);
    };

    return (
        <div className="main-div">
            <div className="search">
                <InputStandard
                    label={'Search bar'}
                    type={'text'}
                    id={'search'}
                    name={'search'}
                    valueOf={''}
                    change={handleFilterChange}
                />
            </div>
            <DataTable
                columns={columns}
                data={records}
                customStyles={customStyles}
                pagination
                highlightOnHover
                striped
            />
        </div>
    );
}

export default TableEmployees;
