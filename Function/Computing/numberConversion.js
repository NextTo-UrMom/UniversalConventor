function convert() {
    let From = document.getElementById("From").value
    let To = document.getElementById("To").value
    let input = document.getElementById("input").value
    let output = document.getElementById("output")
    let BinaryData = "";
    
    switch (From) {
        case "0":
            BinaryData = DecToBi(input)
            break;
        case "1":
            BinaryData = input
            break;
        case "2":
            BinaryData = OctToBi(input)
            break;
        case "3":
            BinaryData = HexToBi(input)
            break;
    }
    switch (To) {
        case "0":
            output.innerHTML = BiToDec(BinaryData)
            break;
        case "1":
            output.innerHTML = BinaryData
            break;
        case "2":
            output.innerHTML = BiToOct(BinaryData)
            break;
        case "3":
            output.innerHTML = BiToHex(BinaryData)
            break;
    }

}

//decimal to binary
function DecToBi(uin) {
    if (uin == 0 || uin < 0) return 0

    let input = uin
    let out = "";
    while (input > 0) {
        out += input % 2
        input = Math.floor(input / 2)
    }
    out = out.split("").reverse().join("")
    return out
}

//binary to decimal
function BiToDec(uin) {
    let input = uin + ""
    input = input.split("").reverse();
    let out = 0
    for (let j = 0; j < input.length; j++) {
        out += input[j] * Math.pow(2, j)
    }
    return out
}

//binary to hexadecimal
function BiToHex(uin) {
    let HexData = ["A", "B", "C", "D", "E", "F"]
    uin = uin + ""
    let out = ""
    uin = uin.split("").reverse().join("")
    if (uin.length % 4 != 0) {
        if (uin.length % 4 == 1) {
            uin += "000"
        } else if (uin.length % 4 == 2) {
            uin += "00"
        } else if (uin.length % 4 == 3) {
            uin += "0"
        }
    }
    let input = uin.match(/.{1,4}/g)
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].split("").reverse().join("")
        input[i] = BiToDec(input[i])
        if (input[i] >= 10) {
            input[i] = HexData[input[i] % 10]
            out += input[i]
        } else {
            out += input[i]
        }
    }
    return out.split("").reverse().join("")
}

//hexadecimal to binary
function HexToBi(uin) {
    uin = uin + ""
    let input = uin.split("")
    let out = ""
    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case "A":
                out += DecToBi(10)
                break;
            case "B":
                out += DecToBi(11)
                break;
            case "C":
                out += DecToBi(12)
                break;
            case "D":
                out += DecToBi(13)
                break;
            case "E":
                out += DecToBi(14)
                break;
            case "F":
                out += DecToBi(15)
                break;
            default:
                out += DecToBi(input[i])
                break;
        }
    }
    return out
}

//Binary to octal
function BiToOct(uin) {
    uin = uin + ""
    uin = uin.split("").reverse().join("")
    if (uin.length % 3 != 0) {
        if (uin.length % 3 == 1) {
            uin += "00"
        } else if (uin.length % 3 == 2) {
            uin += "0"
        }
    }
    let input = uin.match(/.{1,3}/g)
    let out = ""
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].split("").reverse().join("")
        out += BiToDec(input[i])
    }
    return out.split("").reverse().join("")
}

//octal to binary
function OctToBi(uin) {
    uin = uin + ""
    let input = uin.split("")
    let out = ""
    for (let i = 0; i < input.length; i++) {
        input[i] = DecToBi(input[i])
        if (input[i].length < 3 && i != 0) {
            input[i] = input[i].split("").reverse().join("")
            if (input[i].length % 3 == 1) {
                input[i] += "00"
            } else if (input[i].length % 3 == 2) {
                input[i] += "0"
            }
            input[i] = input[i].split("").reverse().join("")
        }
        out += input[i]
    }
    return out
}