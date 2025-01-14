// Import dependencies
import { useEffect } from 'react';

/**
 * Error component
 *
 * @returns {JSX.Element} - Rendered component.
 */
function Error() {
    useEffect(() => {
        document.title = 'HRnet - Error';
    }, []);

    return (
        <main>
            <div className="error">Error 404</div>
            <div className="message">Page not found !</div>
        </main>
    );
}

export default Error;
