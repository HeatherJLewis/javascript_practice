
function getFillings(sandwich) {
    if (sandwich === undefined) throw new Error("ingredients is required");
    return sandwich.fillings;
}

function isFromManchester(person) {
    if (person === undefined) throw new Error("person is required");
    if (person.city === "Manchester") {
        return true;
    } else {
        return false;
    }
}

function getBusNumbers(people) {
    if (people === undefined) throw new Error("people is required");
    let numOfBusesNeeded = Math.ceil(people/40);
    return numOfBusesNeeded;
}

function countSheep(arr) {
    if (!arr) throw new Error("arr is required");
    const numOfSheep = arr.filter(animal => animal === "sheep");
    return numOfSheep.length;
}

function hasMPostCode(person) {
    if (person === undefined) throw new Error("person is required");
    let postCodeOfUser = person.address.postCode;
    if (postCodeOfUser.charAt(0)==="M" && person.address.city === "Manchester") {
        return true
    } else {
        return false;
    }
};

module.exports = {
    getFillings,
    isFromManchester,
    countSheep,
    getBusNumbers,
    hasMPostCode
};