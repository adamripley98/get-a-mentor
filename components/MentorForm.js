import axios from "axios";
import Button from "./button";
import PictureDropzone from "./Input/PictureDropzone";
import SchoolSelect from "./Input/SchoolSelect";
import YearSelect from "./Input/YearSelect";
import NumSelect from "./Input/NumSelect";

class MentorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      profilePicture: "",
      email: "",
      phoneNumber: "",
      college: "",
      yearOfCollege: "",
      fieldOfStudy: "",
      activities: "",
      careerInterests: "",
      hometown: "",
      highSchool: "",
      numMentees: "",
      success: false,
      error: false,
      pending: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showErrorMessage = this.showErrorMessage.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    this.setState({ pending: true });
    axios
      .post("/api/add-mentor", { user: this.state })
      .then(resp => {
        if (resp.data.success === true) {
          this.setState({
            success: true,
            pending: false,
            error: false
          });
          window.scrollTo(0, 0);
        } else {
          this.setState({
            success: false,
            pending: false,
            error: true
          });
          window.scrollTo(0, 0);
        }
      })
      .catch(e => {
        this.setState({
          success: false,
          pending: false,
          error: true
        });
      });
  }

  showErrorMessage() {
    if (this.state.error) {
      return (
        <div className="bg-red-200 py-4 px-6 rounded-lg">
          <h1>
            There was an error submitting your information. Please ensure all
            fields are filled out completely. If issue persists, send us your
            application directly via email.
          </h1>
        </div>
      );
    } else {
      return null;
    }
  }

  showSuccessMessage() {
    return (
      <div className="bg-green-200 py-4 px-6 rounded-lg">
        <h1>
          Request sent successfully! We will reach out to you shortly with next
          steps.
        </h1>
      </div>
    );
  }

  showForm() {
    return (
      <>
        <div className="flex my-8">
          <div className="w-1/2 mr-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              for="name"
            >
              Full name
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Jane Doe"
              onChange={this.handleChange}
              className="w-full h-12 focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 appearance-none leading-normal"
            />
          </div>
          <div className="w-1/2 ml-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              for="profilePicture"
            >
              Profile picture
            </label>
            <PictureDropzone />
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
              for="college"
            >
              College
            </label>
            <SchoolSelect handleChange={this.handleChange} />
          </div>
          <div className="w-1/2 ml-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              for="yearOfCollege"
            >
              Year of college
            </label>
            <YearSelect handleChange={this.handleChange} />
          </div>
        </div>

        <div className="flex my-8">
          <div className="w-1/2 mr-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              for="fieldOfStudy"
            >
              Field of study
            </label>
            <input
              type="text"
              name="fieldOfStudy"
              value={this.state.fieldOfStudy}
              onChange={this.handleChange}
              placeholder="Physics"
              className="w-full h-12 focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 appearance-none leading-normal"
            />
          </div>
          <div className="w-1/2 ml-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              for="activities"
            >
              On-Campus Activities
            </label>
            <input
              type="text"
              name="activities"
              value={this.state.activities}
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
              for="careerInterests"
            >
              Career interests
            </label>
            <input
              type="text"
              name="careerInterests"
              value={this.state.careerInterests}
              onChange={this.handleChange}
              placeholder="Investment banking"
              className="w-full h-12 focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 appearance-none leading-normal"
            />
          </div>
          <div className="w-1/2 ml-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              for="numMentees"
            >
              Number of mentees per month
            </label>
            <NumSelect handleChange={this.handleChange} />
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
          <Button size="lg">
            {this.state.pending ? "SIGNING UP..." : "SIGN UP"}
          </Button>
        </span>
      </>
    );
  }

  render() {
    return (
      <div
        className="w-3/4 mx-2 py-8 px-20 border border-solid rounded-sm border-gray-300"
        style={{
          boxShadow: "0 10px 28px rgba(0,0,0,.08)"
        }}
      >
        {this.showErrorMessage()}
        {this.state.success ? this.showSuccessMessage() : this.showForm()}
      </div>
    );
  }
}

export default MentorForm;
