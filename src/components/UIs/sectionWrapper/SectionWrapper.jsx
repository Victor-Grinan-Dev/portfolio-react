
const SectionWrapper = ({ children, id, bgcolor }) => {
  return (
    <section id={id} className={bgcolor}>
      {children}
    </section>
  );
};

export default SectionWrapper;