export default function SkipLink() {
  return (
    <a 
      href="#main-content" 
      className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-brand-primary focus:font-medium"
    >
      Skip to main content
    </a>
  );
}
