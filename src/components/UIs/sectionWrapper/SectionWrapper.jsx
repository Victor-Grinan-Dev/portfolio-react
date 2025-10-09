
const SectionWrapper = ({ children }, sectionId) => {
  return (
    <section id={sectionId} className={sectionId}>
      {children}
    </section>
  );
};

export default SectionWrapper;