"use client";
import { SignUpAction } from "@/actions/auth/authactions";
import Link from "next/link";
import React, { useActionState } from "react";

const SignUpPage = () => {
  const [data, action, isPending] = useActionState(SignUpAction, undefined);

  return (
    <div className="flex justify-center items-center h-full pb-8 min-h-[90vh] max-h-[90vh]">
      <form
        className="bg-mylighterblack rounded-xl p-6 flex flex-col w-80"
        action={action}
      >
        <h3 className="text-secondarytext">Username: </h3>
        <input
          name="username"
          className="p-1 rounded-lg bg-mutedmidgray text-contenttext"
        />
        <h4 className="text-red-600 w-full">{data?.errors?.username}</h4>
        <h3 className="text-secondarytext pt-4">Password: </h3>
        <input
          type="password"
          name="password"
          className="p-1 rounded-lg bg-mutedmidgray text-contenttext"
        />
        <h4 className="text-red-600 w-full">{data?.errors?.password}</h4>
        <h3 className="text-secondarytext pt-4">Repeat Password: </h3>
        <input
          type="password"
          name="repeatpassword"
          className="p-1 rounded-lg bg-mutedmidgray text-contenttext"
        />
        <h4 className="text-red-600 w-full">{data?.errors?.repeatpassword}</h4>
        <h3 className="py-2">
          Already have an account?
          <Link
            className="hover:underline text-blue-600 px-1"
            href={"/user/sign-in"}
          >
            Sign In
          </Link>
        </h3>
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="bg-lightpurp hover:bg-lightpurp/80 px-4 py-2 rounded-full"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
