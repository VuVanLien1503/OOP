class Battery {
    constructor(energy) {
        this.energy = energy;
    }

    setEnergy(number) {
        this.energy = number;
    }

    getEnergy() {
        return this.energy;
    }

    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}

class FlashLamp {
    constructor(battery) {
        this.status = false;
        this.battery = battery;
    }

    setBattery(battery) {
        this.battery = battery;
    }

    getBattery() {
        return this.battery.getEnergy();
    }

    getLight() {
        let text = "";
        if (this.status) {
            text = "Lighting"
        } else {
            text = "Not Lighting"
        }
        return text;
    }

    turnOn() {
        if (this.status) {
            this.status = false;
        } else {
            if (pin.getEnergy() !== 0) {
                this.status = true
            }

        }

    }
}

let pin = new Battery();
pin.setEnergy(10);
let den = new FlashLamp(pin);

function onOff() {
    if (den.status) {
        den.turnOn();
        pin.decreaseEnergy();
        let text = den.getLight();
        let energy = pin.getEnergy();
        document.getElementById("pin").innerHTML = energy;
        document.getElementById("text").innerHTML = text;
    } else {
        den.turnOn();
        pin.decreaseEnergy();
        let text = den.getLight();
        let energy = pin.getEnergy();
        document.getElementById("pin").innerHTML = energy;
        document.getElementById("text").innerHTML = text;

    }
}