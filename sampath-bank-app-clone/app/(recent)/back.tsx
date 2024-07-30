import { router } from "expo-router";
import React, { useEffect } from "react";

export default function Back() {
  useEffect(() => {
    router.back();
  });

  return <div></div>;
}
