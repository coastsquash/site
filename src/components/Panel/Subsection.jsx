import PropTypes from "prop-types";

const Subsection = ({ children, className, title }) => (
  <div className={`flex flex-col gap-4 ${className}`}>
    {title && <p className="text-normal font-bold">{title}</p>}
    {children}
  </div>
);

Subsection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

Subsection.defaultProps = {
  className: undefined,
  title: undefined,
};

export default Subsection;
