"use client";
import IconLockDots from "@/components/icon/icon-lock-dots";
import IconMail from "@/components/icon/icon-mail";
import IconUser from "@/components/icon/icon-user";
import { ROUTES } from "@/constants/routes";
import { useAuth } from "@/hooks/useAuth";
import { TInputForm } from "@/types/inputForm";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const ComponentAuthRegisterForm = () => {
  const { register, isRemember, loading } = useAuth();
  const [inputs, setInputs] = useState<TInputForm>({});
  const [showPasswd, setShowPasswd] = useState(false);

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    await register(inputs, isRemember);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleShowPasswd = () => {
    setShowPasswd(!showPasswd);
  };
  return (
    <form className="space-y-5 dark:text-white" onSubmit={submitForm}>
      <div>
        <label htmlFor="Name">Name</label>
        <div className="relative text-white-dark">
          <input
            id="Name"
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
            placeholder="Enter Name"
            className="form-input ps-10 placeholder:text-white-dark"
          />
          <span className="absolute start-4 top-1/2 -translate-y-1/2">
            <IconUser fill={true} />
          </span>
        </div>
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <div className="relative text-white-dark">
          <input
            id="Email"
            type="email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            placeholder="Enter Email"
            className="form-input ps-10 placeholder:text-white-dark"
          />
          <span className="absolute start-4 top-1/2 -translate-y-1/2">
            <IconMail fill={true} />
          </span>
        </div>
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <div className="relative text-white-dark">
          <input
            id="Password"
            type={showPasswd ? "text" : "password"}
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            placeholder="Enter Password"
            className="form-input ps-10 placeholder:text-white-dark"
          />
          <span className="absolute start-4 top-1/2 -translate-y-1/2">
            <IconLockDots fill={true} />
          </span>
          <div className="absolute top-0 bottom-0 flex items-center right-3">
            <button type="button" onClick={handleShowPasswd}>
              {showPasswd ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
        </div>
      </div>
      <div>
        <label className="flex gap-2 cursor-pointer items-center">
          <input
            type="checkbox"
            className="form-checkbox bg-white dark:bg-black"
          />
          <span className="text-white-dark">
            Subscribe to weekly newsletter
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
        disabled={loading}
      >
        {loading ? "Loading..." : "Sign in"}
      </button>
      <div className="text-center dark:text-white">
        {"Already have an account ? "}
        <Link
          href={ROUTES.LOGIN}
          className="uppercase text-primary underline transition hover:text-black dark:hover:text-white"
        >
          SIGN IN
        </Link>
      </div>
    </form>
  );
};
