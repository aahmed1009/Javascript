//object called a window which is the global scope in borwser
const hi = function () {
  console.log("Say Hi");

  console.log(this); //not useful bs htb2a mohma lma n3ml methods in object
  //this here refers to the window(global scope object in the browser)
  //hna bt3ml refer to the window bs msh kol mara hn3mlha fe function ht3ml refer to  the window
};
//let and const are n't added to global scope and  the window object while var is added

//TODO: Using THIS in Methods
//1-object called person
const person = {
  first: "Alaa",
  second: "Ahmed",
  nickName: "Gamal",
  fullName() {
    console.log(`${this.first} ${this.second} = ${this.nickName}   `);
    console.log(this); //object person itself
    //why this would be useful ??why do we care about current object itself that we are insid of it  ?
    //it allows usto refrence these properties or other methods
    //so we can have a methodthat is aware of other contents in object
  },
};
// person.fullName();

const persson = {
  first: "Alaa",
  second: "Ahmed",
  nickName: "Gamal",
  fullName() {
    const { first, second, nickName } = this;
    // console.log(`${first} ${second} Aka ${nickName}   `);
    return `${first} ${second} Aka ${nickName}   `;
  },
  printBio() {
    // fullName(); //kda undefined
    //we nedd to add this to refer to object --> person
    console.log(this);
    const fullName = this.fullName();
    console.log(`${fullName}is a person`);
  },
  laugh: () => {
    console.log(this);
    //the value of this is set to the window which is different from value of this like prinBio which is set to the object
    //FIXME:value of this an arrow function doesn't change
    //it's refernce to the global scopt to the window
    //generally this is why we don't usearrow functions as  methods
    //we want to have access to the parent object
    console.log(`${persson.nickName} says HAHAHAHA`);
  },
};
//we can  use objects n't just to store diff methods  like we had add,subtract methods
//NOW We have a way to interact with properties with other values or even methods
// persson.nickName = "lol";
// persson.fullName();
persson.printBio();
