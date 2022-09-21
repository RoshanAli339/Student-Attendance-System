onload = fetch("./attendance.csv").then(res => {
    return res.text()
}).then(data => {
    var result = data.split("\n").map(e => {
        return e.split(",")
    })
    var heading = ["S.No", "Name", "Regd. No.", "Year of study", "Percentage"];
    var head = "<thead class=\"table-dark\">\n";
    var html = "";

    for (let i = 0; i < heading.length; ++i) {
        head += "\t<th scope=\"col\">" + heading[i] + "</th>\n";
    }
    head += "</thead>";
    for (let i = 0; i < result.length; i++) {
        html += "<tr>\n\t<td>" + (i+1) + "</td>" 
        for (let j = 0; j < result[i].length; ++j) {
            html += "\t<td>" + result[i][j] + "</td>\n"
        }
        html += "</tr>\n"
    }

    document.getElementById("mytable").innerHTML = head + html;

})