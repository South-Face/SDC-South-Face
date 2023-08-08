require('@testing-library/jest-dom');
const React = require('react');
const { render } = require('@testing-library/react');
const Footer = require('../src/components/Footer/Footer.jsx');

test('Component renders without errors', () => {
    render(<Footer />);
  });


