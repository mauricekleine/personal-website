import { MutableRefObject, useCallback, useState } from "react";

import useOnOutsideClick from "./use-on-outside-click";

const useToggle = (ref: MutableRefObject<HTMLElement>) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleOff = useCallback(
    () => setIsToggled(false),
    [setIsToggled]
  );

  const handleToggleOn = useCallback(() => setIsToggled(true), [setIsToggled]);

  const handleToggle = useCallback(
    () => setIsToggled(!isToggled),
    [isToggled, setIsToggled]
  );

  useOnOutsideClick(ref, handleToggleOff);

  return {
    handleToggle,
    handleToggleOff,
    handleToggleOn,
    isToggled,
  };
};

export default useToggle;
