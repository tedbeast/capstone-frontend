import React from 'react';
import './Holiday.css';
const holidays = [
{date: "Monday, Jan 1, 2024", name: "new Year's Day",},
{date: "Monday, Jan 15, 2024", name: "MLK Jr. Day"},
{date: "Monday, May 17, 2024", name: "Memorial Day"},
{date: "Tuesday, July 4, 2024", name: "Independence Day"},
{date: "Monday, Sept. 2, 2024", name: "Labor Day"},
{date: "Thursday, Nov. 28, 2024", name: "Thanksgiving"},
{date: "MOnday, Dec. 25, 2024", name: "Christmas"},
];
const HolidayLeave =()=> {
const listItems = holidays.map((holiday, index) => (
<li key={index}>
{holiday.date} - {holiday.name}
</li>
));

return (
    <div className = "holiday-container">
        <h2 className="year-header">2024 Holidays</h2>
        <ul className="holiday-list">{listItems}</ul>
    </div>
    );  

};
export default HolidayLeave;