function addStudent()
{
    var name = document.getElementById('name').value
    var number = document.getElementById('number').value
    var year = document.getElementById('year').value
    var percentage = document.getElementById('percentage').value

    const fs = require('fs')
    let data = name+", "+number+", "+year+", "+percentage+"\n"
    fs.appendFileSync('./attendance.csv', data)
}