"use client";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Button,
  CardFooter,
} from "@HeroUI/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (username === "johann" && password === "12345678") {
      const userData = {
        // name: "Welcome Johann",
        // description: "Front-end ontwikkelaar",
        avatarSrc: "https://avatars.githubusercontent.com/u/12345678?v=4"
      };

      localStorage.setItem("user", JSON.stringify(userData)); // ✅ Store user in localStorage

      window.dispatchEvent(new Event("storage")); // ✅ Trigger a storage event for reactivity
      router.push("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <div className="fixed left-0 bg-black p-4 z-50 text-left pt-20">
        <h1 className="text-4xl font-bold text-white">Shop small</h1>
        <h1 className="text-4xl font-bold text-white">win big!</h1>
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <Card className="bg-[#bffb4f] min-h-[600px] shadow-lg py-10 px-6 w-screen fixed bottom-0 left-0 rounded-t-[40px]">
          <CardHeader className="text-center">
            <h2 className="text-xl font-bold leading-tight text-black">
              Login
            </h2>
          </CardHeader>
          <CardHeader className="text-center space-y-1">
            <h1 className="text-lg font-bold leading-tight text-black">
              Welcome Back
            </h1>
          </CardHeader>
          <CardBody>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <Input
                className="border rounded-lg h-14 placeholder:text-blue-500"
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                className="border rounded-lg h-14 placeholder:text-blue-500"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                className="w-full h-14 font-bold flex items-center justify-center gap-4 bg-black text-white hover:bg-red-700"
                radius="full"
                size="lg"
                type="submit"
                onPress={() => setShowPassword(!showPassword)}
              >
                <span className="absolute left-[0.2rem] bg-gray-700 text-white p-2 rounded-full transform rotate-[-45deg] flex items-center justify-center">
                  <svg
                    className="h-9 w-9"
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
                Login
              </Button>
            </form>
          </CardBody>
          <CardFooter className="flex flex-col gap-4 items-start pl-4">
            <div>
              <p className="text-left text-sm text-black mt-4">
                <a className="text-black" href="/resetyourpassword">
                  Forgot your password?
                </a>
              </p>
              <p className="text-left text-sm text-black mt-4">
                Do not have an account?
                <a className="text-black" href="/createanaccount">
                  Sign up
                </a>
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
