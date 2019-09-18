import axios from 'axios';
import {NavLink as NL,Link,NavLink} from 'react-router-dom';
import React, { Component } from 'react';
import env from './env.json';
import { connect } from 'react-redux'
import {mapDispatchCountries} from '../reducers/actions'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
class NavBar extends Component {
  componentDidMount(){this.props.getCountries();this.props.getCategories();}

  constructor(props) {
    super(props);
    let curr=this;
    this.props.getCourses();
    if(localStorage.getItem('token')){this.props.login()}
    this.state = {
      isOpen: false
    };
    axios('http://ip-api.com/json')
    .then(
        function success(response) {
            console.log('User\'s Country', response.data.country);
            axios(env.img+'/getCountry/'+response.data.country)
                .then(function success(res) {
                  curr.props.setCountry(res.data[0])
		// curr.props.setCurrencyRate(res.data[0].Currency)
            })
        });
  }

  logout=()=> {localStorage.clear();this.props.logout();window.location.href = '/';}
  toggle=() => {
    this.setState({isOpen: !this.state.isOpen});
  }
  render() {
    let courses=this.props.state.courses,categories=this.props.state.category;
    let role;
    if(localStorage.token){role=localStorage.token[localStorage.token.length-1];}
    console.log(courses);
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="bg-darkblue">
      <Navbar.Brand  href="/"><img height="80" src={env.img+'/static/img/itrain.png'} className="logo" alt="logo"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Admin" id="collasible-nav-dropdown">
            <NavDropdown.Item><Link to="/CreateCourse">CreateCourse</Link></NavDropdown.Item>
            <span><NavDropdown.Divider />
            <NavDropdown.Item><Link to="/CourseList">CourseList</Link></NavDropdown.Item></span>
          </NavDropdown>
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
          {categories?categories.map((category,index) =>(        
            <NavDropdown.Item><Link to={"/category/"+category}>{category}</Link></NavDropdown.Item>
          )):<span></span>}
          </NavDropdown>
          <NavDropdown title="Courses" id="collasible-nav-dropdown">
          {courses?courses.map((course,index) =>(
            <NavDropdown.Item><Link to={"/course/"+course.courseName}>{course.courseName}</Link></NavDropdown.Item>
          )):<span></span>}
          </NavDropdown>          
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="#memes">
          <button className="btn btn-dark">Logout</button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
}
const mapStateToProps = (state) => {return {state:state}}
export default connect(mapStateToProps,mapDispatchCountries)(NavBar);
