import { Helmet } from 'react-helmet';

export const PageTitle = ({ title }) => {
  const baseTitle = 'Best Chartered Accountant in Delhi | CPA India';
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>
    </Helmet>
  );
};