$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
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

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    
    window.dancers.push(dancer);
  });

  $('.lineUpDancers').on('click', function(event) {

    //var lineUpFunctionName = $(this).data('line-up-function-name');

    //var lineUpFunction = window[lineUpFunctionName];

    var verticalPos = $('body').height() / 2;
    var horizontalPos = $('body').width() / window.dancers.length;
    var left = 15;
    window.dancers.forEach(function(item, i) {
      item.lineUp(verticalPos, left += horizontalPos/*, $('body').find('.dancer')[i]*/);
    });
  });

  $('.growShrinkDancers').on('click', function(event) {

    //var lineUpFunctionName = $(this).data('line-up-function-name');

    //var lineUpFunction = window[lineUpFunctionName];

    var verticalPos = $('body').height() / 2;
    var horizontalPos = $('body').width() / window.dancers.length;
    
    window.dancers.forEach(function(item) {
      var size = Math.floor((Math.random() * 200) + 100);
      item.growShrink(size, size);
    });
  });

  $('.circleTrain').on('click', function(event) {

    //var circleTrainFunctionName = $(this).data('circle-train-function-name');

    //var circleTrainFunction = window[circleTrainFunctionName];

    var vp = $('body').height() / 2;
    var hp = $('body').width() / 2;

    var sqrTwo = Math.sqrt(2) / 2;
    var sqrThr = Math.sqrt(3) / 2;
    var half = 0.5;


    var pos = [[hp, vp],
               [0, -vp],
               [-hp, 0],
               [0, vp]];

    //for(var i = 0; i < 4; i++) {
      window.dancers[0].lineUp(pos[0][0], pos[0][1]);
     // window.dancers[1].lineUp(pos[i][0], pos[i][1]);
      //window.dancers[2].lineUp(pos[i][0], pos[i][1]);
      //window.dancers[3].lineUp(pos[i][0], pos[i][1]);
    //}

  });

});

