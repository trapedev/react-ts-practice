function genBirdsInfo(name) {
    return name.split(",");
}
function singBirds(birdInfo) {
    return birdInfo("hato, kiji")[0] + " piyo piyo";
}
console.log(singBirds(genBirdsInfo));
