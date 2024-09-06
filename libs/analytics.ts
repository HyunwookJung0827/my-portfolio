import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-5S0NMPZDHB');
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};
