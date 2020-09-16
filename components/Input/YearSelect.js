export default ({ handleChange }) => (
  <select
    id="yearOfCollege"
    name="yearOfCollege"
    onChange={handleChange}
    className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 w-full h-12 leading-normal"
  >
    <option value="hide" disabled selected>
      Select year
    </option>
    <option value="freshman">Freshman</option>
    <option value="sophomore">Sophomore</option>
    <option value="junior">Junior</option>
    <option value="senior">Senior</option>
  </select>
);
