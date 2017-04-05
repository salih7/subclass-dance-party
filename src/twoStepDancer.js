var TwoStepDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

TwoStepDancer.prototype = Object.create(Dancer.prototype);

TwoStepDancer.prototype.constructor = TwoStepDancer;

TwoStepDancer.prototype.step = function() {
  //setTimeout(Dancer.prototype.step, this.timeBetweenSteps);
  //debugger;
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.oldStep(); 
  this.$node.toggle();
};

TwoStepDancer.prototype.oldStep = Dancer.prototype.step;