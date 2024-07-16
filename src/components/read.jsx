import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Question from './Question';
import { useSearchParams } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Read() {
    // var questionsArr = [
    //     {
    //         "id": 1,
    //         "questionTitle": "How can I user dolphin scheduler without zookeeper?",
    //         "questionDescription": "",
    //         "answers": [],
    //         "votes": 0,
    //         "views": 2
    //     },
    //     {
    //         "id": 2,
    //         "questionTitle": "Find an element of a 3D array",
    //         "questionDescription": "",
    //         "answers": [],
    //         "votes": 0,
    //         "views": 2
    //     },
    //     {
    //         "id": 3,
    //         "questionTitle": "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly",
    //         "questionDescription": "I was trying to display my layout.jsx on the browser but keep getting A <Route> is only ever to be used as the child of Routes element, never rendered directly",
    //         "answers": [],
    //         "votes": 0,
    //         "views": 2
    //     },
    //     {
    //         "id": 4,
    //         "questionTitle": "Test question 4",
    //         "questionDescription": "",
    //         "answers": [],
    //         "votes": 0,
    //         "views": 2
    //     }
    // ]
    const [questionsArr, setQuestionsArr] = useState([]);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [searchParams] = useSearchParams();
    const selQueCategory = searchParams.get("tab");

    const getQuestions = async () => {
        await axios.get('http://localhost:3000/questionsArr').then(res => {
            console.log('questions fetched: ', res)
            setQuestionsArr(res.data);
            console.log('questionsArr value after setting the value...', questionsArr)
            // setTimeout(() => {
            //     filterSelQuestions();
            //     console.log('questionsArr value after setting the value in setTimeout...', questionsArr)
            //     console.log('filteredQuestions ... ', filteredQuestions)
            // }, 500)
        })
    }
    useEffect(() => {
        filterSelQuestions();
    }, [questionsArr, selQueCategory]);

    const filterSelQuestions = () => {
        let filteredQuestions = questionsArr;
        if (selQueCategory) {
            // let searchParam = 'Newest';
            switch (selQueCategory) {
                case 'Unanswered':
                    filteredQuestions = questionsArr.filter(question => {
                        return question.answers.length == 0;
                    })
                    break;
                case 'Active':
                    filteredQuestions = questionsArr.filter(question => {
                        return question
                    });
                    break;
                default:
                    break;
            }
            // let filteredQuestionList = questionsArr.filter(question => {
            //     if (selQueCategory == 'Unanswered')
            //         return question.answers.length == 0;
            //     else return question;
            // })
            // setFilteredQuestions(filteredQuestionList)
        }
        setFilteredQuestions(filteredQuestions)
    }

    useEffect(() => {
        console.log('in useEffect')
        getQuestions();
    }, []);

    // filteredQuestions.map(question => (
    const QuestionsList = () => {
        const questionsListArr = useSelector(state => { console.log(state); return state.questions });
        console.log('questionsListArr...', questionsListArr);
        return (
            <div className="questions-list">
                {filteredQuestions.map(question => (
                    <Question key={question.id} question={question} />
                ))}
            </div>
        );
    }
    // questionsArr.map(questionObj =>
    //     <div class=" ui card question-row" key={questionObj.id}>
    //         <div class="content">
    //             <div class="header">
    //                 {questionObj.questionTitle}
    //             </div>
    //             {/* <div class="meta">
    //             Friends of Veronika
    //         </div> */}
    //             <div class="description">
    //                 {questionObj.questionDescription}
    //             </div>
    //         </div>
    //     </div>
    // )

    {/* <div class="extra content">
        </div> */}
    return (
        <div style={{ marginTop: 20, width: '900px' }}>
            <div className="questions-header">
                <h3 className="questions-heading">All Questions</h3>
                <div>
                    <Link to="/create"><button className="ui primary button">New question</button></Link>
                </div>
            </div>
            <div className="d-flex justify-end">
                <div className="question-categories">
                    <a href="/questions?tab=Newest">Newest</a>
                    <a>Active</a>
                    <a>Bountied</a>
                    <a href="/questions?tab=Unanswered">Unanswered</a>
                </div>
            </div>
            {/* {questionsList} */}
            <QuestionsList></QuestionsList>
        </div>
    )
}