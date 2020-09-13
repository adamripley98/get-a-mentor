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
      numMentees: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div
        className="mx-2 py-8 px-4 border border-solid rounded-sm border-gray-300 flex flex-col items-center"
        style={{
          boxShadow: "0 10px 28px rgba(0,0,0,.08)"
        }}
      >
        <div className="flex my-4">
          <div className="flex-grow mr-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-1"
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
              className="w-full h-12 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"
            />
          </div>
          <div className="flex-grow mr-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-1"
              for="profilePicture"
            >
              Profile picture
            </label>
            <PictureDropzone />
          </div>
        </div>

        <div className="flex my-4">
          <div className="flex-grow ml-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-1"
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
              className="w-full h-12 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"
            />
          </div>
          <div className="flex-grow ml-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-1"
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
              className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full appearance-none leading-normal"
            />
          </div>
        </div>

        <div className="flex my-4">
          <div className="flex-grow ml-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-1"
              for="college"
            >
              College
            </label>
            <SchoolSelect />
          </div>
          <div className="flex-grow ml-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-1"
              for="yearOfCollege"
            >
              Year of college
            </label>
            <YearSelect />
          </div>
        </div>

        <div className="flex my-4">
          <div className="flex-grow ml-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-1"
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
              className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full appearance-none leading-normal"
            />
          </div>
          <div className="flex-grow ml-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-1"
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
              className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full appearance-none leading-normal"
            />
          </div>
        </div>

        <div className="flex my-4">
          <div className="flex-grow ml-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-1"
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
              className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full appearance-none leading-normal"
            />
          </div>
          <div className="flex-grow ml-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-1"
              for="numMentees"
            >
              Number of mentees per month
            </label>
            <NumSelect />
          </div>
        </div>

        <div className="flex my-4">
          <div className="flex-grow ml-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-1"
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
              className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full appearance-none leading-normal"
            />
          </div>
          <div className="flex-grow ml-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-1"
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
              className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full appearance-none leading-normal"
            />
          </div>
        </div>
        <Button size="lg">
          <a className="btn-link" href="/TODO">
            SIGN UP
          </a>
        </Button>
      </div>
    );
  }
}

export default MentorForm;
