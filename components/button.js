export default ({ children, className }) => (
  <button
    className={`
        ${className}
        px-8
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
