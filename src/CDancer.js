var CDancer = function(top, left, timeBetweenSteps){
  this.goingVertical = -1;
  this.goingHorizontal = -1;
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.removeClass("dancer").addClass("CDancer");
  this.setPosition(top, left);
  this.x = left;
  this.y = top;
  this.timeBetweenSteps = 10;
  
};

CDancer.prototype = Object.create(makeDancer.prototype);
CDancer.prototype.constructor =  CDancer;

CDancer.prototype.step = function(){
  // this.step.call(this, )
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

