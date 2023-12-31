import PropTypes from "prop-types";

import Section from "./Section";
import Subsection from "./Subsection";

const Panel = ({ children, className, title }) => (
  <div className={className}>
    { title && <p className="text-4xl font-bold mb-8">{title}</p>}
    <div className="bg-slate-100 border border-slate-400 px-8 pb-8 pt-4 solid shadow-xl">
      {children}
    </div>
  </div>
);

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

Panel.defaultProps = {
  className: null,
  title: null,
};

Panel.Section = Section;
Panel.Subsection = Subsection;

export default Panel;
