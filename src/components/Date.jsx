'use client'
import { useState } from "react";

const Date = () => {
    const [date, setDate] = useState("");
    console.log(date);
    return (
        <div>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full mt-3"
            />
        </div>
    )
}

export default Date
