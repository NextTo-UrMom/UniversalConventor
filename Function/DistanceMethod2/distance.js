let input;
let output = document.getElementById("output");
let conversion_data = [
    [1,1/10,1/1000,1/1e+6,1/25.4,1/304.8,1/914.4,1/201168,1/1609e+6],//millimetre
    [1/0.1,1,1/100,1/1e+5,1/2.54,1/30.48,1/91.44,1/20116.8,1/160934],//centimetre
    [1/0.001,1/0.01,1,1/1000,1/0.0254,1/0.3048,1/0.9144,1/201.168,1/1609.34],//metre
    [1/1e-6,1/1e-5,1/0.001,1,1/2.54e-5,1/0.0003048,1/0.0009144,1/0.201168,1/1.60934],//kilometre
    [25.4,2.54,0.0254,2.54e-5,1,1/12,1/36,1/7920,1/63360],//inch
    [304.8,30.48,0.3048,0.0003048,12,1,1/3,1/660,1/5280],//foot
    [914.4,91.44,0.9144,0.0009144,36,3,1,1/1760],//yard
    [201168,20116.8,201.168,0.201168,7920,660,220,1,1/8],//furlong
    [1609e+6,160934,1609.34,1.60934,63360,5280,1760,8,1]//miles
]
function convert() {
    let From = document.getElementById("From").value 
    let To = document.getElementById("To").value 
    input = document.getElementById("input").value
    output.innerHTML = input*conversion_data[From][To]
}