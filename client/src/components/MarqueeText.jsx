export default function MarqueeText({ children }) {
  return (
    <div className="w-full overflow-hidden bg-gray-100 border-y">
      <div className="whitespace-nowrap animate-marquee text-black font-semibold py-2 text-base">
        {children}
      </div>
    </div>
  );
}
