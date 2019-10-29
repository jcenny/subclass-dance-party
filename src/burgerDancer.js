var makeBurgerDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<span><img src="https://media.giphy.com/media/xIxDEzVliMsfK/giphy.gif" width="280" height="280" ></span>').addClass("gif")
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // console.log(blinkyDancer.step.bind(this)());
  // this.oldStep = blinkyDancer.step; // how we access a method in the superclass
  // console.log(this.oldStep);

};

makeBurgerDancer.prototype = Object.create(Dancer.prototype);
makeBurgerDancer.prototype.constructor = makeBurgerDancer;

makeBurgerDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};