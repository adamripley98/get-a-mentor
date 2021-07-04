export default ({ handleChange }) => (
  <select
    id="college"
    name="college"
    onChange={handleChange}
    className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 w-full h-12 leading-normal"
  >
    <option value="hide" disabled selected>
      Select school
    </option>
    <option value="upenn">University of Pennsylvania</option>
    <option value="columbia">Columbia</option>
    <option value="princeton">Princeton</option>
    <option value="harvard">Harvard</option>
    <option value="brown">Brown</option>
    <option value="yale">Yale</option>
    <option value="dartmouth">Dartmouth</option>
    <option value="cornell">Cornell</option>
    <option value="uncChapelHill">UNC Chapil Hill</option>
  </select>
);
