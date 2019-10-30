$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
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
    // function picture() {
    //   var pic = "https://media.giphy.com/media/xIxDEzVliMsfK/giphy.gif";
    //   pic.replace("90x90", "225x225")
    // }
    // picture();
    window.dancers.push(dancer.$node);
    $('body').append(dancer.$node);

  });

  $('.addLineUpButton').on('click', function (event) {
    // console.log(window.dancers[0].css({left: '0px'}));
    window.dancers.forEach(function (dancer) {
      dancer.css({ left: '0px' });
    });

  });

  $('.addPairUpButton').on('click', function (event) {
    // console.log(window.dancers[0].css({left: '0px'}));
    // var firstDancerLeftProp = window.dancers[0]["0"].style.left;
    // firstDancerLeftProp = parseInt(firstDancerLeftProp.slice(0, -2));
    // var firstDancerTopProp = window.dancers[0]["0"].style.top;
    var firstDancerLeftProp;
    var firstDancerTopProp;
    for (let i = 0; i < window.dancers.length; i += 2) {
      firstDancerLeftProp = window.dancers[i]["0"].style.left;
      firstDancerLeftProp = parseInt(firstDancerLeftProp.slice(0, -2));
      firstDancerTopProp = window.dancers[i]["0"].style.top;
      window.dancers[i + 1].css({ left: (firstDancerLeftProp + 100) + "px", top: firstDancerTopProp });

    }
    console.log(firstDancerTopProp);
    // window.dancers[1].css({ left: (firstDancerLeftProp + 100) + "px", top: firstDancerTopProp });


  });


});



