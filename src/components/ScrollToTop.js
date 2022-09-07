import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const navigate = useNavigate();

  // https://reactjs.org/docs/hooks-reference.html#uselayouteffect
  React.useLayoutEffect(
    function () {
      // if not a hash link, scroll to top
      if (hash === "") {
        window.scrollTo(0, 0);
      }
      // else scroll to id
      else {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        } else {
          navigate("404", { replace: false });
        }
      }
    },
    [pathname, hash, key, navigate]
  );

  return null;
}
