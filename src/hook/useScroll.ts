import { useState, useEffect } from "react";

function useScroll(id: string) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    function handleOnScroll() {
      const offSetHeight = window.innerHeight
      if (offSetHeight !== undefined) {
        if (window.pageYOffset > offSetHeight * 0.7) {
          setChecked(true);
        }
      }
    }
    window.addEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, [id]);

  return {
    checked,
  };
}

export default useScroll;
