import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function FilterDropdown({ options = [], selected = [], onChange }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [tempSelected, setTempSelected] = useState(selected);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!showDropdown) setTempSelected(selected); // reset on close
  }, [showDropdown]);

  const handleCheckboxChange = (value) => {
    setTempSelected((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const handleClear = () => {
    setTempSelected([]);
  };

  const handleApply = () => {
    onChange(tempSelected);
    setShowDropdown(false);
  };

  return (
    <div className="relative text-xs" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown((prev) => !prev)}
        className="bg-white px-2 py-1 font-semibold rounded-md shadow flex justify-between items-center gap-7 hover:bg-gray-50"
      >
        Filter <FontAwesomeIcon icon={faChevronDown} />
      </button>

      {showDropdown && (
        <div className="absolute z-10 mt-1 w-56 bg-white rounded-md shadow p-2">
          <div className=" overflow-auto">
            {options.map((opt, i) => (
              <label
                key={i}
                className="flex items-center gap-2 text-sm py-1 cursor-pointer hover:bg-gray-100 px-2 rounded"
              >
                <input
                  type="checkbox" 
                  checked={tempSelected.includes(opt.value)}
                  onChange={() => handleCheckboxChange(opt.value)}
                  className="accent-blue-600"
                />
                {opt.label}
              </label>
            ))}
          </div>
          <div className="flex justify-between mt-3">
            <button
              className="text-xs text-gray-500 hover:text-black hover:underline"
              onClick={handleClear}
            >
              Clear All
            </button>
            <button
              className="text-blue-600 px-2 py-1 hover:text-blue-700 hover:bg-gray-100 rounded-lg"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterDropdown;