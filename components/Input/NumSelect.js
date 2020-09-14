export default ({ handleChange }) => (
  <select
    id="numMentees"
    name="numMentees"
    onChange={handleChange}
    className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full leading-normal text-gray-500"
  >
    <option value="hide" className="text-gray-500">
      Select number of mentors
    </option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
);
