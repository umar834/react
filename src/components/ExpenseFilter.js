const ExpenseFilter = (props) => {
    const getSelectedYear = event => {
        props.selectedYear(event.target.value)
    }
    return (
        <div>
            <select value={props.selected} onChange={getSelectedYear}>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
            </select>
        </div>
    );
}

export default ExpenseFilter