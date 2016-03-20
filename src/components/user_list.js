import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {
  componentWillMount(props) {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return (
      <div className="card card-block" key={user.id}>
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <p className="card-text">
          {user.phone}<br />
          <a href={"mailto:" + user.email}>{user.email}</a><br />
        </p>
        <address>
          {user.address.street}<br />
          {user.address.city}, {user.address.zipcode}
        </address>
        <a href={"//"+ user.website} className="btn btn-primary" target="_blank">Website</a>
      </div>
    );
  }

  render() {
    return (
      <div className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps, actions)(UserList);
