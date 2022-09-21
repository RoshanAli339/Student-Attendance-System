function addStudent()
{
    var sName = document.getElementById('sName').value
    var number = document.getElementById('number').value
    var year = document.getElementById('year').value
    var percentage = document.getElementById('percentage').value

    var data = "\n"+sName+", "+number+", "+year+", "+percentage
    console.log(data);
    const fs = require("fs");
    fs.appendFileSync("attendance.csv", data)
}