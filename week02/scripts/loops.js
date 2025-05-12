const DAYS = 6;
const LIMIT = 30;
let studentReport = [11,42,33,64,29,37,44];


for (let i = 0; i<studentReport.length; i++) {
    report = studentReport[i];
    if (report < LIMIT) {
        console.log(report);
    }
}


studentReport.forEach(report => {
    if (report < LIMIT) {
        console.log(report);
    }
});