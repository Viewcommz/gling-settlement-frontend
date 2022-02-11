import styled from "styled-components";
import ReactCalendar from "react-calendar";
import React, { useState } from "react";
import moment from "moment";
import "react-calendar/dist/Calendar.css";

const Calendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (v: string) => {
        console.log(moment(v).format("YYYYMMDD"));
    }

    const formatDay = (l: any, date: string) => {
        return moment(date).format("D");
    }


    return (
        <StyledCalendarWrap>
            <StyledReactCalendar
                onChange={setDate}
                value={date}
                calendarType={"US"}
                formatDay={formatDay}
            />
        </StyledCalendarWrap>
    )
}

const StyledCalendarWrap = styled.div`
    height: 310px;
    margin-bottom: 8px
`

const StyledReactCalendar = styled(ReactCalendar)`
    border: 0px solid #fff !important;

    .react-calendar__navigation {
        height: 48px;
        background-color: #80DEEA;
        margin-bottom: 0;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        font-weight: 600;
    }

    .react-calendar__viewContainer {
        padding-top: 10px;
        background-color: #E0F7FA;
        height: 260px;
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
    }

    .react-calendar__month-view__weekdays {
        color: #868E96;
        margin-bottom: 10px;
    }

    .react-calendar__month-view__days {
        font-size: 14px;
        height: 200px;
    }

    .react-calendar__navigation__label__labelText {
        font-weight: 600;
    }
`

export default Calendar;