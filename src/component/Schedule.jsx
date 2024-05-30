import React, { useState } from "react";
import DatePicker from "react-datepicker";
export default function App() {
    const [date, setDate] = useState(new Date());
    return (

        <div style={{ height: 400, width: 600, paddingTop: 10, backgroundColor: "GrayText" }}>
            <div>
                <label>
                    Schedule You
                </label>
            </div>
            <div style={{ margin: 100 }}>
                <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>
        </div>
    );
}