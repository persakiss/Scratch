// simple reduce

numbers = [ 3, 5, 8, 9, 6 ];

const reduceArray = numbers.reduce((acc, number) => acc + number);

// console.log(reduceArray);

// intermediate reduce

const users = [
  {
    username: "edie",
    location: "toronto"
  },
  {
    username: "simon",
    location: "vancouver"
  },
  {
    username: "arman",
    location: "montreal"
  },
  {
    username: "jman",
    location: "montreal"
  }
];

const usersByCity = users.reduce(
  (acc, user) => ({
    ...acc,
    [user.location]: (acc[user.location] || 0) + 1
  }), {}
)


console.log(usersByCity)


// advanced example

const initialState = {
  coins: 0,
  health: 100
};

const actionsArray = [
  { type: 'ADD_COINS', payload: 20 },
  { type: 'SUBTRACT_HEALTH', payload: 5 }
]

const marioReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_COINS':
      return {
        ...state,
        coins: state.coins + action.payload
      };
    case 'SUBTRACT_COINS':
      return {
        ...state,
        coins: state.coins - action.payload
      };
    case 'ADD_HEALTH':
      return {
        ...state,
        health: state.health + action.payload
      };
    case 'SUBTRACT_HEALTH':
      return {
        ...state,
        health: state.health - action.payload
      };
    default:
      return state;
  }
}

const currentState = actionsArray.reduce(marioReducer, initialState);

console.log(currentState);





















