import React from "react";
import DayPicker, {DateUtils} from "react-day-picker";
import "react-day-picker/lib/style.css";
import i18n from "../i18n";
import Helmet from "react-helmet";
import {connect} from "react-redux";
import {changeDateRange, resetDateRange} from "../../actions";
import MomentLocaleUtils from "react-day-picker/moment";
import "moment/locale/ru";

class DateRange extends React.Component {
    static defaultProps = {
        numberOfMonths: 1,
    };
    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.props.dateRange);
        this.props.changeDateRange(range);
    }
    handleResetClick = () => {
        this.props.resetDateRange();
    }
    render() {
        const { dateRange: {from, to}, t } = this.props;
        const modifiers = { start: from, end: to };

        return (
            <div className="d-flex flex-column">
                <p
                    className="d-flex flex-column flex-sm-row justify-content-center align-items-center text-center m-0"
                >
                    {!from && !to && t('Please select the first day')}
                    {from && !to && t('Please select the last day')}
                    {from &&
                    to &&
                    `${t('Selected from')} ${from.toLocaleDateString()} ${t('to')} ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <button className="reset-btn" onClick={this.handleResetClick}>
                            {t('Reset')}
                        </button>
                    )}
                </p>
                <div className="mx-auto">
                    <DayPicker
                        className="selectable"
                        numberOfMonths={this.props.numberOfMonths}
                        selectedDays={[from, { from, to }]}
                        modifiers={modifiers}
                        localeUtils={MomentLocaleUtils}
                        locale={t('lang')}
                        onDayClick={this.handleDayClick}
                    />
                    <Helmet>
                        <style>
                            {
                                `.selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                                    background-color: #cee6ff !important;
                                    color: #007bff;
                                }
                                .selectable .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
                                    background-color: #007bff !important;
                                }
                                .selectable .DayPicker-Day {
                                    line-height: 1;
                                    border-radius: 0 !important;
                                }
                                .selectable .DayPicker-Day--start {
                                    border-top-left-radius: 50% !important;
                                    border-bottom-left-radius: 50% !important;
                                }
                                .selectable .DayPicker-Day--end {
                                    border-top-right-radius: 50% !important;
                                    border-bottom-right-radius: 50% !important;
                                }
                                .selectable .DayPicker-Caption > div {
                                    font-size: 1rem
                                }
                                .reset-btn {
                                    display: contents;
                                    background-color: transparent;
                                    border: 0;
                                    appearance: none;
                                    color: #007bff;
                                }`
                            }
                        </style>
                    </Helmet>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        dateRange: state.filters.dateRange
    }),
    {
        changeDateRange,
        resetDateRange
    }
)(i18n(DateRange))
