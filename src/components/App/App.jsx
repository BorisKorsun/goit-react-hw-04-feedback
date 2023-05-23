import React, { Component } from 'react';

import Section from 'components/Section';
import FeedbackControls from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

class App extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0      
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        return total ? ((good / total) * 100).toFixed(0) : 0;
    }

    onBtnClick = (e) => {
        const { name } = e.target;

        this.setState(prevState => {
            return { [name]: prevState[name] + 1}
        });
    };

    render() {
        const { good, neutral, bad } = this.state

        return  <>
        <Section title="Please leave your feedback">
            <FeedbackControls 
            options={Object.keys(this.state)} 
            onLeaveFeedback={this.onBtnClick}/>
        </Section>
        
        <Section title="Statistics">
            {this.countTotalFeedback() === 0 ? <Notification message="There is no feedback"/> : 
              <Statistics 
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}/>
              }
        </Section>
        
        </> 
    };
  };
  
  export default App