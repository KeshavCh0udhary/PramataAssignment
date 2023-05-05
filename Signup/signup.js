let data = localStorage.getItem('data') || [];

document.getElementById("button").addEventListener("click", () => {
    let UserName = document.getElementById("email").value;
    if (UserName == "") {
        return;
    }
    data.includes(UserName) ? console.log("ok") : data.push(UserName);
    localStorage.setItem('message', JSON.stringify(UserName));
    localStorage.setItem('data', JSON.stringify(data));
    window.location.href = "./otp.html";
});

document.getElementById("LoGoo").addEventListener("click", () => {
    window.location.href = "./news.html";
})