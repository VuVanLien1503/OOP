class Phone {
    constructor(check, pin, {name: nameSim, number: numberSim}, {text: textSend, phone: phoneSend}, {
        phoneTo: phone,
        textTo: text
    }) {
        this.pin = pin;
        this.sim = {name: nameSim, number: numberSim};
        this.outBox = {text: textSend, phone: phoneSend};
        this.inBox = {phoneTo: phone, textTo: text};
        this.check = check;
    }

    display() {
        let outPut = "";
        for (let i = 0; i < this.inBox.length; i++) {
            outPut += this.inBox[i].phone + "<br>" + this.inBox[i].text + "<br>"
        }
        return outPut;
    }

    getCheck() {
        return this.check;
    }

    getPin() {
        return this.pin;
    }

    getSim() {
        return this.sim;
    }

    getSms() {
        return this.outBox;
    }

    getSmsTo() {
        return this.inBox;
    }

    setCheck(check) {
        this.check = check;
    }

    setPin() {
        if (this.pin < 99) {
            this.pin += 1;
        } else if (this.pin <= 5) {
            this.check = false;
        }

    }

    setSim(name, number) {
        this.pin--;
        this.sim =
            {
                name: name,
                number: number
            };
    }

    setSendSms(text, phone) {
        this.pin--;
        this.outBox.push({
            text: text,
            phone: phone
        })

    }

    setSmsTo(phone, text) {
        this.pin--;
        this.inBox = {
            phoneTo: phone,
            textTo: text
        };
    }

    //Tao Phuong thuc OnOff
    getOnOff() {
        this.pin--;
        let check = this.check;
        if (this.check === true) {
            this.check = false;
        } else {
            this.check = true;
        }
        return check;
    }


}


let phoneA = new Phone(true, 66, {name: "vinaphone", number: "000"}, {
    name: "NoiDungSMSA",
    phone: "0000"
}, {phoneTo: "0000", textTo: "Noi dung SMS den"});
let phoneB = new Phone(true, 88, {name: "VietTel", number: "001"}, {
    text: "NoiDungSMSB",
    phone: "0001"
}, {phoneTo: "0000", textTo: "Noi dung SMS den"});
let pin = phoneA.getPin();
let text = "";
let arraySendSms = [{
    text: "Noi dung",
    phone: "098"
}];
let arraySmsTo = [{
    phoneTo: "So Dien Thoai Gui SMS",
    textTo: "Noi Dung Text Gui Den"
}]

// let phoneB = new Phone(88);
function inBox() {
    let check = phoneA.getCheck();
    if (check !== true) {
        text = "<p id='showInbox'>"
        document.getElementById("onOff").innerHTML = text;
        let a = "";
        for (let i = 0; i < arraySendSms.length; i++) {
            a += arraySendSms[i].phone + "<br>" + arraySendSms[i].text + "<br>" + "<br/>";
            document.getElementById("showInbox").innerHTML = a;
        }
    }
    console.log(check);
}

function charge() {
    pin = phoneA.getPin();
    phoneA.setPin();
    document.getElementById("showPin").innerHTML = "Pin: " + pin + " %";
}

function changeSim() {
    phoneA.setSim(prompt("Nha-Mang:"), prompt("NumberPhone"));
    let sim = phoneA.getSim().name;
    let numberSim = phoneA.getSim().number;
    pin = phoneA.getPin();
    document.getElementById("showSim").innerHTML = sim;
    document.getElementById("numberSim").innerHTML = numberSim;
    document.getElementById("showPin").innerHTML = "Pin: " + pin + " %";
}

function sms() {
    let check = phoneA.getCheck();
    if (check !== true) {
        // phoneA.setPin(pin-=2);
        text = "<div>\n" +
            "<input id='text' style=\"height: 150px;width: 220px\"><br><br>\n" +
            "<button onclick=\"sendSms()\">Send</button>\n" + "<input id='phone'type='number' >" +
            "</div>\n";
        document.getElementById("onOff").innerHTML = text;
        pin = phoneA.getPin();
        document.getElementById("showPin").innerHTML = "Pin: " + pin + " %";

    }
    console.log(check);

}

function sendSms() {
    if (phoneA.getCheck() !== true) {
        let textSmsSend = document.getElementById("text").value;
        let phone = document.getElementById("phone").value;
        phoneA.setSendSms(textSmsSend, phone);
        if (textSmsSend !== "") {
            arraySendSms.push({
                text: textSmsSend,
                phone: phone
            })
        }
        pin = phoneA.getPin();
        document.getElementById("showPin").innerHTML = "Pin: " + pin + " %";
        console.log(arraySendSms);
    }
}

function smsTo() {
    console.log(phoneB.getSms())
    if (phoneA.getCheck() !== true) {
        text = " <p id='showSmsTo'></p>"
        document.getElementById("onOff").innerHTML = text;

        let textTo = phoneB.getSms().text
        let phoneTo = phoneB.getSms().phone;

        arraySmsTo.push({textTo: textTo, phoneTo: phoneTo})
        console.log(textTo);
        console.log(phoneTo);
        console.log(arraySmsTo);
        for (let i = 0; i < arraySmsTo.length; i++) {
            let a = arraySmsTo[i];
            document.getElementById("showSmsTo").innerHTML = " Phone: " + a.phoneTo + "<br>" + " NoiDung: " + a.textTo;
        }
    }
    pin = phoneA.getPin();
    document.getElementById("showPin").innerHTML = "Pin: " + pin + " %";

}


function start() {
    let check = phoneA.getOnOff();
    pin = phoneA.getPin();
    if (check) {
        text = " <img src=\"images.jpg\" height=\"200px\" width=\"230px\"\n id='text'>"
        document.getElementById("onOff").innerHTML = text;
        phoneA.getPin()
    } else {
        text = " <p style=\"height: 170px;width: 230px ;background: black\">"
        document.getElementById("onOff").innerHTML = text;
    }
    document.getElementById("showPin").innerHTML = "Pin: " + pin + " %";
    console.log(check);
}

// function onOff() {
//     if (phoneA.getOnOff()===true){
//         let text="";
//         text=" <input style=\"height: 170px ;width: 230px\" id='text'>"
//         document.getElementById("onOff").innerHTML=text;
//         let pin =phoneA.getPin()
//         let sim = phoneA.getSim()
//         document.getElementById("pin").innerHTML="Pin :"+pin+"%";
//     }else {
//
//         text=" <p style=\"height: 170px;width: 230px ;background: black\">"
//         document.getElementById("onOff").innerHTML=text;
//         document.getElementById("pin").innerHTML="Pin :"+pin+"%";
//
//     }
// // requestAnimationFrame(phoneA.getPin);
// }
//
// function sim() {
//     document.getElementById("pin").innerHTML = "Pin : " + phoneA.getPin() + "%";
//     document.getElementById("sim").innerHTML = phoneA.getSim(prompt("Sim")) + ".:!";
//
//
// }
