let From;
let To;
let input;
let output = document.getElementById("output");
function convert() {
    From = document.getElementById("From").value
    To = document.getElementById("To").value
    if (document.getElementById(From).getAttribute("class") == "metric" && document.getElementById(To).getAttribute("class") == "metric") {
        metric();
        console.log("It works");
    }
    else if (document.getElementById(From).getAttribute("class") == "british" && document.getElementById(To).getAttribute("class") == "british") {
        british();
    } else {
        british_and_metric();
    }
}
function metric() {
    input = document.getElementById("input").value
    let metre;
    switch (From) {
        case "mm":
        metre = input/1000;
            break;
        case "cm":
            metre = input/100;
            break;
        case "m":
            metre = input;
            break;
        case "km":
            metre = input*1000;
            break;
    }
    switch (To) {
        case "mm":
        output.innerHTML = metre*1000 + To
            break;
        case "cm":
            output.innerHTML = metre*100 + To
            break;
        case "m":
            output.innerHTML = metre*1 + To
            break;
        case "km":
            output.innerHTML = metre/1000 + To
            break;
    }
}
function british() {
    let inches;
    input = document.getElementById("input").value
    switch(From){
        case "in":
            inches = input
        break;
        case "ft":
            inches = input*12
        break;
        case "yd":
            inches = input*36
        break;
        case "furlong":
            inches = input*7920
        break;
        case "mi":
            inches = input*63360
        break;
        case "L":
            inches = input*190193.71981;
        break;
    }
    switch(To){
        case "in":
            output.innerHTML = inches + To
        break;
        case "ft":
            output.innerHTML = inches/12+To
        break;
        case "yd":
            output.innerHTML = inches/36+To
        break;
        case "furlong":
            output.innerHTML = input/7920+To
        break;
        case "mi":
            output.innerHTML = input/63360+To
        break;
        case "L":
            output.innerHTML = input/190193.71981+To
        break;
    }
}
function british_and_metric() {

}