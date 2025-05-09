"use client";
import Image from "next/image";

const AuthForm = () => {
  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" height={32} width={38} alt="Voxten" />
          <h2 className="text-primary-100">VoxTen</h2>
        </div>

        <h3 className="flex justify-center">Practice Job Interviews with AI</h3>
      </div>
    </div>
  );
};

export default AuthForm;
