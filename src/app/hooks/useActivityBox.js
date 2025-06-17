import { useState, useEffect } from "react";

export const useActivityBox = () => {
  const [activityList, setActivityList] = useState([]);
  const [showActivityBox, setShowActivityBox] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("activityList");
    if (stored) setActivityList(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("activityList", JSON.stringify(activityList));
  }, [activityList]);

  const toggleActivityBox = () => {
    setShowActivityBox((prev) => !prev);
  };

  const addActivity = (prompt, media) => {
    setActivityList([{ prompt, media }, ...activityList]);
    setShowActivityBox(true);
  };

  return {
    activityList,
    showActivityBox,
    setShowActivityBox,
    toggleActivityBox,
    addActivity,
  };
};
