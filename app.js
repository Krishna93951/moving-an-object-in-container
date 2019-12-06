function App(viewInstance,objectId) {
  this.view = viewInstance;
  this.rootElement = this.view.root;
  this.objLeft = 0;
  this.objDown = 0;
  this.objectElement;

  this.init = function() {
    this.attachEvent();
  };

  this.attachEvent = function (){
    this.objectElement = this.rootElement.querySelector(objectId);
    var event ={
      onRight:this.horizontalMovement().onRight,
      onDown:this.onDown.bind(this),
      onLeft:this.horizontalMovement().onLeft,
      onUp:this.onUp.bind(this)
    };
    for(var key in event){
      this.rootElement.addEventListener(key,event[key]);
    }
  }

  this.horizontalMovement = function (){
  
    function onRight(){
      if (this.objLeft < 500) {
      return this.objLeft += 10;
      }
    }
    function onLeft(){
      if (this.objLeft >0) {
      return this.objLeft -= 10;
      }
    }
    return this.objectElement.style.left = this.objLeft + "px";  
  }

  // this.onRight = function() {
    
  // };

  // this.onLeft = function() {
  //   if (this.objLeft >0) {
  //     this.objLeft -= 10;
  //     this.objectElement.style.left =
  //       this.objLeft + "px";
  //     console.log(this.objLeft);
  //   }
  // };

  this.onDown = function() {
    
    if(this.objDown <300){
    this.objDown += 10;
    this.objectElement.style.top = this.objDown + "px";
    }
  };

  this.onUp = function() {
    if(this.objDown >0){
    this.objDown -= 10;
    this.objectElement.style.top = this.objDown + "px";
    }
  };
}

module.exports = { appInstance: App };
