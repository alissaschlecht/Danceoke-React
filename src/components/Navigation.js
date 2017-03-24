import React, { Component } from 'react';
import '../stylesheets/App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Navigation extends Component {

  getOffset(element) {
    let bounding = element.getBoundingClientRect();
    return {
        top: bounding.top + document.body.scrollTop,
        left: bounding.left + document.body.scrollLeft
      };
  }

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.getOffset = this.getOffset.bind(this);
    this.state = {isColor:false};
  }

  handleScroll(){
    let {isColor} = this.state;
    let navbar = this.refs.navbar;
    let startElement = this.refs.something;
    let offset = this.getOffset(startElement)    
    let windowsScrollTop  = window.pageYOffset;
    console.log(offset.top);
    console.log('window '+ windowsScrollTop);

    if(windowsScrollTop >= offset.top){     
      this.setState({isColor:true});
      console.log('should be red');         
    }else{
      this.setState({isColor:false})   
    }
  }
    
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);        
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {

    console.log(this.state);

    let classColor;
    if(this.state.isColor == true){
      classColor = "navbar-solid";
    }else{
      classColor = '';
    }

    return (
      <div>
        <Navbar className={'customNav ' + classColor} ref='navbar' fixedTop collapseOnSelect >
          <Navbar.Collapse>
            <Nav>
              <NavDropdown eventKey={3} title="Navigation" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>My videos</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Login</NavItem>
              <NavItem eventKey={2} href="#">Logout</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div id='something' ref='something'>
          SOMETHING
        </div>
      </div>
    );
  }
}

export default Navigation;