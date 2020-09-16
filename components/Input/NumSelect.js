export default ({ handleChange }) => (
  <select
    id="numMentees"
    name="numMentees"
    onChange={handleChange}
    className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 w-full h-12 leading-normal"
  >
    <option value="hide" disabled selected>
      Select number of mentors
    </option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
);
