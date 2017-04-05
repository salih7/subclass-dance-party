$(document).ready(function() {
  window.dancers = [];
  var verticalPos = $('body').height() / 2;
  var horizontalPos = $('body').width() / window.dancers.length;
  

  function setDancer(dancerMakerFunctionName) {
    // get the maker function for the kind of dancer we're supposed to make

  }


  $('.addDancerButton').on('click', function(event) {
    var curDiv = window.dancers.length;

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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    setDancer.call(this, dancerMakerFunctionName);

    var dancerMakerFunction = window[dancerMakerFunctionName];



    // make a dancer with a random position
    $('body').append('<div id="' + curDiv + '"></div>');

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.floor((Math.random() * 2000) + 1000)
    );
    $('#' + curDiv++).append(dancer.$node);
    
    window.dancers.push(dancer);
  });


  // $('div').on('mouseover', function(event) {
  //   alert('here is here');
  // });
  

  $('.lineUpDancers').on('click', function(event) {
    var left = 15;
    window.dancers.forEach(function(item, i) {
      item.lineUp(verticalPos, left += horizontalPos);
    });
  });


  $('.growShrinkDancers').on('click', function(event) {
    window.dancers.forEach(function(item) {
      var size = Math.floor((Math.random() * 400) + 200);
      item.lineUp(size, size);
    });
  });

  // $('.circleTrain').on('click', function(event) {

  //   //var circleTrainFunctionName = $(this).data('circle-train-function-name');

  //   //var circleTrainFunction = window[circleTrainFunctionName];

  //   var vp = $('body').height() / 2;
  //   var hp = $('body').width() / 2;

  //   var sqrTwo = Math.sqrt(2) / 2;
  //   var sqrThr = Math.sqrt(3) / 2;
  //   var half = 0.5;


  //   var pos = [[hp, vp],
  //              [0, -vp],
  //              [-hp, 0],
  //              [0, vp]];

  //   //for(var i = 0; i < 4; i++) {
  //     window.dancers[0].lineUp(pos[0][0], pos[0][1]);
  //    // window.dancers[1].lineUp(pos[i][0], pos[i][1]);
  //     //window.dancers[2].lineUp(pos[i][0], pos[i][1]);
  //     //window.dancers[3].lineUp(pos[i][0], pos[i][1]);
  //   //}

  // });

});

