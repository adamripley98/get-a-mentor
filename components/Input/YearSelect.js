export default ({ handleChange }) => (
  <select
    id="yearOfCollege"
    name="yearOfCollege"
    onChange={handleChange}
    className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full leading-normal text-gray-500"
  >
    <option value="hide" className="text-gray-500">
      Select year
    </option>
    <option value="freshman">Freshman</option>
    <option value="sophomore">Sophomore</option>
    <option value="junior">Junior</option>
    <option value="senior">Senior</option>
  </select>
);
