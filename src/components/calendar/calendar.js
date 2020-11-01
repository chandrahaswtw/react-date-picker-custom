import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar-pane';
import moment from 'moment';
import './calendar.css';

const CalendarComp = (props) => {

    const [calState, setCalState] = useState({
        style: {},
        calendarOpenStyle: { top: props.posY, left: props.posX, opacity: 1, transform: "translateX(-92%) translateY(1.6rem)" }
    })
    useEffect(
        () => {
            setCalState(
                (calState) => {
                    return {
                        ...calState,
                        style: { ...calState.calendarOpenStyle }
                    }
                })

        }, [props])

    const onSelect = (e) => {
        console.log(e.format("MM/DD/YYYY"));
        props.dateChangeHandler(e.format("MM/DD/YYYY"));
    }

    let selectTheDate = null;
    if (props.selectedDate)
        selectTheDate = props.selectedDate;
    else
        selectTheDate = new Date();

    return (<div className="Calendar-wrapper" style={calState.style}>
        <Calendar date={moment(selectTheDate, "MM/DD/YYYY")} onSelect={onSelect} />
    </div>)
}

export default CalendarComp;