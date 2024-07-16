"use client";
import React, { useState } from "react";
import { Switch } from "@headlessui/react";

interface ISwitcherProps {
  defaultEnabled: boolean;
  onChange?: (enabled: boolean) => void;
}
const Switcher = ({ defaultEnabled, onChange }: ISwitcherProps) => {
  const [enabled, setEnabled] = useState(defaultEnabled);

  function handleOnchange(checked: boolean) {
    setEnabled(checked);
    onChange && onChange(checked);
  }

  return (
    <Switch
      checked={enabled}
      onChange={handleOnchange}
      className={`${enabled ? "bg-gray-200" : "bg-gray-200"}
          relative inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
    >
      <span
        aria-hidden="true"
        className={`${enabled ? "translate-x-5" : "translate-x-1"}
            pointer-events-none translate-y-[2px] inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
};

export default Switcher;
