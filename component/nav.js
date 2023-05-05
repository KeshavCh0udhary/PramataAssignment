const date = new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
document.querySelector("#date").innerHTML = date + " &nbsp;";