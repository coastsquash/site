import PropTypes from "prop-types";

const SmsLink = ({ to, children, className, inline }) => {
  const renderLink = <a href={`sms:${to}`}>{children || to}</a>;

  return inline ? (
    <span className={className}>{renderLink}</span>
  ) : (
    <div className={className}>{renderLink}</div>
  );
};

SmsLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  inline: PropTypes.bool,
};

SmsLink.defaultProps = {
  children: null,
  className: null,
  inline: false,
};

export default SmsLink;
