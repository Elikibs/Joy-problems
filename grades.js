const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function gradeGenerator() {
  rl.question('Please enter your marks (N/B; should be between 0 and 100): ', function (studentMarks) {
    // Convert the user input to a number
    const updateMarks = parseFloat(studentMarks);

    // Check if the input is a valid number
    if (isNaN(updateMarks) || updateMarks < 0 || updateMarks > 100) {
      console.log('You have entered an invalid input. Should be between 0 and 100');
      rl.close();
      return;
    }

    // If the number is valid, perform the grade conditional statements
    let grade;

    if (updateMarks > 79) {
      grade = 'A';
    } else if (updateMarks >= 60 && updateMarks <= 79) {
      grade = 'B';
    } else if (updateMarks >= 50 && updateMarks <= 59) {
      grade = 'C';
    } else if (updateMarks >= 40 && updateMarks <= 49) {
      grade = 'D';
    } else {
      grade = 'E';
    }

    // Print out the grade of the user's input
    console.log(`The student's grade is: ${grade}`);
    rl.close();
  });
}

// Call the function to calculate the grade
gradeGenerator();
