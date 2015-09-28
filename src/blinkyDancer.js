var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass( "dancer" ).addClass( "BlinkyDancer");

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.step();
  
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
  // this.step.call(this, )
  makeDancer.prototype.step.apply(this, arguments);
  this.$node.toggle();
};




