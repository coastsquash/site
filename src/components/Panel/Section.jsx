import PropTypes from "prop-types";

const Section = ({ children, className, title }) => (
  <div className={`flex flex-col gap-4 ${className}`}>
    {title && <p className="text-lg font-bold">{title}</p>}
    {children}
  </div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

Section.defaultProps = {
  className: undefined,
  title: undefined,
};

export default Section;
