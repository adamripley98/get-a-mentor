import axios from "axios";
import Button from "./button";
import PictureDropzone from "./Input/PictureDropzone";
import SchoolSelect from "./Input/SchoolSelect";
import YearSelect from "./Input/YearSelect";
import NumSelect from "./Input/NumSelect";
import Loading from "./Loading";

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
      message: "",
      mentor: {},
      success: false,
      pending: false,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getParameterByName = this.getParameterByName.bind(this);
    this.showErrorMessage = this.showErrorMessage.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/mentor", {
        params: { id: this.getParameterByName("id", window.location.href) }
      })
      .then(resp => {
        this.setState({ mentor: resp.data.data });
      })
      .catch(e => console.log("e", e));
  }

  getParameterByName(name) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    this.setState({ pending: true, success: false, error: false });
    axios
      .post("/api/connect-with-mentor", { data: this.state })
      .then(resp => {
        if (resp.data.success == "true") {
          this.setState({ success: true, error: false, pending: false });
          window.scrollTo(0, 0);
        } else {
          this.setState({ success: false, error: true, pending: false });
          window.scrollTo(0, 0);
        }
      })
      .catch(e => {
        this.setState({ success: false, error: true, pending: false });
      });
  }

  showErrorMessage() {
    if (this.state.error) {
      return (
        <div className="bg-red-200 py-4 px-6 rounded-lg">
          <h1>
            There was an error sending your message. Please reach out to{" "}
            {this.state.mentor.Name} directly at{" "}
            <a href={`mailto:${this.state.mentor.Email}`}>
              {this.state.mentor.Email}
            </a>
            .
          </h1>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <>
        {this.state.mentor && this.state.mentor.Name ? (
          <>
            <h1 className="mb-8 text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center dark-font">
              Connect with {this.state.mentor.Name}
            </h1>
            <div className="flex justify-center">
              <div
                className="w-3/4 mx-2 py-8 px-20 border border-solid rounded-sm border-gray-300"
                style={{
                  boxShadow: "0 10px 28px rgba(0,0,0,.08)"
                }}
              >
                {this.state.success ? (
                  <div className="bg-green-200 py-4 px-6 rounded-lg">
                    <h1>
                      Message sent successfully! {this.state.mentor.Name} will
                      reach out to you directly via email soon.
                    </h1>
                  </div>
                ) : (
                  <>
                    {this.showErrorMessage()}
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
                          className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 w-full h-12 leading-normal"
                        >
                          <option value="hide" disabled selected>
                            Select current grade
                          </option>
                          <option value="9">Grade 9</option>
                          <option value="10">Grade 10</option>
                          <option value="11">Grade 11</option>
                          <option value="12">Grade 12</option>
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
                    <div className="flex my-8">
                      <div className="w-full">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-1"
                          for="message"
                        >
                          Message
                        </label>
                        <textarea
                          type="text"
                          rows="6"
                          name="message"
                          value={this.state.message}
                          onChange={this.handleChange}
                          placeholder="Type your message here"
                          className="w-full focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 appearance-none leading-normal"
                        />
                      </div>
                    </div>
                    <span
                      className="flex justify-center"
                      onClick={this.handleSubmit}
                    >
                      <Button size="lg">
                        {this.state.pending ? "SENDING..." : "SEND MESSAGE"}
                      </Button>
                    </span>
                  </>
                )}
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default ConnectForm;
