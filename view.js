function View(rootElementId) {
  this.root = document.querySelector(rootElementId);
  
  this.init = function() {
    this.createContainer();
    this.createObject();
    this.createButtonContainer();
    this.createUpButton();
    this.createDownButton();
    this.createLeftButton();
    this.createRightButton();
  };

  this.createElement = function(element, attributes) {
    var elem = document.createElement(element);
    for (var i in attributes) {
      elem.setAttribute(i, attributes[i]);
    }
    return elem;
  };
  this.createContainer = function() {
    var container = this.createElement("div", { id: "container" });
    this.appendRoot(container);
  };

  this.appendRoot = function(element) {
    this.root.append(element);
  };

  this.appendContainer = function(element) {

    this.root.querySelector("#container").append(element);
  };

  this.createObject = function() {
    var object = this.createElement("div", { id: "object" });
    this.appendContainer(object);
  };

  this.createButtonContainer = function() {
    var btnContainer = this.createElement("div", { id: "btn-container" });
    this.appendRoot(btnContainer);
  };

  this.appendButtonContainer = function(element) {
    this.root.querySelector("#btn-container").append(element);
  };

  this.createUpButton = function (){
    this.createButton('UP','up','onUp');
  }

  this.createDownButton = function (){
    this.createButton('DOWN','down','onDown');
  }

  this.createRightButton = function (){
    this.createButton('RIGHT','right','onRight');
  }

  this.createLeftButton = function (){
    this.createButton('LEFT','left','onLeft');
  }

  this.createButton = function(btnText,id, customEventName) {
    var button = this.createElement('button', { id: id });
    button.innerText = btnText;
    this.attachEvent(button, customEventName);
    this.appendButtonContainer(button);
  };

  this.attachEvent = function(button, customEventName) {
    var _this = this;
    var customEvent = new CustomEvent(customEventName);
    button.addEventListener("click", function() {
      _this.root.dispatchEvent(customEvent);
    });
  };

}

module.exports = { viewInstance: View };
