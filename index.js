// Sample grades
const grades = [95, 85, 70, 55];

// Provide feedback based on each grade using if-else statements
grades.forEach(grade => {
  let feedback = '';

  if (grade >= 90) {
    feedback = `Excellent!`;
  } else if (grade >= 75 && grade <= 89) {
    feedback = `Good job!`;
  } else {
    feedback = `Needs improvement`;
  }

  console.log(`Grade: ${grade} - ${feedback}`);
});