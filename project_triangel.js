

document.addEventListener('DOMContentLoaded', (event) => {
    for (let line = "#"; line.length < 8; line += "#") {

        document.getElementById("triangle").innerText += line + "\r\n";
    }

})