function solution(quiz) {
  return quiz.map((expression) => {
    const [x, operator, y, , z] = expression.split(" ");

    const num1 = Number(x);
    const num2 = Number(y);
    const result = Number(z);

    let calc;

    if (operator === "+") {
      calc = num1 + num2;
    } else {
      calc = num1 - num2;
    }

    return calc === result ? "O" : "X";
  });
}