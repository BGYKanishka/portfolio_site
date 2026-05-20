import React from 'react';
import { Helmet } from 'react-helmet';

export default function PageTitle({ title }) {
  const fullTitle = title === "Home" 
    ? "Yehan Kanishka | Systems & Software Engineer" 
    : `${title} | Yehan Kanishka`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
    </Helmet>
  );
}
