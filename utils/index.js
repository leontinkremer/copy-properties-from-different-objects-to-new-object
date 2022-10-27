// Copy all properties from one or more source objects to a target object with Object.assign

const adressLeontinKremer = {
  streetAndHouse: "Am Kipphut 31",
  zipAndCity: "35614 Sarstedt",
};

Object.assign(adressLeontinKremer, {
  zipAndCity: "35516 Münzenberg",
});

console.log(adressLeontinKremer);
