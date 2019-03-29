import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBarContainer';

import styled from '@emotion/styled'

var white = "#FFFFFF";
var black = "#2D2D2D";
var red = "#C03A2B";
var blue = "#3B3D9A";
var pink = "#ffb8b8";

const TextLink = styled.h2`
    text-decoration:none;
    font-family: NetflixRegular;
    font-size: 2em;
    color: ${white};
    :hover {
      color: ${pink};
    }
`

const NavContainer = styled.div`
    padding: 0px 20px 0px 20px;
    background-color: ${black};
    :hover {
      color: ${white};
    }

`

const Nav = ({handleClick}) => (
  <NavContainer className="nav">
    <div className="row middle-md">
      <div className="col-md-1 middle-md">
        <Link style={{ textDecoration: 'none'}} to="/">
          <TextLink>Home</TextLink>
        </Link>
      </div>
      <div className="col-md-8 center-md">
        <SearchBar/>
      </div>
    </div>
  </NavContainer>
);

export default Nav;
