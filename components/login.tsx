"use client";
import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Button, CardFooter } from "@HeroUI/react";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

import { useNavbarVisibility } from "@/app/contexts/NavbarVisibilityContext";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setIsVisible } = useNavbarVisibility();

  useEffect(() => {
    setIsVisible(false);

    return () => setIsVisible(true);
  }, []);

  const handleLogin = () => {
    if (username === "johann" && password === "12345678") {
      const userData = {
        // name: "Welcome Johann",
        // description: "Front-end ontwikkelaar",
        avatarSrc: "https://avatars.githubusercontent.com/u/12345678?v=4",
      };

      localStorage.setItem("user", JSON.stringify(userData));
      window.dispatchEvent(new Event("storage"));
      router.push("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <div className="fixed text-left">
        <h1 className="text-4xl font-bold text-white">shop small</h1>
        <h1 className="text-4xl font-bold text-white">win big!</h1>
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <Card className="bg-[#bffb4f] min-h-[588px] py-10 px-3 w-screen fixed bottom-0 left-0 rounded-t-[40px] rounded-b-none">
          <CardHeader className="text-center">
            <h2 className="text-xl font-bold leading-tight text-black">
              Login
            </h2>
          </CardHeader>
          <CardHeader className="text-center space-y-1">
            <h1 className="text-3xl font-bold  text-black">Welcome Back</h1>
          </CardHeader>
          <CardBody>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <div className="relative">
                <div className="h-[80px] w-[389px] border rounded-3xl flex items-center bg-white">
                  <input
                    className="flex-grow border-none pl-6 text-default-400 text-2xl"
                    placeholder="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="relative">
                <div className="h-[80px] w-[389px] border rounded-3xl flex items-center bg-white ">
                  <input
                    className="flex-grow border-none pl-6 text-default-400 text-2xl"
                    placeholder="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="absolute  right-3 flex items-center px-4 py-4 text-gray-500 rounded-full bg-gray-200"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeIcon className="h-7 w-7" />
                    ) : (
                      <EyeSlashIcon className="h-7 w-7" />
                    )}
                  </button>
                </div>
              </div>
              <Button
                className="w-[389px] h-[80px] font-bold flex items-center justify-content bg-black text-white hover:bg-red-700"
                radius="full"
                size="lg"
                type="submit"
                onPress={() => setShowPassword(!showPassword)}
              >
                <span className="w-[63px] h-[63px] absolute left-[0.4rem] bg-gray-700 text-white p-2 rounded-full transform rotate-[-45deg] flex items-center justify-center">
                  <svg
                    className="w-[60px] h-[60px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span style={{ marginRight: "190px" }}>Login</span>
              </Button>
            </form>
          </CardBody>
          <CardFooter className="flex flex-col gap-4 items-start pl-7">
            <div>
              <p className="text-left text-sm text-black mt-4 relative">
                <span className="absolute left-[-1rem] bg-black text-white p-1 rounded-full transform rotate-[-45deg] flex items-center justify-center">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <a
                  className="ml-5 left-3 text-black font-bold underline"
                  href="/resetyourpassword"
                >
                  forgot password?
                </a>
              </p>
              <p className="text-left text-sm text-black mt-4 relative">
                <span className="absolute left-[-1rem] bg-black text-white p-1 rounded-full transform rotate-[-45deg] flex items-center justify-center">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <a
                  className="ml-5 text-black font-bold"
                  href="/createanaccount"
                >
                  don't have an account?
                </a>
                <a
                  className="ml-1 text-black font-bold underline"
                  href="/createanaccount"
                >
                  sign up
                </a>
              </p>
            </div>
          </CardFooter>
          {/* ... (rest of your component) */}
        </Card>
      </div>
    </div>
  );
}
