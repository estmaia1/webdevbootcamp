function average (scores) {
  var avg = 0;
  for (var i = scores.length - 1; i >= 0; i--) {
    avg += scores[i];
  }
  avg = Math.round(avg/scores.length);
  console.log(avg);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);

