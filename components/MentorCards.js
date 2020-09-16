import MentorCard from "./MentorCard";
import SchoolSelect from "./SchoolSelect";

class MentorCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: this.props.mentors || [],
      filteredMentors: []
    };
    this.filterMentors = this.filterMentors.bind(this);
  }

  filterMentors(checkStates) {
    const { mentors } = this.state;
    const filteredMentors = mentors.filter(mentor => {
      if (mentor.College === "University of Pennsylvania") {
        return checkStates["upenn"];
      }
      return checkStates[mentor.College.toLowerCase()];
    });
    this.setState({ filteredMentors });
  }

  render() {
    return (
      <>
        <SchoolSelect filterMentors={this.filterMentors} />
        <div className="flex justify-center">
          {this.state.filteredMentors.map(mentor => (
            <div
              key={mentor.lastName}
              className="w-full md:w-1/2 lg:w-1/3 mb-4"
            >
              <MentorCard mentor={mentor} />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default MentorCards;
