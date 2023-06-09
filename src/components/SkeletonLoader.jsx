import React from "react";

const SkeletonLoader = () => {
  return (
    <div>
      <div className="w-auto">
        <div className="relative space-y-5 overflow-hidden rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:-skew-x-12 before:animate-[shimmer_2s_infinite] before:border-t before:border-white/10 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent">
          <div className="space-y-3">
            <div className="h-3 w-3/5 rounded-lg bg-white/5"></div>
            <div className="h-3 w-4/5 rounded-lg bg-white/10"></div>
            <div className="h-3 w-2/5 rounded-lg bg-white/5"></div>
          </div>
          <div className="h-[400px] rounded-lg bg-white/5"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
