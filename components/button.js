export default ({ children, className }) => (
  <button
    className={`
        ${className}
        px-8
        py-4
        teal-btn
        rounded-lg
        text-white
        shadow-xl
        text-xl"
      `}
    type="button"
  >
    {children}
  </button>
);
