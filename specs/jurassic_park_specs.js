var assert = require("assert");
var JurassicPark = require("../jurassic_park.js");
var Dinosaur = require("../dinosaur.js");


describe("JurassicPark", function(){ 

 var jurassic_park;
 var dino1;
 var dino2;
 var dino3;


 beforeEach(function() {
      jurassic_park = new JurassicPark();
      dino1 = new Dinosaur("Tyrannosaurus", 2);
      dino2 = new Dinosaur("Velociraptor", 3);
      dino3 = new Dinosaur("Triceratops", 2);
   });


  it("should start empty", function() {
    assert.strictEqual(jurassic_park.sizeOfEnclosure(), 0);
  })


  it("should be able to add dinosaur", function() {
    jurassic_park.addDinosaurToEnclosure(dino1);
    assert.strictEqual(jurassic_park.sizeOfEnclosure(), 1);
  })

  it("should be able to remove all dinosaurs of a particular type", function() {
    jurassic_park.addDinosaurToEnclosure(dino1);
    jurassic_park.addDinosaurToEnclosure(dino1);
    jurassic_park.removeDinosaurByType("Tyrannosaurus");
    assert.strictEqual(jurassic_park.sizeOfEnclosure(), 1);
  })


  it("should get all the dinosaurs with an offspring count of more than 2", function() {
    jurassic_park.addDinosaurToEnclosure(dino3); // only gets the first dino, here in the first position?
    jurassic_park.addDinosaurToEnclosure(dino3);
    jurassic_park.addDinosaurToEnclosure(dino2);
    assert.strictEqual(jurassic_park.getDinosWithOffspringHigherThan2(2).length, 3);
  })
  })