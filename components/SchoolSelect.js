export default () => (
  <div className="flex flex-col items-center">
    <p className="text-lg text-gray-700">
      Select the schools you are interested in
    </p>
    <ul class="ks-cboxtags">
      <li className="mx-1">
        <input type="checkbox" id="upenn" value="upenn" />
        <label for="upenn">University of Pennsylvania</label>
      </li>
      <li className="mx-1">
        <input type="checkbox" id="columbia" value="columbia" />
        <label for="columbia">Columbia</label>
      </li>
      <li className="mx-1">
        <input type="checkbox" id="princeton" value="princeton" />
        <label for="princeton">Princeton</label>
      </li>
      <li className="mx-1">
        <input type="checkbox" id="harvard" value="harvard" />
        <label for="harvard">Harvard</label>
      </li>
      <li className="mx-1">
        <input type="checkbox" id="brown" value="brown" />
        <label for="brown">Brown</label>
      </li>
      <li className="mx-1">
        <input type="checkbox" id="yale" value="yale" />
        <label for="yale">Yale</label>
      </li>
      <li className="mx-1">
        <input type="checkbox" id="dartmouth" value="dartmouth" />
        <label for="dartmouth">Dartmouth</label>
      </li>
      <li className="mx-1">
        <input type="checkbox" id="cornell" value="cornell" />
        <label for="cornell">Cornell</label>
      </li>
    </ul>
  </div>
);
