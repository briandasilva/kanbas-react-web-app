const five = 2 + 3;
const result1 = "2 + 3 = " + five;
const result2 = `2 + 3 = ${2 + 3}`;
const username = "alice";
const greeting1 = `Welcome home ${username}`;
const loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;

console.log(result1);
console.log(result2);
console.log(greeting1);
console.log(result2);

function TemplateLiterals() {
  return (
    <div>
      <h3>Template literals</h3>
      result1 = {result1} <br />
      result2 = {result2} <br />
      greeting1 = {greeting1} <br />
      greeting2 = {greeting2} <br />
    </div>
  );
}

export default TemplateLiterals;
