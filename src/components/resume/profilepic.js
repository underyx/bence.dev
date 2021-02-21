import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ProfilePic = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "avatar-2020.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
);
export default ProfilePic;
