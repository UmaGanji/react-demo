// src/components/Question.js
import React from 'react';

const Question = ({ question }) => {
    return (
        <div className="question-row">
            {/* <div className="question-header"> */}
            <div className="question-stats">
                <p className="question-stat">{question.votes} <span>votes</span></p>
                <p className="question-stat">{question.answers.length} <span>answers</span></p>
            </div>
            <div className="question-title-area">
                <a>{question.questionTitle}</a>
                <div className="d-flex">
                    <span className="question-tag">javascript</span>
                    <span className="question-tag">parsing</span>
                    <span className="question-tag">quotes</span>
                    <span className="question-tag">literals</span>
                </div>
            </div>
            {/* </div> */}
            {/* <div className="question-footer">
        <button className="btn-answer">Answer</button>
      </div> */}
        </div>
    );
};

export default Question;
