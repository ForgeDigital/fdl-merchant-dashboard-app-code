import React from "react";

interface IDashboardCard {
  icon: React.ReactNode;
  title: string;
  number: string;
  className?: string;
}

const DashboardCard: React.FC<IDashboardCard> = ({
  icon,
  title,
  number,
  className,
}) => {
  return (
    <div className="w-[25%] border shadow-lg px-5 rounded-md py-5">
      <div className="flex items-center gap-6">
        <div>
          <div
            className={`${className} w-16 h-16 rounded-full flex justify-center items-center`}
          >
            {icon}
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-3xl font-semibold text-gray-800">{number}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
