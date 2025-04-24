function checkAge() {
  const ageField = document.getElementById("age");
  const ageTest = ageField.value;
  const errorTag = document.getElementById("error");

  try {
    const age = parseInt(ageTest);

    if (isNaN(age)) {
      throw "please enter a number";
    } else if (age < 18) {
      throw "age not enough to do.";
    } else if (age > 30) {
      throw "old enough to do";
    }
    errorTag.innerHTML = " ";
  } catch (err) {
    console.log("ERROR:", err);
    errorTag.innerHTML = `Error: ${err}`;
  } finally {
    console.log("All done inside try catch");
  }

  console.log("mahade");
}
