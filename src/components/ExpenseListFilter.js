import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { sortByAmount } from '../actions/filters';
import { sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilter extends React.Component {

    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {

        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    };

    onFocusChange = (calendarFocused) => {

        this.setState(() => {
            calendarFocused
        })
    }

    onTextChange = (e) => {

        this.props.setTextFilter(e.target.value)
        console.log(e.target.value)
    }

    onSortChange = (e) => {
        if (e.target.value === 'amount') {
            this.props.sortByAmount()
        }
        else if (e.target.value === 'date') {
            this.props.sortByDate()
        }
    }

    render() {
        return (
            <div class="content-container">
            
                <div className="input-group">
                    <div className="input-group__item">
                        <input  className="text-input"
                        placeholder="Search Expenses"
                        type="text" defaultValue={this.props.filters.text} onChange={this.onTextChange} />
                    </div>

                    <div className="input-group__item">
                        <select
                        className="select"
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChange}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>

                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => range}
                            showClearDates={false}
                        />
                    </div>

                </div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (setEndDate) => dispatch(setEndDate(setEndDate)),
});

const ExpenseListFilterConnect = connect((state) => {

    return {
        filters: state.filters
    }
}, mapDispatchToProps)(ExpenseListFilter)


export default ExpenseListFilterConnect