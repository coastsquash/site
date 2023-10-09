import PropTypes from "prop-types";

const EmailLink = ({ phone, children }) => (
  <a href={`tel:${phone}`}>{children}</a>
);

EmailLink.propTypes = {
  phone: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default EmailLink;
