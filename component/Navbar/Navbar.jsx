import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import { BiSearch } from 'react-icons/bi';

class Navigation extends Component {

    renderProductList = () => {
        var jsx = this.props.productData.map(val => {
            return (
                <div key={val.id}>
                    <Link href={"/Product/" + val.id} ><a><NavDropdown.Item as="span">{val.Name}</NavDropdown.Item></a></Link>
                </div>
            )
        })
        return jsx
    }
   
    render() {
        return (
            <div>
                <Navbar bg="transparent" expand="lg">
                <div className="container">
                    <Link href="/">
                        <Navbar.Brand href="/">
                            <Image src="/fulllogo.jpg" alt='Full Logo' width={150} height={150}/>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <NavDropdown title="Produkte & Services" href="/" id="basic-nav-dropdown">
                            {this.renderProductList()}
                        </NavDropdown>
                        <Nav.Link as="span"><Link href="/"><a>Gesundheitswesen</a></Link></Nav.Link>
                        <Nav.Link as="span"><Link href="/"><a>Medizintechnik</a></Link></Nav.Link>
                        <Nav.Link as="span"><Link href="/"><a>Weitere Branchen</a></Link></Nav.Link>
                        <Nav.Link as="span"><Link href="/"><a><BiSearch/></a></Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
