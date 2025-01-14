// Import dependencies
import PropTypes from 'prop-types';

// Import CSS module

/**
 * ButtonSave component.
 *
 * @param {bool} status - Button status.
 * @param {string} valid - Message if form is valid.
 * @param {string} invalid - Message if form is valid.
 * @returns {JSX.Element} - Rendered component.
 */

function ButtonSave({ status, valid, invalid }) {
    return (
        <>
            {status ? (
                <button
                    className="buttonDisabled"
                    type="submit"
                    disabled={status}
                >
                    {invalid}
                </button>
            ) : (
                <button className="button" type="submit" disabled={status}>
                    {valid}
                </button>
            )}
        </>
    );
}

ButtonSave.propTypes = {
    status: PropTypes.bool,
    valid: PropTypes.string,
    invalid: PropTypes.string,
};

export default ButtonSave;
