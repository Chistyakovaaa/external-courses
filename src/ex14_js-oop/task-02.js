/* eslint-disable no-restricted-syntax */
class Devices {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.position = false;
  }

  turnOn() {
    this.position = true;
    console.log(this.position);
  }

  turnOff() {
    this.position = false;
    console.log(this.position);
  }

  getName() {
    return this.name;
  }

  getPower() {
    return this.power;
  }

  getPosition() {
    return this.position;
  }

  checkInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Power: ${this.power}`);
    console.log(`Position: ${this.position}`);
  }
}

class TV extends Devices {
  constructor(...args) {
    super(...args);
    this.channels = 'First';
  }

  changeChannels() {
    if (this.position) {
      if (this.channels === 'First') {
        this.channels = 'NTV';
      } else {
        this.channels = 'First';
      }
    } else {
      console.log('This device is off');
    }
  }
}

class Fridge extends Devices {
  constructor(...args) {
    super(...args);
    this.freezing = false;
  }

  changeFreezing() {
    if (this.position) {
      if (this.freezing) {
        this.freezing = false;
      } else {
        this.freezing = true;
      }
    } else {
      console.log('This device is off');
    }
  }
}

class Oven extends Devices {
  constructor(...args) {
    super(...args);
    this.light = false;
  }

  turnOnLight() {
    if (this.position) {
      if (this.light) {
        this.light = false;
      } else {
        this.light = true;
      }
    } else {
      console.log('This device is off');
    }
  }
}

const tv = new TV('tv', 110);
const fridge = new Fridge('fridge', 200);
const oven = new Oven('oven', 150);
const room = [tv, fridge, oven];

function searchDevice(obj, name) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key].name === name) {
        console.log(`You have ${name} in this room.`);
        return;
      }
    }
  } console.log(`We can not find ${name} in this room.`);
}

function allPower(obj) {
  let power = 0;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key].power) {
        power += obj[key].power;
      }
    }
  }
  console.log(`All power: ${power}`);
}

searchDevice(room, tv);
allPower(room);
