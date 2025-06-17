import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function Dropdown({ label, value, setValue, options }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className="bg-[#1a1a1a] text-white px-3 h-8 flex items-center gap-1 rounded-full text-sm hover:bg-[#2a2a2a]"
        onClick={() => setOpen(!open)}
      >
        <span>{value}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute left-0 bottom-full mb-1 w-max rounded-md bg-[#2a2a2a] text-white text-sm shadow-md z-10">
          {options?.map((option) => (
            <button
              key={option}
              onClick={() => {
                setValue(option);
                setOpen(false);
              }}
              className={`block px-3 py-1.5 text-left w-full hover:bg-[#3a3a3a] ${
                value === option ? "bg-[#3a3a3a]" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
