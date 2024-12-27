let button = document.querySelector("#age-btn");
let input = document.querySelector(".age-date-input");
let ageyear = document.querySelector("#ageresult");
let agemonths = document.querySelector("#agemonths");
let agedays = document.querySelector("#agedays");
let agehours = document.querySelector("#agehours");
let ageminutes = document.querySelector("#ageminutes");
let ageseconds = document.querySelector("#ageseconds");
button.addEventListener("click", () => {
    if (input.value === '') {
        alert("Select Your your BirthDay First...");
    }
    else {
        const dob = new Date(input.value);
        dob_year = dob.getFullYear();
        dob_month = dob.getMonth();
        dob_day = dob.getDate();
        dob_hours = dob.getHours();
        dob_minutes = dob.getMinutes();
        dob_seconds = dob.getSeconds();
        let now = new Date();
        let now_year = now.getFullYear();
        console.log("Current Year :", now_year, " DOB Year :", dob_year)
        let DOB = now_year - dob_year;
        let DOB_M = DOB * 12;
        let DOB_D = DOB * 365;
        let DOB_H = DOB * 365 * 24;
        let DOB_m = DOB * 365 * 24 * 60;
        let DOB_s = DOB * 365 * 24 * 60 * 60;
        // result.textContent = DOB;
        ageyear.innerHTML =`You are ${DOB} years old.`;
        agemonths.innerHTML =`You are ${DOB_M} months old.`;
        agedays.innerHTML =`You are ${DOB_D} days old.`;
        agehours.innerHTML =`You are ${DOB_H} hours old.`;
        ageminutes.innerHTML =`You are ${DOB_m} minutes old.`;
        ageseconds.innerHTML =`You are ${DOB_s} seconds old.`;
        
    }
})
