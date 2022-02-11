import styled from "styled-components";
import ReactCalendar from "react-calendar";
import React, { useState } from "react";
import moment from "moment";

const Calendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (e: any) => {
        console.log(e);
        console.log(moment(e).format("YYYYMMDD"))
    }

    return (
        <StyledCalendar>
            <ReactCalendar
                onChange={onChange}
                value={date}
            />
        </StyledCalendar>
    )
}

const StyledCalendar = styled.div`
    height: 330px;
    border: 1px solid #ddd;
    margin-bottom: 8px
`

export default Calendar;