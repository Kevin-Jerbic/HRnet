// Import dependencies
import { useEffect } from 'react';

// Import components
import TableEmployees from '../../components/TableEmployee.jsx';

/**
 * EmployeeList component.
 *
 * @returns {JSX.Element} - Rendered component.
 */
function EmployeeList() {
    useEffect(() => {
        document.title = 'HRnet - Employee List';
    }, []);

    return (
        <main>
            <h1 className="h1">Employee List</h1>
            <TableEmployees />
        </main>
    );
}

export default EmployeeList;
