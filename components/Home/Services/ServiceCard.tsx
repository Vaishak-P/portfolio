"use client";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};
const ServiceCard = ({ service }: Props) => {
  return (
    <Tilt className="shadow-2xl p-6 rounded-lg bg-blue-500">
      {/* <Image
        src={`${service.icon}`}
        alt={service.title}
        width={50}
        height={50}
      /> */}
      <h1>{service.title}</h1>
    </Tilt>
  );
};

export default ServiceCard;
