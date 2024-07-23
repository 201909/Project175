AFRAME.registerComponent("createmodels", {
//create init function 
init:async function(){
    var models = await this.getModels()
    var barcodes = Object.keys(models)

    barcodes.map(barcode =>{
        items = models[barcode]
       this.createModel(items)
    })

    
},

getModels: function() {
    return fetch("js/models.json")
      .then(res => res.json())
      .then(data => data);
  },
  createModel: function(model) {
    var barcodeValue = items.barcode_value
    var modelName = items.model_name
    var modelSource = items.model_url

    var scene = document.createElement("a-scene")
    
    var marker = document.createElement("a-marker");
    marker.setAttribute("id", `marker-${barcodeValue}`)
    marker.setAttribute("type", "barcode")
    marker.setAttribute("model_name", modelName)
    marker.setAttribute("value ", barcodeValue)
    
    scene.appendChild(marker)

    var item = document.createElement("a-entity")
    item.setAttribute("id", `${modelName}-${barcodeValue}`)
    marker.appendChild(item)

    var card = document.createElement("a-entity");
    card.setAttribute("id", `card-${modelName}`);
    card.setAttribute("geometry", {
      primitive: "plane",
      width: 1,
      height: 1
    });
    card.setAttribute("material", {
      src: modelSource
    });

    card.setAttribute("position", { x: 0, y: 0, z: 0 });
      card.setAttribute("rotation", { x: -90, y: 0, z: 0 });
  
      item.appendChild(card)
  },
   //add the code
});
