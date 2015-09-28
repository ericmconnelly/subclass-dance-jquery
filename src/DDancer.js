var DDancer = function(top, left, timeBetweenSteps){
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass( "dancer" ).addClass( "DDancer");

  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  /// this.step();
  
};

DDancer.prototype = Object.create(makeDancer.prototype);
DDancer.prototype.constructor = DDancer;

DDancer.prototype.oldStep = DDancer.prototype.step;

DDancer.prototype.step = function(){
  // this.step.call(this, )
  makeDancer.prototype.step.apply(this, arguments);
  this.$node.toggleClass("rotating");
  
  // this.$node.toggle();
  if(this.y >= window.innerHeight - 200 || this.y <= 0){
    this.goingVertical = this.goingVertical * -1;
  }
  var i = Math.floor(Math.random() * 100);
  this.y += this.goingVertical*i;


  if(this.x >= window.innerWidth - 200 || this.x <= 0){
    this.goingHorizontal = this.goingHorizontal * -1;
  }
  var j = Math.floor(Math.random() * 100);
  this.x += this.goingHorizontal*j;

  this.setPosition(this.y, this.x);


};

//

