import PropTypes from "prop-types";

const PhoneLink = ({ phone, children, className, inline }) => {
  const renderLink = <a href={`tel:${phone}`}>{children}</a>;

  return inline ? (
    <span className={className}>{renderLink}</span>
  ) : (
    <div className={className}>{renderLink}</div>
  );
};

PhoneLink.propTypes = {
  phone: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  inline: PropTypes.bool,
};

PhoneLink.defaultProps = {
  className: null,
  inline: false,
};

export default PhoneLink;
