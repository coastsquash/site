import PropTypes from "prop-types";

const EmailLink = ({ to, children, className, inline }) => {
  const renderLink = <a href={`mailto:${to}`}>{children || to}</a>;

  return inline ? (
    <span className={className}>{renderLink}</span>
  ) : (
    <div className={className}>{renderLink}</div>
  );
};

EmailLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  inline: PropTypes.bool,
};

EmailLink.defaultProps = {
  children: null,
  className: null,
  inline: false,
};

export default EmailLink;
