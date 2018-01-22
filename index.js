var color = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "rainbow",
    "brown",
    "black",
    "purple",
    "magenta",
    
];

var animal = [
    "monkey",
    "dog",
    "horse",
    "zebra",
    "sloth",
    "cat",
    "hummingbird",
    "parrot",
    "goose",
    "slug",
    "spider",
    "tarantula",
    "lion",
    "cheetah",
    "jaguar",
    "panther",
    "puma"
];

var appliance = [
    "dishwasher",
    "microwave",
    "crisper",
    "waffle iron",
    "toaster",
    "oven",
    "television",
    "radio",
    "refrigerator",
    "cabinet"
]

var random = function(array){
    return array[Math.floor(Math.random() * array.length)]
}

var PurpleMonkeyDishwasher = function(){
    var randColor = random(color);
    var randAnimal = random(animal);
    var randAppliance = random(appliance);
    return randColor + " " + randAnimal + " " + randAppliance
}
console.log(PurpleMonkeyDishwasher())
module.exports = PurpleMonkeyDishwasher;