import EncodingParametersInURLs from "./EncodingParametersInURL";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const welcome = `${API_BASE}/a5/welcome`;
  return (
    <div>
      <h1>Assignment 5</h1>
      <a href={welcome}>Welcome</a>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;
