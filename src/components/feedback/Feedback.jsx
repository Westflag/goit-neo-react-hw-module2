import PropTypes from 'prop-types';

const Feedback = ({ feedback }) => {
    const { good, neutral, bad } = feedback;
    const total = good + neutral + bad;
    const positive = total ? Math.round((good / total) * 100) : 0;

    return (
        <div className="feedback">
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {positive}%</p>
        </div>
    );
};

Feedback.propTypes = {
    feedback: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
};

export default Feedback;
