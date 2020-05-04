1. console.log(hello);                                   
var hello = 'world';

output=undefined

my algo:
var hello = 'world';
console.log(hello);
output = world


2.var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

output = magnet

my algo.

var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();
console.log(needle);

output = magnet, haystack


3.var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

output= supercool

my algo
var brendan;
brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


4. var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

output = chicken , half-chicken


my algo;
var food;
food = 'chicken';
console.log(food);
eat();
function eat() {
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
output = chicken , half-chicken


5. mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food)


my algo:






6.console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

output:undefined, rock, r&b, disco


my algo;
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


output: rock, r&b, disco



7. dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

output: san jose, seattle, burbank, san jose


my algo:
var dojo;
dojo = 'san jose';
console.log(dojo);
learn();
function learn() {
    dojo = 'seattle';
    console.log(dojo);
    var dojo = 'burbank';
    console.log(dojo);
}
learn();
console.log(dojo);

output = seattle, burbank, san jose,seattle, burbank, san jose