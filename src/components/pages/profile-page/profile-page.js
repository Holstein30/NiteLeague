import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";
import { bindActionCreators } from "redux";
import Avatar from "../../global/avatar";
import ProfilePageLinks from "./links";
import CurrentTeam from "./list/profile-page-list-teams";
import CurrentLeague from "./list/profile-page-list-leagues";
import Button from "../../global/buttons";

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <div className="header-container" style={{ border: "solid 2px" }}>
          <Avatar avatar="../../../../../public/images/ph1.jpg" />

          <ProfilePageLinks />
        </div>
        <CurrentTeam />
        <Button link="#" className="create-team-button" name="Create a team" />
        <CurrentLeague />
        <Button
          link="#"
          className="create-join-league-button"
          name="Create or Join a league"
        />
        <Button
          link="#"
          className="delete-profile-button"
          name="Delete Profile"
        />
      </div>
    );
  }
}

// makes the state availible as props of that same name in the component
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

// makes the action creators able to be called directly within our component
// with the same name as the action creator itself
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser: fetchUser }, dispatch);
}

// turns the ProfilePage component into a container that has access to
// the application state as well as our actions/action creators
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
