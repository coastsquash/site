import PropTypes from "prop-types";

const PhoneLink = ({ to, children, className, inline }) => {
  const renderLink = <a href={`tel:${to}`}>{children}</a>;

  return inline ? (
    <span className={className}>{renderLink}</span>
  ) : (
    <div className={className}>{renderLink}</div>
  );
};

PhoneLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  inline: PropTypes.bool,
};

PhoneLink.defaultProps = {
  className: null,
  inline: false,
};

export default PhoneLink;
