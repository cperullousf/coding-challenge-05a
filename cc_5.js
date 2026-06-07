// Step 2: Create an array of employee objects
const employees = [
    {
        name: "Mitchell",
        hourlyRate: 20,
        hoursWorked: 38
    },
    {
        name: "Max",
        hourlyRate: 25,
        hoursWorked: 45
    },
    {
        name: "Storf",
        hourlyRate: 18,
        hoursWorked: 50
    },
    {
        name: "Ryan",
        hourlyRate: 30,
        hoursWorked: 40
    }
];

// Step 3: Calculate base pay (up to 40 hours)
function calculateBasePay(rate, hours) {
    return rate * Math.min(hours, 40);
}

// Step 4: Calculate overtime pay
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        return (hours - 40) * rate * 1.5;
    }
    return 0;
}

// Step 5: Calculate taxes (15%)
function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}

// Step 6: Process payroll
function processPayroll(employee) {

    const basePay = calculateBasePay(
        employee.hourlyRate,
        employee.hoursWorked
    );

    const overtimePay = calculateOvertimePay(
        employee.hourlyRate,
        employee.hoursWorked
    );

    const grossPay = basePay + overtimePay;

    const taxes = calculateTaxes(grossPay);

    const netPay = grossPay - taxes;

    return {
        name: employee.name,
        basePay: basePay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        netPay: netPay.toFixed(2)
    };
}

// Step 7: Generate payroll report
for (const employee of employees) {
    const payrollReport = processPayroll(employee);
    console.log(payrollReport);
}

