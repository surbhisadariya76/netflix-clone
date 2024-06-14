import React from "react";

export default function LoginTopic({title, description}) {
  return (
    <div className="w-6/12 px-8 h-full flex flex-col justify-center">
      <h1 className="text-5xl font-bold mb-5 leading-[3.5rem]">{title}</h1>
      <p className="text-[25px] leading-8">
       {description}
      </p>
    </div>
  );
}
