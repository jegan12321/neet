function calculateMarks() {
    var correctAnswers = parseInt(document.getElementById('correct').value);
    var incorrectAnswers = parseInt(document.getElementById('incorrect').value);
    
    if (isNaN(correctAnswers) || isNaN(incorrectAnswers)) {
        alert('Please enter valid numbers for correct and incorrect answers.');
        return;
    }
    
    var totalMarks = (correctAnswers * 4) - (incorrectAnswers * 1);
    
    document.getElementById('totalMarks').innerHTML = "Total Marks: " + totalMarks;
}
