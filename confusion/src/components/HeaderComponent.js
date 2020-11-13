import React,{ Component} from 'react' ;
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, Jumbotron, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

class Header extends Component{

    constructor(props){
        super(props);

        this.state={
            isNavOpen:false,
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            //react fragment is being returned here
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />

                    
                    <NavbarBrand className="mr-auto" href="/"> 
                    <img  src="assets/images/logo.png" height="30" width="41" />
                    Ristorante conFusion
                    <img src={logo}  className="App-logo" alt="logo" height="30" width="41"/>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home"> 
                                    <span className="fa fa-home fa-md"> Home</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus"> 
                                    <span className="fa fa-info fa-md"> AboutUs</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu"> 
                                    <span className="fa fa-list fa-md"> Menu</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus"> 
                                    <span className="fa fa-address-card fa-md"> Conatct Us</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header" >
                            <div className="col-12 col-sm-6">
                                <h1> Ristorante Con Fusion</h1>
                                <p>
                                We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!
                                </p>

                            </div>
                        </div>

                    </div>
                </Jumbotron>


            </React.Fragment>

        );
    }
}

export default Header;