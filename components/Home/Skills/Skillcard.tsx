import Image from "next/image";
import React from "react";

type Props = {
  skill: {
    id: number;
    title: string;
    image: any;
  };
};
const SkillCard = ({ skill }: Props) => {
  const { image, title } = skill;
  return (
    <div
      className="p-6 hover:bg-blue-800 bg-gray-500 duration-300 transition-all cursor-pointer text-center rounded-lg
    bg-gray-800"
    >
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-cover mx-auto"
      />
      <h1 className="text-[18px] mt-4 text-white font-[600]">{title}</h1>
    </div>
  );
};

export default SkillCard;
