import React from 'react';
import Nav from '../../Nav/NavContainer';
import styled from '@emotion/styled'

var black = "#2D2D2D";
var pink = "#FFB8B7";
var blue = "#3B3D9A";

const TextTitle = styled.h2`
  color: ${pink};
  font-family: NetflixBold;
  font-size: 45px;
  text-align : center;
`

const Section = styled.section`
display: flex;
align-content: flex-start;

`
const TitleH3 = styled.h3`
color: ${pink};

`
const Resume = styled.article`
padding: 1rem;
`

const Back = styled.a`
  color: ${pink};
  padding: 0px 0px 5px 10px;
  a {text-decoration:none} 
  a {color: ${pink}} 
  text-decoration: underline;
  font-size: 1.5rem;

`

const Info = ({data}) => (
  <div className="home">
    <Nav/>
    <TextTitle>{data.Title}</TextTitle>
    <Back><div><a href="javascript:history.go(-1)">Retour</a></div></Back>
    
    <Section>
    <img src={data.Poster}/>
    
    <Resume>
    <TitleH3>
    Synopsis: 
    </TitleH3>
    <p>{data.Plot}</p>
    <TitleH3>
    Date de sortie:
    </TitleH3>
     <p>{data.Released}</p>
    <TitleH3>
    Durée:
    </TitleH3> 
    <p>{data.Runtime}</p>
    <TitleH3>
    Actors : 
    </TitleH3>
    <p>{data.Actors}</p>
    <TitleH3>
    Country: 
    </TitleH3>
    <p>{data.Country}</p>
    <TitleH3>
    Genre :
    </TitleH3> 
    <p>{data.Genre}</p>
  
    
    </Resume>
    </Section>
  </div>
);

export default Info;
