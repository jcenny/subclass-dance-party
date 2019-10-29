var makeFriesDancer = function(top, left, timeBetweenSteps) {
  // debugger;

  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // console.log(blinkyDancer.step.bind(this)());
  // this.oldStep = blinkyDancer.step; // how we access a method in the superclass
  // console.log(this.oldStep);

};

makeFriesDancer.prototype = Object.create(Dancer.prototype);
makeFriesDancer.prototype.constructor = makeFriesDancer;

makeFriesDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};