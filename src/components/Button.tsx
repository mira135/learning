export const Button = ({ text, className }) => {
  return (
    <>
      <button className={className}>{text}</button>
    </>
  );
};

// Try to pass className as props and style classes with CSS.
