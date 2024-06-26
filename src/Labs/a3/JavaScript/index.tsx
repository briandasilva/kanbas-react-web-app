import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditonals/IfElse";
import TernaryOperator from "./conditonals/TernaryOperator";
import FunctionDestructing from "./functions/FunctionDestructing";
import WorkingWithFunctions from "./functions/WorkingWithFunctions";
import Destructing from "./json/Destructing";
import House from "./json/House";
import Spreading from "./json/Spreading";
import TemplateLiterals from "./string/TemplateLiterals";
import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants from "./variables/VariablesAndConstants";

function JavaScript() {
  console.log("Hello World!");
  return (
    <div>
      <h1>JavaScript</h1>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <WorkingWithFunctions />
      <WorkingWithArrays />
      <TemplateLiterals />
      <House />
      <Spreading />
      <Destructing />
      <FunctionDestructing />
    </div>
  );
}
export default JavaScript;
