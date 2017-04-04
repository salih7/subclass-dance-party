var FadeDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

FadeDancer.prototype = Object.create(Dancer.prototype);

FadeDancer.prototype.constructor = FadeDancer;

FadeDancer.prototype.step = function() {
  //setTimeout(Dancer.prototype.step, this.timeBetweenSteps);
  //debugger;
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.oldStep(); 
  this.$node.fadeToggle();
};

FadeDancer.prototype.oldStep = Dancer.prototype.step;