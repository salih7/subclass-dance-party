var RandomDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

RandomDancer.prototype = Object.create(Dancer.prototype);

RandomDancer.prototype.constructor = RandomDancer;

RandomDancer.prototype.step = function() {
  //setTimeout(Dancer.prototype.step, this.timeBetweenSteps);
  //debugger;
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.oldStep(); 
  this.$node.css({'transform' : 'rotate('+ Math.floor((Math.random() * 360) + 0) +'deg)'});
};

RandomDancer.prototype.oldStep = Dancer.prototype.step;