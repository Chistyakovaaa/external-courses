class VacuumCleaner {
  constructor() {
    this.power = 220;
    this.position = 'turnOff';
    this.cleaningMode = 'dry';
  }

  turnOn() {
    this.position = 'turnOn';
    console.log(this.position);
  }

  turnOff() {
    this.position = 'turnOff';
    console.log(this.position);
  }

  changeCleaningMode() {
    if (this.position === 'turnOn') {
      if (this.cleaningMode === 'dry') {
        this.cleaningMode = 'wet';
      } else {
        this.cleaningMode = 'dry';
      }
    } else {
      console.log('This device is off');
      return;
    }

    console.log(`Cleaning mode: ${this.cleaningMode}`);
  }

  checkInfo() {
    console.log(`Power: ${this.power}`);
    console.log(`Cleaning mode: ${this.cleaningMode}`);
  }
}

class RobotCleaner extends VacuumCleaner {
  constructor() {
    super();
    this.map = false;
  }

  scan() {
    if (this.position === 'turnOff') {
      console.log('This device is off');
    } else {
      this.map = true;
      console.log('This device is ready');
    }
  }

  checkInfo() {
    console.log(`Power: ${this.power}`);
    console.log(`Cleaning mode: ${this.cleaningMode}`);
    console.log(`Сard status: ${this.map}`);
  }
}

class RobotSoldier extends RobotCleaner {
  constructor() {
    super();
    this.shooting = false;
  }

  shootOn() {
    if (this.position === 'turnOff') {
      console.log('This device is off');
    } else {
      this.shooting = true;
      console.log('This device fires!');
    }
  }

  shootOff() {
    if (this.position === 'turnOff') {
      console.log('This device is off');
    } else {
      this.shooting = false;
      console.log('The device does not fire.');
    }
  }

  checkInfo() {
    console.log(`Power: ${this.power}`);
    console.log(`Сard status: ${this.map}`);
    console.log(`Shooting: ${this.shooting}`);
  }

  checkShooting() {
    console.log(`Shooting: ${this.shooting}`);
  }
}

const vacuumCleaner = new VacuumCleaner();
const robotCleaner = new RobotCleaner();
const robotSoldier = new RobotSoldier();

vacuumCleaner.changeCleaningMode();
robotCleaner.checkInfo();
robotSoldier.turnOn();
