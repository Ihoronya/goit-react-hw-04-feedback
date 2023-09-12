import React, { useState, useCallback } from 'react';
import Container from './Container/Container';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const addFeedback = useCallback(
    option => {
      setFeedback(prevFeedback => ({
        ...prevFeedback,
        [option]: prevFeedback[option] + 1,
      }));
    },
    []
  );

  const totalFeedback = Object.values(feedback).reduce((acc, option) => acc + option, 0);
  const positiveFeedbackPercentage = Math.round((feedback.good / totalFeedback) * 100) || 0;

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(feedback)} onLeaveFeedback={addFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

export default App;
