onload = fetch("./attendance.csv").then(res => {
    return res.text()
}).then(data => {
    var result = data.split("\n").map(e => {
        return e.split(",")
    })
    
    result.sort(function (a,b) {
        return b[3] - a[3];
    });

    var heading = ["S.No", "Name", "Regd. No.", "Year of study", "Percentage"];
    var head = "<thead class=\"table-dark\">\n";
    var html = "";

    for (let i = 0; i < heading.length; ++i) {
        head += "\t<th scope=\"col\">" + heading[i] + "</th>\n";
    }
    head += "</thead>";
    for (let i = 0; i < result.length; i++) {
        if (i == 0)
        {
            html += "<tr class=\"bg-success\">"
        }
        else if (i == result.length - 1){ 
            html += "<tr class=\"bg-danger\">\n"
        }
        else
        {
            html += "<tr>\n"
        }
        html += "\t<td>"+(i+1)+"</td>"
        for (let j = 0; j < result[i].length; ++j) {
            html += "\t<td>" + result[i][j] + "</td>\n"
        }
        html += "</tr>\n"
    }
    document.getElementById("mytable2").innerHTML = head + html;
})