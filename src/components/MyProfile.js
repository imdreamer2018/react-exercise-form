import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: 'male',
      description: '',
      haveRead: false,
    }
  }

  handleFiledChange = (field, event) => {
    this.setState({
      [field]: event.target.value,
    });
  };

  handleCheckChange = (field, event) => {
    this.setState({
      [field]: event.target.checked,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
          <h1>My Profiles</h1>
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder = "Your name"
          value={this.state.name}
          onChange={(e) => {this.handleFiledChange("name", e)}}
        />
        </div>
        <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select
          className="custom-select"
          id="gender"
          value={this.state.gender}
          onChange={(e) => {this.handleFiledChange("gender", e)}}
        >
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder = "Description about yourself"
            value={this.state.description}
            onChange={(e) => {this.handleFiledChange("description", e)}}
          />
        </div>
        <div className="form-group form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="haveRead"
            id="haveRead"
            disabled={!this.state.name || !this.state.gender || !this.state.description}
            value={this.state.haveRead}
            onChange={(e) => {this.handleCheckChange("haveRead", e)}}
          />
          <label className="form-check-label">
            I have read terms of conduct
          </label>
        </div>
        <div className="form-group text-center">
        <input
          id="profileSubmit"
          type="submit"
          className="btn btn-primary "
          value="Submit"
          disabled={!this.state.haveRead}
        />
        </div>

      </form>
      </div>
    );
  }
}

export default MyProfile;


