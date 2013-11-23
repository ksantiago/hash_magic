function splitWords() {

}

function getWords() {
  var wordArrays = [];

  var firstString = $("#1").val();
  var firstWords = splitWords(firstString);
  wordArrays.push(firstWords);


  var seconds = $("#2").val();





  return [];
}

function generateWords(array1, array2) {
  var results = [];

  _.each(array1, function(w1) {
    _.each(array2, function(w2) {

      var combined1 = w1 + w2;
      results.push(combined1);

      var combined2 = w2 + w1;
      results.push(combined2);
    });
  });

  return results;
}


$(document).ready(function() {

  console.log(firsts, seconds)

  var words = generateWords([1,2,3], ["a", "b", "c"]);
  console.log(words)
})

