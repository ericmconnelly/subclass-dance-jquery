describe("blinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
    michaeljacksonDancer = new MichaelJacksonDancer(20, 100, timeBetweenSteps);
    marcusphilipsDancer = new MarcusPhilipsDancer(30, 40, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
    expect(michaeljacksonDancer.$node).to.be.an.instanceof(jQuery);
    expect(marcusphilipsDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("blinkyDancer should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;

  });

  it("michaelDancer should have a step function that makes its node blink", function() {
    sinon.spy(michaeljacksonDancer.$node, 'toggle');
    michaeljacksonDancer.step();
    expect(michaeljacksonDancer.$node.toggle.called).to.be.true;
  });
  
  it("marcusDancer should have a step function that makes its node blink", function() {
    sinon.spy(marcusphilipsDancer .$node, 'toggle');
    marcusphilipsDancer.step();
    expect(marcusphilipsDancer.$node.toggle.called).to.be.true;
  });


  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);

      
    });
  });

describe("dance", function(){
    it("michaelDancer should call step at least once per second", function(){
      sinon.spy(michaeljacksonDancer, "step");
      expect(michaeljacksonDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(michaeljacksonDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(michaeljacksonDancer.step.callCount).to.be.equal(2);
    });
});

describe("dance", function(){
    it("marcusDancer should call step at least once per second", function(){

      sinon.spy(marcusphilipsDancer, "step");
      expect(marcusphilipsDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(marcusphilipsDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(marcusphilipsDancer.step.callCount).to.be.equal(2);

    });
});
});


  // describe("dance", function(){
    // it("blinkyDancer should call step at least once per second", function(){
    //   sinon.spy(blinkyDancer, "step");
    //   expect(blinkyDancer.step.callCount).to.be.equal(0);
    //   clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
    //   clock.tick(timeBetweenSteps);

    //   expect(blinkyDancer.step.callCount).to.be.equal(1);

    //   clock.tick(timeBetweenSteps);
    //   expect(blinkyDancer.step.callCount).to.be.equal(2);

    // });


  //   it("michaelDancer should call step at least once per second", function(){
  //     sinon.spy(michaeljacksonDancer, "step");
  //     expect(michaeljacksonDancer.step.callCount).to.be.equal(0);
  //     clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
  //     clock.tick(timeBetweenSteps);

  //     expect(michaeljacksonDancer.step.callCount).to.be.equal(1);

  //     clock.tick(timeBetweenSteps);
  //     expect(michaeljacksonDancer.step.callCount).to.be.equal(2);
  //   });

  //   it("marcusDancer should call step at least once per second", function(){

  //     sinon.spy(marcusphilipsDancer, "step");
  //     expect(marcusphilipsDancer.step.callCount).to.be.equal(0);
  //     clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
  //     clock.tick(timeBetweenSteps);

  //     expect(marcusphilipsDancer.step.callCount).to.be.equal(1);

  //     clock.tick(timeBetweenSteps);
  //     expect(marcusphilipsDancer.step.callCount).to.be.equal(2);

  //   });
  // });
