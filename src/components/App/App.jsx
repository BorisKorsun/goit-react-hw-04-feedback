import { useState } from 'react';

import Section from 'components/Section';
import FeedbackControls from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        return total ? ((good / total) * 100).toFixed(0) : 0;
    };

    const onBtnClick = (e) => {
        const { name } = e.target;

        switch(name) {
            case 'good':
                setGood(s => s + 1);
                break;
            case 'neutral':
                setNeutral(s => s + 1);
                break;
            case 'bad':
                setBad(s => s + 1);
                break;
            default:
                return;
        }
    };

    return ( 
        <>
        <Section title="Please leave your feedback">
            <FeedbackControls 
            options={['good', 'bad', 'neutral']} 
            onLeaveFeedback={onBtnClick}/>
        </Section>
        
        <Section title="Statistics">
            {countTotalFeedback() === 0 ? <Notification message="There is no feedback"/> : 
              <Statistics 
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}/>
              }
        </Section>
        
        </> 
    )

    };