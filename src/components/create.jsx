import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { addQuestion } from '../redux/question/questionReducer';
import { useDispatch, useSelector } from 'react-redux';

export default function Create() {
    console.log('In Create component');
    let navigate = useNavigate();
    const [questionTitle, setQuestionTitle] = useState('');
    const [questionDesc, setQuestionDesc] = useState('');

    const questions = useSelector((state) => state.questions);
    console.log('questions from store...', questions);
    // const [checkbox, setCheckbox] = useState(false);
    const dispatch = useDispatch();
    const postData = () => {
        console.log(questionTitle);
        console.log(questionDesc);
        let postQuestionObj = {
            id: 6,
            questionTitle,
            questionDescription: questionDesc,
            "answers": [],
            "votes": 0,
            "views": 2
        }
        dispatch(addQuestion, postQuestionObj);
        navigate('/questions');
        // axios.post(`http://localhost:3000/questionsArr`, postQuestionObj)
        //     .then(res => {
        //         console.log('response...', res);
        //         navigate('/questions');
        //     })
        //     .catch(err => console.log('error...', err))
    }
    return (
        <Form className="create-form">
            <Form.Field>
                <label>Question title</label>
                <input placeholder='Enter question' onChange={(e) => setQuestionTitle(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Question Description</label>
                <input placeholder='Question Description in detail' onChange={(e) => setQuestionDesc(e.target.value)} />
            </Form.Field>
            {/* <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
        </Form.Field> */}
            <Button onClick={postData} type='submit'>Submit</Button>
        </Form>
    )
}

// export default Create;