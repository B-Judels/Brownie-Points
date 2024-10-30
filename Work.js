let count = 0;

document.getElementById("counter").innerHTML = `${count}`;

document.getElementById("btn").addEventListener("click", function() {
    count++;
    document.getElementById("counter").innerHTML = `${count}`;
});