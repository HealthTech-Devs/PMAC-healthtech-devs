import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from 'react';
import ReactDatePicker from "react-datepicker";


const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021,6 , 0),
        end: new Date(2021, 6, 0)
    },
    {
        title: "Vacation",
        allDay: true,
        start: new Date(2021,6 , 0),
        end: new Date(2021, 6, 0)
    },
    {
        title: "Conference",
        allDay: true,
        start: new Date(2021,6 , 0),
        end: new Date(2021, 6, 0)
    },
]

function Schedular() {
    return (
        <div> 
            <Calendar localizer={localizer} events={events} 
            startAccessor='start' endAccessor='end' style={{height: 500, margin: '50px'}} />
        </div>

    );
}