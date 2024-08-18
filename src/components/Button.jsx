export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-3 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      {...props}>
      {children}
    </button>
  );
}
