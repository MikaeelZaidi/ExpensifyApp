import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { sortByAmount } from '../actions/filters';
import { sortByDate ,setStartDate,setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilter extends React.Component {

    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {

        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    };

    onFocusChange=(calendarFocused)=>{

        this.setState(()=>{
            calendarFocused
        })
    }

    render() {
        return (
            <div>
                <input type="text" defaultValue={this.props.filters.text} onChange={(e) => {

                    this.props.dispatch(setTextFilter(e.target.value))
                    console.log(e.target.value)
                }} />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount())
                        }
                        else if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate())
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>


                <DateRangePicker 
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>range}
                showClearDates={false}
                />
            </div>
        )
    }
}


const ExpenseListFilterConnect = connect((state) => {

    return {
        filters: state.filters
    }
})(ExpenseListFilter)

export default ExpenseListFilterConnect