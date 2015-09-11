// A planets store that updates only in memory for testing and development
function PlanetsStoreInMemory() {

    // this object is now event aware through riot
    riot.observable(this);

    var self = this;

    // in memory planets store
    this.planets = [
      { name: 'Mercury', mass: 23, distance_from_sun: 24 },
      { name: 'Venus', mass: 23, distance_from_sun: 24 },
      { name: 'Earth', mass: 23, distance_from_sun: 24 },
    ];

    // add the planet and trigger changedd with the planet list
    var newPlanet = function(planet) {
        self.planets.push(planet); 
        self.trigger('planets_changed', self.planets);
    }

    // remove the planet and trigger changed with the planet list
    var removePlanet = function(planet) {
        console.log(planet)
        var index = self.planets.indexOf(planet);
        self.planets.splice(index, 1);
        self.trigger('planets_changed', self.planets);
    }

    // listen to the planet_add event from riot tags
    self.on('planet_add', newPlanet);

    // listen to the planet_remove event from riot tags
    self.on('planet_remove', removePlanet);

    // listen to the planets_init event from riot tags
    // trigger changed with the planet list
    self.on('planets_init', function() {
        self.trigger('planets_changed', self.planets);
    });
}
// a plaents soter that talsks to local storage

// aplanet stre that talks to django rest
