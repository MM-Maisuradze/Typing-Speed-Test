let time = 10, level = 1, result, num = 0 , timeChanger;

let arr = [
    "Hello World!",
    "Happy New Year!",
    "Happy Birthday!"
];

document.getElementById("time").textContent = `You have ${time}seconds`;
document.getElementById("lvl").textContent = `Your level is ${level}`;
document.getElementById("sentence").textContent = `Write this sentence down: ${arr[num]}`;

function timeChange(){
    if(time >0){
    time--;
    document.getElementById("time").textContent = `You have ${time}seconds`;
    } else if(time = 0){
        getResult();
    }
}

function levelChange(){
    time = 10;
    document.getElementById("time").textContent = `You have ${time}seconds`;
    level ++;
    num++;
    document.getElementById("lvl").textContent = `Your level is ${level}`;
    document.getElementById("sentence").textContent = arr[num];
}

function getResult(){
    if(document.getElementById("input").value == arr[num]){
        result = 'Win';
        let speed = arr[num].length / (10 - time);
        document.getElementById("speed").textContent = `Your speed is ${speed}`;
        levelChange(); 
    } else if(document.getElementById("input") != arr[num]){
        result = 'Lose'; 
        console.log(result);
    }   
    document.getElementById("answer").textContent = `You ${result}`;
}

function main(){
    timeChanger = setInterval(timeChange, 1000);
}



document.getElementById("start").addEventListener("click", () => {
    main(); 
})

document.getElementById("end").addEventListener("click", ()=>{
    clearInterval(timeChanger);
    getResult();
})