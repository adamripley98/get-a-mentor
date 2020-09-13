export default () => (
  <select
    id="college"
    name="college"
    className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full leading-normal text-gray-500"
  >
    <option value="hide" className="text-gray-500">
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
  </select>
);
