const Button = ({ text, className, children }) => {
  return (
    <button
      className={`px-[15px] py-[10px] md:px-[22px] md:py-[15px] rounded-xl cursor-pointer whitespace-nowrap button-for-all-blocks ${className}`}
    >
      {children || text}
    </button>
  );
};

export default Button;
