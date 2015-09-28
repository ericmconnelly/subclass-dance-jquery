$(document).ready(function(){
  window.dancers = [];

  $('html').on('mouseenter', '.DDancer', function() {
    
    // $(this).parent().css({'size': '400px'});
    $(this).css({'background-size': '400px'});

    console.log('click');
  });

  $('html').on('mouseleave', '.DDancer', function() {
    $(this).css({'background-size': '100px'});
    console.log('click');
  });


  window.getRandomPosY = function(){
    return $("body").height() - ($("body").height() / 2) * Math.random() -200;
  };
  window.getRandomPosX = function(){
    return $("body").width() * Math.random() - 200;
  };

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      getRandomPosY(),
      getRandomPosX(),
      2000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });

  $(".HozlineUpButton").on("click", function(event){
    console.log('linepUp');
    var height = $('body').height() / 2;
    var width =  $('body').width();
    var increment = width/dancers.length;
    var position = increment;
    for(var i=0; i< dancers.length;i++){
      dancers[i].lineUp(height, position);
      position += increment;
    }
  });

  // $(".FindNeighbor").on("click", function(event){
  //   console.log('FindNeighbor');
  //   // var height = $('body').height() / 2;
  //   // var width =  $('body').width();
  //   // var increment = width/dancers.length;
  //   // var position = increment;
  //   var distance;
  //   var y;
  //   var x;
  //   var min = Math.pow(10, 10);
  //   for(var i=0; i< dancers.length;i++){
  //      y = dancers[i].getPosition().top;
  //      x = dancers[i].getPosition().left;

  //      distance = x * x + y * y;
  //      distance = Math.sqrt(distance);
  //      if(min > distance){
  //         min = distance;
  //      }
  //   }
  // });

  // $(".VertlineUpButton").on("click", function(event){
  //   console.log('linepUp');
  //   var height = $('body').height();
  //   var width =  $('body').width()/2;
  //   var increment = height/dancers.length;
  //   var position = increment;
  //   for(var i=0; i< dancers.length;i++){
  //     dancers[i].lineUp(height, position);
  //     position += increment;
  //   }
  // });
});

