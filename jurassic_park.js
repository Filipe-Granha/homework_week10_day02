var JurassicPark = function() {
  this.enclosure = [];

}



JurassicPark.prototype.sizeOfEnclosure = function(){
  return this.enclosure.length;
}


JurassicPark.prototype.addDinosaurToEnclosure = function(dinosaur) {
  this.enclosure.push(dinosaur);
}


JurassicPark.prototype.removeDinosaurByType = function(type) {
 var position = this.enclosure.indexOf(type); // removes just one and any dinosaur?
 this.enclosure.splice(position, 1);
}


JurassicPark.prototype.getDinosWithOffspringHigherThan2 = function(OffspringCount) {
  var HighestOffspring = [];
  for (dinosaur of this.enclosure) {
    if (dinosaur.offspring > OffspringCount) {
      HighestOffspring.push(dinosaur);
    }
    return HighestOffspring;
  }
};






module.exports = JurassicPark;


