let numberArray1 = [1, 2, 4, 5, 6];
let stringArray1 = ["string1", "string3"];

const fourIndex = numberArray1.findIndex((a) => a === 4);
const string3Index = stringArray1.findIndex((a) => a === "string3");

console.log(fourIndex);
console.log(string3Index);

function FindIndex() {
  return (
    <>
      <h3>FindIndex function</h3>
      fourIndex = {fourIndex} <br />
      string3Index = {string3Index} <br />
    </>
  );
}

export default FindIndex;
