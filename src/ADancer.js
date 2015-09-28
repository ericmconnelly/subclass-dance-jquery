var ADancer = function(top, left, timeBetweenSteps){
  this.goingVertical = -1;
  this.goingHorizontal = -1;
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="BDancer"> <img style="width:100px;" src="http://images.clipartpanda.com/cat-20clip-20art-11954410851373638183Gerald_G_Cartoon_Cat_Sitting.svg.med.png"/> </span>');
  
  this.$node.removeClass("dancer").addClass("ADancer");
  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  /// this.step();
};

ADancer.prototype = Object.create(makeDancer.prototype);
ADancer.prototype.constructor = ADancer;
ADancer.prototype.oldStep = ADancer.prototype.step;

ADancer.prototype.step = function(){

  makeDancer.prototype.step.apply(this);
  
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