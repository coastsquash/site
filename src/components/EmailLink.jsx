import PropTypes from "prop-types";

const EmailLink = ({ email, children }) => (
  <a href={`mailto:${email}`}>{children}</a>
);

EmailLink.propTypes = {
  email: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default EmailLink;
