import Button from "./button";

class MentorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      profilePicture: "",
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
  }

  render() {
    return (
      <div
        className="mx-2 py-8 px-4 border border-solid rounded-sm border-gray-300 flex flex-col items-center"
        style={{
          boxShadow: "0 10px 28px rgba(0,0,0,.08)"
        }}
      >
        <div className="">
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
                className="w-full h-16 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"
              />
            </div>
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
                placeholder="jane@example.com"
                className="w-full h-16 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"
              />
            </div>
          </div>
          <input
            type="tel"
            name="phoneNumber"
            value={this.state.phoneNumber}
            placeholder="(123) 456-7890"
            className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full appearance-none leading-normal"
          />
          <input
            type="text"
            name="fieldOfStudy"
            value={this.state.fieldOfStudy}
            placeholder="Physics"
            className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full appearance-none leading-normal"
          />
          <input
            type="text"
            name="activities"
            value={this.state.activities}
            placeholder="Water polo and debate"
            className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full appearance-none leading-normal"
          />
          <input
            type="text"
            name="careerInterests"
            value={this.state.careerInterests}
            placeholder="Investment banking"
            className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full appearance-none leading-normal"
          />
          <input
            type="text"
            name="highSchool"
            value={this.state.highSchool}
            placeholder="Magnet High School"
            className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full appearance-none leading-normal"
          />
          <Button size="lg">
            <a className="btn-link" href="/TODO">
              SIGN UP
            </a>
          </Button>
        </div>
      </div>
    );
  }
}

export default MentorForm;
