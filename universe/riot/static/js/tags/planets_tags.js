<planets>
    <div if={ loading }>Loading...</div>
    <h2>Planets</h2>
    <ul>
        <li each={ planet in planets }>
          <span>{ planet.name }</span>
          <span>{ planet.mass }</span>
          <span>{ planet.distance_from_sun }</span>
          <button onclick="{ remove }">delete</button>
        </li>
    </ul>
    <h3>Add a Planet</h3>
    <ul>
        <li>
            <label>Name:</label>
            <input type="text" name="new_planet_name" />
        </li>
        <li>
            <label>Mass:</label>
            <input type="text" name="new_planet_mass" />
        </li>
        <li>
            <label>Distance From Sun:</label>
            <input type="text" name="new_planet_dfs" />
        </li>
        <li>
            <button onclick="{ add }">Add</button>
        </li>
    </ul>
    
    <style>
        li {
            background-color:Grey;
        }
    </style>

    this.loading = true;
    this.planets = [];
    var self = this;
    this.planet_adding = {}

    remove(e){
        console.log(e.item.planet);
        RiotControl.trigger('planet_remove', e.item.planet);
    }

    add() {
        var newPlanet = {
            'name': this.new_planet_name.value,
            'mass': this.new_planet_mass.value,
            'distance_from_sun': this.new_planet_dfs.value,
        };
        console.log(newPlanet);
        RiotControl.trigger('planet_add', newPlanet);

    };

    self.on('mount', function() {
        // Trigger init event when component is mounted to page.
        // Any store could respond to this.
        RiotControl.trigger('planets_init')
    }); 

    // Register a listener for store change events.
    RiotControl.on('planets_changed', function(planets) {
        self.planets = planets
        self.update()
    });

</planets>
