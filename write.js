const fs = require('fs')

var data = "\nShreyas Parimi, Y21CS164, I/IV BTech, 93.62"
fs.appendFileSync("./attendance.csv", data)