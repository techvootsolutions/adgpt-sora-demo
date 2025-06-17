import React from "react";

const ActivityBox = ({
  activityList,
  activityBoxRef,
  setShowActivityBox,
  setSelectedMedia,
}) => {
  const handleActivityClick = (activity) => {
    setShowActivityBox(false);
    setSelectedMedia(activity.media);
  };

  return (
    <div
      ref={activityBoxRef}
      className="fixed top-16 right-5 z-50 w-96 max-h-[80vh] overflow-auto bg-transparent backdrop-blur-3xl backdrop-brightness-50 rounded-lg shadow-lg p-4"
    >
      {activityList?.length === 0 ? (
        <p className="text-gray-500">No activity yet.</p>
      ) : (
        <div>
          {activityList?.map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-700 cursor-pointer rounded-lg"
              onClick={() => handleActivityClick(activity)}
            >
              <img
                src={activity.media.src}
                alt="preview"
                className="w-10 h-10 object-cover rounded-md"
              />
              <div className="flex-1 text-sm text-white truncate">
                {activity.prompt}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActivityBox;
