function validate() {
    var uname = document.getElementById("username").value;
    var pwd = document.getElementById("passwd").value;

    if (uname == "roshanali339lps@gmail.com" && pwd == "xtremer339")
    {
        window.location.href="./admin.html";
    }
    else
    {
        document.getElementById("error").innerHTML = "Invalid username or password<br>"
    }
}