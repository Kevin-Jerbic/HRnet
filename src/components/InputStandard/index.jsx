// Import dependencies
import PropTypes from 'prop-types';

// Import CSS module

/**
 * InputSelect component.
 *
 * @param {string} label - Form entry label
 * @param {string} type - Form entry type (text, number)
 * @param {string} id - Form entry id
 * @param {string} name - Form entry name
 * @param {string, num } value - Value of input (string or number)
 * @param {func} change - Function to update state of parent component
 * @returns {JSX.Element} - Rendered component.
 */
function InputStandard({ label, type, id, name, value, change }) {
    return (
        <>
            <label className="label" htmlFor={id}>
                {label}
            </label>
            <input
                className="input"
                type={type}
                id={id}
                title={id}
                name={name}
                value={value}
                onChange={change}
            />
        </>
    );
}

// PropTypes
InputStandard.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    change: PropTypes.func,
};

export default InputStandard;
