// Import dependencies
import { useEffect } from 'react';

// Import components
import FormCreateEmployee from '../../components/FormCreateEmployee';

/**
 * CreateEmployee component.
 *
 * @returns {JSX.Element} - Rendered component.
 */
function CreateEmployee() {
    useEffect(() => {
        document.title = 'HRnet - Create Employee';
    }, []);

    return (
        <main>
            <h1 className="h1">Create an Employee</h1>
            <FormCreateEmployee />
        </main>
    );
}

export default CreateEmployee;
