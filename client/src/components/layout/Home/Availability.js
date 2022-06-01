import React, { useState } from 'react'
import { DayPickerSingleDateController } from 'react-dates'
import moment from 'moment'

const Availability = () => {
    const [checkIn, setCheckIn] = useState(moment())
    const [focused, setFocused] = useState(null)
    const [checkInPickerOpen, setCheckInPickerOpen] = useState(false)

    return (
        <div className="availability-container">
            <span className="checkin-date">
                <span className='title'>ARRIVAL DATE</span>
                <span className="date" onClick={() => setCheckInPickerOpen(!checkInPickerOpen)}>
                    <span className="day">{checkIn.format('DD')}</span>
                    <span className="small">
                        <span className="month-year">{checkIn.format('MMM, YYYY')}</span>
                        <span className="weekday">{checkIn.format('dddd')}</span>
                    </span>

                </span>
                {checkInPickerOpen &&
                    <DayPickerSingleDateController
                        date={checkIn}
                        onDateChange={(date) => setCheckIn(date)}
                        focused={focused}
                        onFocusChange={({ focused }) => setFocused(focused)}
                        id="checkIn"
                        block={true}
                    />}
            </span>
        </div >
    )
}

export default Availability