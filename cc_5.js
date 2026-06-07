// Step 2: Create an array of employee objects
const employees = [
    {
        name: "John",
        hourlyRate: 20,
        hoursWorked: 38
    },
    {
        name: "Sarah",
        hourlyRate: 25,
        hoursWorked: 45
    },
    {
        name: "Mike",
        hourlyRate: 18,
        hoursWorked: 50
    },
    {
        name: "Emily",
        hourlyRate: 30,
        hoursWorked: 40
    }
];

// Step 3: Calculate base pay (up to 40 hours)
function calculateBasePay(rate, hours) {
    return rate * Math.min(hours, 40);
}

