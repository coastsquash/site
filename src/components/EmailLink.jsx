import PropTypes from "prop-types";

const EmailLink = ({ to, children, className, inline }) => {
  const renderLink = <a href={`mailto:${to}`}>{children}</a>;

  return inline ? (
    <span className={className}>{renderLink}</span>
  ) : (
    <div className={className}>{renderLink}</div>
  );
};

EmailLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  inline: PropTypes.bool,
};

EmailLink.defaultProps = {
  className: null,
  inline: false,
};

export default EmailLink;
