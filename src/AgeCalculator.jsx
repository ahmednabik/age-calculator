import React, { useState } from "react";

function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const calculateAge = () => {
    const currentDate = new Date();
    const birthDate = new Date(dob);

    let yearDiff = currentDate.getFullYear() - birthDate.getFullYear();
    let monthDiff = currentDate.getMonth() - birthDate.getMonth();
    let dayDiff = currentDate.getDate() - birthDate.getDate();

    // If the day of birth is greater than the current day, adjust the month and day
    if (dayDiff < 0) {
      monthDiff -= 1;

      // Calculate the number of days in the birth month
      const daysInBirthMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();

      dayDiff = daysInBirthMonth + dayDiff;
    }

    // If the month difference is negative, adjust the year
    if (monthDiff < 0) {
      yearDiff -= 1;
      monthDiff += 12; // There are 12 months in a year
    }

    setAge({ years: yearDiff, months: monthDiff, days: dayDiff });
  };

  return (
    <div className="main">
      <h1>Madi's Age Calculator</h1>
      <div className="input-container">
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button className="age-btn" onClick={calculateAge}>
          Calculate
        </button>
      </div>
      <div className="display">
        <p>Years: {age.years}</p>
        <p>Months: {age.months}</p>
        <p>Days: {age.days}</p>
      </div>
    </div>
  );
}

export default AgeCalculator;
