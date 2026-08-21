
const SectionWrapper = ({ children, id, bgcolor, extraStyles }) => {
  return (
    <section id={id} className={bgcolor} style={extraStyles}  >
      {children}
    </section>
  );
};

export default SectionWrapper;