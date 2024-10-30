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

document.getElementById("redeem1").addEventListener("click", function() {
    count -= 500;
    document.getElementById("counter").innerHTML = `Points: ${count}`;
});

document.getElementById("redeem2").addEventListener("click", function() {
    count -= 1000;
    document.getElementById("counter").innerHTML = `Points: ${count}`;
});

document.getElementById("redeem3").addEventListener("click", function() {
    count -= 1500;
    document.getElementById("counter").innerHTML = `Points: ${count}`;
});

document.getElementById("redeem4").addEventListener("click", function() {
    count -= 2000;
    document.getElementById("counter").innerHTML = `Points: ${count}`;
});