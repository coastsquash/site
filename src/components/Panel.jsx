import PropTypes from "prop-types";

const Panel = ({ children, title }) => (
  <>
    { title && <p className="text-4xl font-bold mb-8">{title}</p>}
    <div className="bg-slate-100 border border-slate-400 px-8 pb-8 pt-4 solid shadow-xl">
      {children}
    </div>
  </>
);

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Panel.defaultProps = {
  title: null,
};

export default Panel;
