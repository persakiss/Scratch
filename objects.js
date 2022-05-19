/////////// Methods ////////////////////////

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
    retreat() {
        console.log(retreatMessage)
    },
    takeOff() {
        console.log('Spim... Borp... Glix... Blastoff!')
    }
};

alienShip.retreat();
alienShip.takeOff();

////////////// End Methods ////////////////

let spaceship = {
    passengers: [{ passenger1: 'Dino', passenger2: 'Adrian' }],
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
        }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        }
    }
};

let capFave = spaceship.crew.captain['favorite foods'][0]; // "cookies"
let firstPassenger = spaceship.passengers[0]; // returns  the array



/////////////// Pass By Reference ///////////////

let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
};

const greenEnergy = something => {
    something['Fuel Type'] = 'avocado oil';
}


const remotelyDisable = object => {
    object.disabled = true;
}


greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship); // { 'Fuel Type': 'avocado oil',
////////////////////////// homePlanet: 'Earth',
////////////////////////// disabled: true }

//////////////////////////////////////




//////////////// For In Objects //////////////////////
let spaceship = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) }
        },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};

for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
} /////////////////////captain: Lily
///////////////////////chief officer: Dan
///////////////////////medic: Clementine
///////////////////////translator: Shauna

for (let crewMember in spaceship.crew) {
    console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
}////////////////////Lily: Computer Engineering
///////////////////////Dan: Aerospace Engineering
///////////////////////Clementine: Physics
///////////////////////Shauna: Conservation Science

//////////////////////////////////////////////////








//////////// The 'This' keyword ///////////////
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return (`I am ${this.model} and my current energy level is ${this.energyLevel}`)
    }
};

console.log(robot.provideInfo()); ///// 
//////// I am 1E78V2 and my current energy level is 100

/////////////








///////////// Getter methods /////////////////
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        if (typeof this._energyLevel == 'number') {
            return (`My current energy level is ${this._energyLevel}`);
        } else {
            return ('System malfunction: cannot retrieve energy level');
        }
    }
};

console.log(robot.energyLevel); // Notice, no () on getter
/////////// Logs My current energy level is 100

///////////////////////////////////////////









//////////// Setter Methods ///////////////

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
        if (typeof this._numOfSensors === 'number') {
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },
    set numOfSensors(num) {
        if (typeof num == 'number' && num >= 0) {
            this._numOfSensors = num;
        } else {
            console.log('Pass in a number that is greater than or equal to 0');
        }
    }
};

robot.numOfSensors = 100; // Sets value to 100 using setter method
console.log(robot.numOfSensors); /// Logs '100'

/////////////////////////////////////////////






/////////// Factory Functions ////////////////

// Factory function, returns an object 
const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop');
        }
    }
}

// Using factory function to make tinCan
const tinCan = robotFactory("P-500", true);

tinCan.beep(); /// 'Beep Boop' 

////////////////////////////////////////////




/////////////// Property Values Shorthand ////////////
function robotFactory(model, mobile) {
    return {
        model,
        mobile,
        beep() {
            console.log('Beep Boop');
        }
    }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)
////////////////////////////////////////////////////////




////////////// Destructured Assignment /////////////
//// Destructured Assignment
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  // Extract the robot.functionality object into const functionality
  const { functionality } = robot;
  functionality.beep(); // logs Beep Boops
  ////////////////////////////////





  //////////////// Built In Object Methods ////////////////
  const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// Object keys returns left keys
const robotKeys = Object.keys(robot);
console.log(robotKeys);

// Object.entires returns entries
const robotEntries = Object.entries(robot);
console.log(robotEntries);

// Object.assign(target, source)
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot);
/////////////////////////////////////////////////////////