import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";

export const useField = (type: HTMLInputTypeAttribute) => {
  const [value, setValue] = useState(type === "number" ? 0 : "");
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const reset = () => setValue("");

  return {
    value,
    type,
    onChange,
    reset,
  };
};
