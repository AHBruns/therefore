export const Footer = () => {
  return (
    <footer>
      <div className="border-t border-gray-300 flex items-center justify-center p-4">
        <p className="text-gray-700 tracking-wider leading-tight font-light text-sm">
          Alex Bruns &middot; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
