import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const ProfilePic = () => (
  <StaticImage
    src="../../../content/images/avatar-2020.jpg"
    alt="profile picture of Bence Nagy"
  />
);
export default ProfilePic;
