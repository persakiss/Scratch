function hasTreat(treat) {
    const treatsArr = ['cookie', 'cake', 'muffin', 'pie', 'ice cream'];
    if (treatsArr.includes(treat) == true) {
        return true;
    } else  {
        return false;
    }
}

if (hasTreat("cookie")) { // You should have a cookie in the treatsArr array.
    console.log("You have a cookie!");
} else {
    console.log("You have no cookie."); // This is wrong. You should have a cookie. 
}

const randomValue = (min, max) => { 
    const val = Math.floor(Math.random() * max) + (min - 1);
    return val;
  };
  console.log(randomValue(2,6))