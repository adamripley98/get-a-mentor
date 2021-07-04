class SchoolSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upenn: false,
      harvard: false,
      dartmouth: false,
      cornell: false,
      princeton: false,
      columbia: false,
      yale: false,
      brown: false,
      uncChapelHill: false
    };
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  toggleCheckbox(e) {
    const checkStates = this.state;
    for (const school in checkStates) {
      if (school === e.target.value) {
        const newState = !checkStates[school];
        checkStates[school] = newState;
        this.setState({ [school]: newState });
        this.props.filterMentors(checkStates);
      }
    }
  }

  render() {
    return (
      <div className="flex flex-col items-center">
        <p className="text-lg text-gray-700">
          Select the schools you are interested in
        </p>
        <ul className="ks-cboxtags">
          <li className="mx-1">
            <input
              type="checkbox"
              onChange={this.toggleCheckbox}
              id="upenn"
              value="upenn"
              checked={this.state["upenn"]}
            />
            <label for="upenn">University of Pennsylvania</label>
          </li>
          <li className="mx-1">
            <input
              type="checkbox"
              onChange={this.toggleCheckbox}
              id="columbia"
              value="columbia"
              checked={this.state["columbia"]}
            />
            <label for="columbia">Columbia</label>
          </li>
          <li className="mx-1">
            <input
              type="checkbox"
              onChange={this.toggleCheckbox}
              id="princeton"
              value="princeton"
              checked={this.state["princeton"]}
            />
            <label for="princeton">Princeton</label>
          </li>
          <li className="mx-1">
            <input
              type="checkbox"
              onChange={this.toggleCheckbox}
              id="harvard"
              value="harvard"
              checked={this.state["harvard"]}
            />
            <label for="harvard">Harvard</label>
          </li>
          <li className="mx-1">
            <input
              type="checkbox"
              onChange={this.toggleCheckbox}
              id="brown"
              value="brown"
              checked={this.state["brown"]}
            />
            <label for="brown">Brown</label>
          </li>
          <li className="mx-1">
            <input
              type="checkbox"
              onChange={this.toggleCheckbox}
              id="yale"
              value="yale"
              checked={this.state["yale"]}
            />
            <label for="yale">Yale</label>
          </li>
          <li className="mx-1">
            <input
              type="checkbox"
              onChange={this.toggleCheckbox}
              id="dartmouth"
              value="dartmouth"
              checked={this.state["dartmouth"]}
            />
            <label for="dartmouth">Dartmouth</label>
          </li>
          <li className="mx-1">
            <input
              type="checkbox"
              onChange={this.toggleCheckbox}
              id="cornell"
              value="cornell"
              checked={this.state["cornell"]}
            />
            <label for="cornell">Cornell</label>
          </li>
          <li className="mx-1">
            <input
              type="checkbox"
              onChange={this.toggleCheckbox}
              id="uncChapelHill"
              value="uncChapelHill"
              checked={this.state["uncChapelHill"]}
            />
            <label for="uncChapelHill">UNC Chapel Hill</label>
          </li>
        </ul>
      </div>
    );
  }
}

export default SchoolSelect;
