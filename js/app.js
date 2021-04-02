'use strict';


let userName = prompt('what is your name ?');
//console.log(userName);
alert('welcom ' + userName + ' we are happy to have you here :)');
let score = '';


// q1
let qus1 = function () {
  let traveller = prompt(' Do you think I am traveling right now?');
  traveller = traveller.toLowerCase();
  //console.log(traveller);
  // eslint-disable-next-line no-constant-condition
  if (traveller == 'yes' || 'y') {
    alert('you are wrong');
    //console.log(traveller);
  }
  // eslint-disable-next-line no-constant-condition
  else if (traveller == 'no' || 'n') {
    alert(' You are right');
    score++;
    //console.log(traveller);

  } else {
    alert('please write yes/y or no/n');
  }
};
qus1();


// qus2
let qus2 = function () {
  let loveTraveling = prompt(' do think I like to travel?');
  loveTraveling = loveTraveling.toLowerCase();
  // console.log(loveTraveling);
  switch (loveTraveling) {
  case loveTraveling = 'yes':
  case loveTraveling = 'y':
    alert('correct');
    score++;
    break;
  case loveTraveling = 'no':
  case loveTraveling = 'n':
    // console.log(loveTraveling);
    alert('this is not true! ');
    break;
  default:
    alert('please write yes/y or no/n');

  }
};
qus2();


// qus3
let qus3 = function () {
  let travelingNumber = prompt(' Do you think I have traveled more than three times?');
  travelingNumber = travelingNumber.toLowerCase();
  //console.log(travelingNumber);

  switch (travelingNumber) {
  case travelingNumber = 'yes':
  case travelingNumber = 'y':
    //console.log(travelingNumber);
    alert('I hope, but this is not the right answer!');
    break;
  case travelingNumber = 'no':
  case travelingNumber = 'n':
    //console.log(travelingNumber);
    alert('this is correct');
    score++;
    break;
  default:
    alert('please write yes/y or no/n');
  }
};
qus3();

// qus4
let qus4 = function () {
  let distination = prompt(' Was USA  my last disination?');
  distination = distination.toLowerCase();
  //console.log(distination);

  switch (distination) {
  case distination = 'yes':
  case distination = 'y':
    // console.log(distination);
    alert('wrong, but it is intersting country!');
    break;

  case distination = 'no':
  case distination = 'n':
    //console.log(distination);
    alert(' You are right:(');
    score++;
    break;
  default:
    alert('please write yes/y or no/n');
  }
};
qus4();


// qus5
let qus5 = function () {
  let cost = prompt(' Do you think my last trip coast me more than $8000?');
  cost = cost.toLowerCase();
  //console.log(cost);

  switch (cost) {
  case cost = 'yes':
  case cost = 'y':
    //console.log(cost);
    alert('wrong');
    break;

  case cost = 'no':
  case cost = 'n':
    //console.log(cost);
    alert('true, It cost me less');
    score++;
    break;
  default:
    alert('please write yes/y or no/n');
  }
};
qus5();

// qus6
let qus6 = function () {
  let numericGuess = prompt(' Guess my age - it is betwwen 20 and 30 ?');
  //console.log(traveller);

  for (let i = 0; i < 3; i++) {
    if (numericGuess > 27) {
      alert('  too high');
      numericGuess = prompt(' Guess my age - it is betwwen 20 and 30 ?');


    } else if (numericGuess < 27) {
      alert('  too low'); numericGuess = prompt(' Guess my age - it is betwwen 20 and 30 ?');
    
    }
    else if (numericGuess == 27) {
      alert('correct, I am 27 years old');
      
      score++;
      break;
    }
  }
};
qus6();

// qus7
let qus7 = function () {
  alert('It is a gueesing Game, you have 6 trials to guess my favorit resturent?');
  let userAnswer = false;
  let favRst = ['qaiser', 'mac', 'abu-shekha', 'daiaa'];
  for (let i = 0; i < 6; i++) {
    let rstQ = prompt('what is  my favourit resturint?');

    for (let j = 0; j < favRst.length; j++) {


      if (rstQ == favRst[j]) {
        alert(' you guessed correctly');
        userAnswer = true;
          score++;
          alert('these are my favourite resturents  ' + favRst);

        break;
      }

    } if (userAnswer == true) {
      break;
    }
    else if (i == 5) {
      alert('these are my favourite resturents  ' + favRst);
    }
    else if (userAnswer == false) {
      alert('try again');
    }

  }
};
qus7();


confirm('you are above 18?');

alert('Thank you ' + userName + ' Hope you have great time  ' + 'your score is ' + score);
