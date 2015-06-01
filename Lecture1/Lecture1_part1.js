var Man = function( _name, _age) {
  this.name = _name;
  this.age = _age;
  this.live = function() {
    console.log( this.name + ', never give up!');
    return this;
  }
}

var Student = function( _name, _age) {
  this.study = function() {
    console.log("I wonna become a magiser of scince! P.S. student " + this.name);
    return this;
  }
  Man.apply(this, arguments);
}

Student.prototype = new Man();
Student.prototype.consturctor = Student;

var student = new Student('Vadik', 22);
console.log(student);
var man = new Man('Vadik', 22);

function duckType( someObj) {
  var manObj = new Man();
  var studObj = new Student();
  if (checkObj(manObj, someObj)) {
    if (checkObj(studObj, someObj)) {
      return "Student";
    } else {
      return "Man";
    }
  } else return "";
}

function checkObj( firstObj, secObj) {
  keys = Object.keys(firstObj);
  for (prop in keys) {
    if (keys[prop] in secObj);
    else {
      return false;
    }
  }
  return true;
}

console.log(duckType(man));
console.log(duckType(student));

function duckType2() {
  var manObj = new Man();
  var studObj = new Student();
  if (checkObj(manObj, this)) {
    if (checkObj(studObj, this)) {
      return "Student";
    } else {
      return "Man";
    }
  } else return "";
}

console.log(duckType2.call(man));
console.log(duckType2.apply(student));
