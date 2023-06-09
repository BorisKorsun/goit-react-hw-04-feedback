import PropTypes from 'prop-types';

const Notification = ({ message }) => {
    return <>
    {message && <p>{message}</p>}
    </>
};

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};