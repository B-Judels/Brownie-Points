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
    if(count >= 500)
    {
        count -= 500;
        document.getElementById("counter").innerHTML = `Points: ${count}`;
    }else{
        alert("You do not have enough brownie points to redeem :( " + ` [Need ${500 - count}]`)
    }
    
});

document.getElementById("redeem2").addEventListener("click", function() {
    if(count >= 1000)
    {
        count -= 1000;
        document.getElementById("counter").innerHTML = `Points: ${count}`;
    }else{
        alert("You do not have enough brownie points to redeem :( " + ` [Need ${1000 - count}]`)
    }
    
});

document.getElementById("redeem3").addEventListener("click", function() {
    if(count >= 1500)
    {
        count -= 1500;
        document.getElementById("counter").innerHTML = `Points: ${count}`;
    }else{
        alert("You do not have enough brownie points to redeem :( " + ` [Need ${1500 - count}]`)

    }
    
});

document.getElementById("redeem4").addEventListener("click", function() {
    if(count >= 2000)
    {
        count -= 2000;
        document.getElementById("counter").innerHTML = `Points: ${count}`;
    }else{
        alert("You do not have enough brownie points to redeem :( " + ` [Need ${2000 - count}]`)
        
    }
    
});