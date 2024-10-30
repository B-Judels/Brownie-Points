let count = 0;

document.getElementById("counter").innerHTML = `Points: ${count}`;


document.getElementById("btn1").addEventListener("click", function() {
    count++;
    document.getElementById("counter").innerHTML = `Points: ${count}`;
});

document.getElementById("btn10").addEventListener("click", function() {
    count += 10;
    document.getElementById("counter").innerHTML = `Points: ${count}`;
});

document.getElementById("btn50").addEventListener("click", function() {
    count += 50;
    document.getElementById("counter").innerHTML = `Points: ${count}`;
});

document.getElementById("btn100").addEventListener("click", function() {
    count += 100;
    document.getElementById("counter").innerHTML = `Points: ${count}`;
});