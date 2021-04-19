//object = {key:value};

//1.Literals and properties
function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name:'ellie',age:4};
print(ellie);

ellie.hasjob = true;
console.log(ellie.hasjob);

delete ellie.hasjob;

//2.computed properties
//key should be always string
// '키(key): 값(value)' 쌍으로 구성된 프로퍼티(property)
console.log(ellie.name);//키값 닷을쓰는게맞음
console.log(ellie['name']);//런타임에서결정될떄,실시간값가져올떄,나중에 동적으로키를가져올떄
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj,key){
    console.log(obj[key]);
}
printValue(ellie,'name');
printValue(ellie,'age');

//3.property value shorthand
const person1 = {name : 'bob',age:2};
const person2 = new Person('dave',4);
const person = new Person('ellie',30);
console.log(person2);
console.log(person);
//4.constructor 
function Person(name,age){//함수를 이용해서 값만주면 객체생성 // 생성자
    
    this.name = name;
    this.age = age;

}

//5. in operator
console.log('name' in ellie);

for(key in ellie){
    console.log(key);
}

Array

