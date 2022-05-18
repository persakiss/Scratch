let spaceship = {
    passengers: [{passenger1: 'Dino', passenger2: 'Adrian'}],
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
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
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
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
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
