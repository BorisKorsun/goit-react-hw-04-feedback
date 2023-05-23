import PropTypes from 'prop-types';
import capitalizeFirstLetter from "utils";

const FeedbackControls = ({ onLeaveFeedback, options }) => {
    return (
        <>
            {options.map((button) => {
                return (
                    <button key={button} name={button} onClick={onLeaveFeedback}>{capitalizeFirstLetter(button)}</button>
                )
            })}
        </>
    )
};

export default FeedbackControls;

FeedbackControls.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
}

