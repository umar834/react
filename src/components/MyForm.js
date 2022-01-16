import React, {useState} from 'react'
import './MyForm.css'

const MyForm = (props) =>
{
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const nameValue = (event) => {
        setEnteredName(event.target.value);
    }

    const emailValue = (event) => {
        setEnteredEmail(event.target.value);
    }

    const dateValue = (event) => {
        setEnteredDate(event.target.value);
    }

    const formSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: enteredName,
            amount: enteredEmail,
            date: enteredDate
        };
        setEnteredName('');
        setEnteredEmail('');
        setEnteredDate('');
        props.onFormFields(data);
    }
    return (
    <div>
        <form onSubmit={formSubmit} className='form'>
        <h2>Add new Expense</h2>
            <input className='input' type="text" value={enteredName} onChange={nameValue} placeholder='Enter Name'/>
            <input className='input' type="number" value={enteredEmail} onChange={emailValue} placeholder='Enter Amount' />
            <input className='input' type="date" value={enteredDate} onChange={dateValue} />
            <input className='button' type="submit" value="Submit" />
        </form>
    </div>
    );
}

export default MyForm;