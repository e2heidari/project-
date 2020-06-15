

document.addEventListener('DOMContentLoaded', (event) => {
    let x = ""
    for (let counter = 0; counter < 7; counter++) {

        x = x + "#"
        ansewer = x + "\r\n"
    }
    document.getElementById("triangle").innerText = ansewer;
})