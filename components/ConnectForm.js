import axios from "axios";
import Button from "./button";
import PictureDropzone from "./Input/PictureDropzone";
import SchoolSelect from "./Input/SchoolSelect";
import YearSelect from "./Input/YearSelect";
import NumSelect from "./Input/NumSelect";

class ConnectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      hometown: "",
      highSchool: "",
      currentGrade: "",
      extracurriculars: "",
      fieldOfInterest: "",
      collegesOfInterest: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    axios
      .post("/api/connect-with-mentor", { user: this.state })
      .then(resp => {
        console.log("resp", resp.data);
      })
      .catch(e => {
        console.log("e", e);
      });
  }

  render() {
    return (
      <div
        className="w-3/4 mx-2 py-8 px-20 border border-solid rounded-sm border-gray-300"
        style={{
          boxShadow: "0 10px 28px rgba(0,0,0,.08)"
        }}
      >
        <div className="flex my-8">
          <div className="w-1/2 mr-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              for="firstName"
            >
              First name
            </label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              placeholder="Jane"
              onChange={this.handleChange}
              className="w-full h-12 focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 appearance-none leading-normal"
            />
          </div>
          <div className="w-1/2 ml-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              for="lastName"
            >
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              placeholder="Doe"
              onChange={this.handleChange}
              className="w-full h-12 focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 appearance-none leading-normal"
            />
          </div>
        </div>

        <div className="flex my-8">
          <div className="w-1/2 mr-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              for="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="jane@example.com"
              className="w-full h-12 focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 appearance-none leading-normal"
            />
          </div>
          <div className="w-1/2 ml-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              for="phoneNumber"
            >
              Phone number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              placeholder="(123) 456-7890"
              className="w-full h-12 focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 appearance-none leading-normal"
            />
          </div>
        </div>

        <div className="flex my-8">
          <div className="w-1/2 mr-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              for="collegesOfInterest"
            >
              College(s) of interest
            </label>
            <input
              type="text"
              name="collegesOfInterest"
              value={this.state.collegesOfInterest}
              onChange={this.handleChange}
              placeholder="Harvard and Yale"
              className="w-full h-12 focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 appearance-none leading-normal"
            />
          </div>
          <div className="w-1/2 ml-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              for="currentGrade"
            >
              Current grade
            </label>
            <select
              id="currentGrade"
              name="currentGrade"
              onChange={this.handleChange}
              className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 w-full h-12 leading-normal text-gray-500"
            >
              <option value="hide" className="text-gray-500">
                Select current grade
              </option>
              <option value="1">High school freshman</option>
              <option value="2">High school sophomore</option>
              <option value="3">High school junior</option>
              <option value="4">High school senior</option>
            </select>
          </div>
        </div>

        <div className="flex my-8">
          <div className="w-1/2 mr-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              for="fieldOfInterest"
            >
              Field of interest
            </label>
            <input
              type="text"
              name="fieldOfInterest"
              value={this.state.fieldOfInterest}
              onChange={this.handleChange}
              placeholder="Physics"
              className="w-full h-12 focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 appearance-none leading-normal"
            />
          </div>
          <div className="w-1/2 ml-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              for="extracurriculars"
            >
              Extracurriculars
            </label>
            <input
              type="text"
              name="extracurriculars"
              value={this.state.extracurriculars}
              placeholder="Water polo and debate"
              onChange={this.handleChange}
              className="w-full h-12 focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 appearance-none leading-normal"
            />
          </div>
        </div>

        <div className="flex my-8">
          <div className="w-1/2 mr-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              for="highSchool"
            >
              High school
            </label>
            <input
              type="text"
              name="highSchool"
              value={this.state.highSchool}
              onChange={this.handleChange}
              placeholder="Magnet High School"
              className="w-full h-12 focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 appearance-none leading-normal"
            />
          </div>
          <div className="w-1/2 ml-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              for="highSchool"
            >
              Hometown
            </label>
            <input
              type="text"
              name="hometown"
              value={this.state.hometown}
              onChange={this.handleChange}
              placeholder="San Francisco, USA"
              className="w-full h-12 focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 appearance-none leading-normal"
            />
          </div>
        </div>
        <span className="flex justify-center" onClick={this.handleSubmit}>
          <Button size="lg">SEND MESSAGE</Button>
        </span>
      </div>
    );
  }
}

export default ConnectForm;
