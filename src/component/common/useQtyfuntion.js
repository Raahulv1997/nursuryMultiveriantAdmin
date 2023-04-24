import React from "react";
import { useState } from "react";

function useQtyfuntion(initialState) {
  const [state, setState] = useState(initialState);

  return {
    state,
    setState,
  };
}

export default useQtyfuntion;
