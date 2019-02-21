

var salon = {
    name: "Pet Salon",
    phone: "123123123",
    address: {
        street: "main",
        number: "123",
    },
    workingHours: {
        open: "9:00",
        closes: "17:00",
    },


    pets: []

};

console.log(salon.address.number);


var petCnt = 0;

function Pet(name, age, serviceType, ownerName, contactPhone) {
    this.id = "pt" + petCnt;
    petCnt += 1;
    this.hunger = 20;
    this.happiness = 10;
    this.name = name;
    this.age = age;
    this.type = serviceType;
    this.ownerName = ownerName;
    this.ownerPhone = contactPhone;
    this.feed = function () {

        this.hunger -= 10;
        this.happiness += 10;
    }

    this.status = function () {

        console.log(this.name, "Hunger level: " + this.hunger, "Happy level: " + this.happiness)
    }

}
function registerPet() {

    var txtName = document.getElementById("txtName");
    var txtAge = document.getElementById("txtAge");
    var txtOwner = document.getElementById("txtOwner");
    var txtPhone = document.getElementById("txtPhone");
    var selService = document.getElementById("selService");


    var thePet = new Pet(
        txtName.value,
        txtAge.value,
        selService.value,
        txtOwner.value,
        txtPhone.value);

    console.log(thePet);

    eraseBtn();

    salon.pets.push(thePet);

    displayPetTable(thePet);

    alert("We have " + salon.pets.length + " pets as customers.");


}

function eraseBtn() {
    txtName.value = "";
    txtAge.value = "";
    txtOwner.value = "";
    txtPhone.value = "";
    selService.value = "";

}

function displayPet(aPet) {

    var list = document.getElementById("petList");


    var li = document.createElement('li');
    li.innerText = aPet.name + " - " + aPet.type;
    li.classList.add("bordered");

    list.appendChild(li);






}



function displayPetTable(aPet) {
    var tBody = document.getElementById("listBody");


    var row = "<tr id='" + aPet.id + "' ><td>" + aPet.name + "</td><td>" +
        aPet.age + "</td><td>" + aPet.ownerName + "</td><td>" +
        aPet.ownerPhone + "</td><td>" + aPet.type + "</td>" +
        "<td> <button class='btn-sm btn-info'>Show Info</button> " +
        "<button onclick='removePet(\"" + aPet.id + "\");' class='btn btn-small btn-danger'>Delete</button> </td>" +
        "</tr>";

    tBody.innerHTML += row;
} 


function removePet(petId) {
    console.log('wants to remove a pet', petId);

    var indexToRemove = 0;
    for (var i = 0; i < salon.pets.length; i++) {
        var indexPet = salon.pets[i];
        if (indexPet.id == petId) {
            indexToRemove = i;
        }
    }

    salon.pets.splice(indexToRemove, 1);





}
