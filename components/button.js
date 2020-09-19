export default ({ children, className }) => (
  <button
    className={`
        ${className}
        sm:px-8
        px-4
        py-4
        teal-btn
        rounded-sm
        text-white
        shadow-xl
        text-xl"
      `}
    type="submit"
  >
    {children}
  </button>
);
