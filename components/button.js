export default ({ children, className }) => (
  <button
    className={`
        ${className}
        px-8
        py-4
        bg-purple-900
        hover:bg-purple-800
        rounded-lg
        text-white
        text-xl"
      `}
    type="button"
  >
    {children}
  </button>
);
