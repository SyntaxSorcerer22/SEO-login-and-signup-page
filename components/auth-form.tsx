"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)

  const toggleMode = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[700px]">
          {/* Left side - Form */}
          <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
            <div className="w-full max-w-md mx-auto">
              {/* Logo - Made bigger and more prominent */}
              <div className="mb-10 flex justify-center lg:justify-start">
                <Image
                  src="/images/raymer-logo.png"
                  alt="RAYMER"
                  width={180}
                  height={90}
                  className="h-16 w-auto transition-all duration-300 hover:scale-105"
                />
              </div>

              {/* Form Header with smooth transition */}
              <div className="mb-8 transition-all duration-500 ease-in-out">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{isLogin ? "Sign in" : "Sign up"}</h1>
                <p className="text-gray-600 transition-all duration-300">
                  {isLogin
                    ? "Welcome back! Please sign in to your account."
                    : "Create your account and start your creative journey."}
                </p>
              </div>

              {/* Form with smooth transitions */}
              <form className="space-y-6">
                <div className="space-y-4">
                  {/* Name fields - only show for signup with smooth animation */}
                  <div
                    className={`grid grid-cols-2 gap-4 transition-all duration-500 ease-in-out ${
                      isLogin ? "opacity-0 max-h-0 overflow-hidden" : "opacity-100 max-h-20"
                    }`}
                  >
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        First name*
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="First name"
                        className="mt-1 h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                        required={!isLogin}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        Last name*
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Last name"
                        className="mt-1 h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                        required={!isLogin}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      E-mail or username*
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="mt-1 h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 focus:scale-[1.02]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                      {isLogin ? "Password*" : "Create password*"}
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder={isLogin ? "Enter your password" : "Create a password"}
                      className="mt-1 h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 focus:scale-[1.02]"
                      required
                    />
                    {!isLogin && (
                      <p className="mt-1 text-xs text-gray-500 transition-all duration-300">
                        Password must be at least 8 characters long.
                      </p>
                    )}
                  </div>
                </div>

                {/* Remember me / Terms - with smooth transition */}
                <div className="transition-all duration-500 ease-in-out">
                  {isLogin ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-all duration-200"
                        />
                        <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                          Remember me
                        </label>
                      </div>
                      <Link
                        href="/forgot-password"
                        className="text-sm text-blue-600 hover:text-blue-500 transition-colors duration-200"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  ) : (
                    <div className="flex items-start">
                      <input
                        id="terms"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5 transition-all duration-200"
                        required
                      />
                      <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                        I agree to the{" "}
                        <Link
                          href="/terms"
                          className="text-blue-600 hover:text-blue-500 transition-colors duration-200"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          className="text-blue-600 hover:text-blue-500 transition-colors duration-200"
                        >
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  {isLogin ? "Sign in" : "Sign up"}
                </Button>
              </form>

              {/* Toggle between login/signup with smooth animation */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  {isLogin ? "Don't have an account? " : "Already a member? "}
                  <button
                    onClick={toggleMode}
                    className="text-blue-600 hover:text-blue-500 font-medium transition-all duration-300 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded px-1"
                  >
                    {isLogin ? "Sign up" : "Sign in"}
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Creative section with dynamic content */}
          <div className="flex-1 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600">
              {/* 3D Geometric shapes with subtle animations */}
              <div className="absolute top-20 left-10 w-24 h-24 bg-yellow-400 transform rotate-45 rounded-lg opacity-90 transition-all duration-1000 hover:rotate-90"></div>
              <div className="absolute top-32 right-16 w-16 h-16 bg-yellow-300 transform rotate-12 rounded-lg opacity-80 transition-all duration-1000 hover:rotate-45"></div>
              <div className="absolute bottom-40 left-8 w-20 h-20 bg-white transform -rotate-12 rounded-lg opacity-20 transition-all duration-1000 hover:rotate-12"></div>
              <div className="absolute bottom-20 right-20 w-12 h-12 bg-white transform rotate-45 rounded-lg opacity-30 transition-all duration-1000 hover:rotate-90"></div>
            </div>

            <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-center text-white">
              <div className="max-w-md transition-all duration-700 ease-in-out">
                <h2 className="text-4xl font-bold mb-6 text-balance">
                  {isLogin ? "Welcome back to your creative journey" : "Explore your creativity"}
                </h2>
                <p className="text-lg text-blue-100 leading-relaxed transition-all duration-500">
                  {isLogin
                    ? "Continue exploring new possibilities, connect with passionate creators, and be part of the most inspiring community in the world."
                    : "Discover new skills, meet passionate teachers and become a part of the most helpful community of creatives in the world."}
                </p>
              </div>

              {/* Floating image cards with subtle animations */}
              <div className="absolute top-16 right-8 w-32 h-24 bg-white rounded-lg shadow-lg transform rotate-3 overflow-hidden transition-all duration-500 hover:rotate-6 hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-400 rounded-full transition-all duration-300 hover:bg-gray-500"></div>
                </div>
              </div>

              <div className="absolute bottom-32 right-12 w-28 h-20 bg-white rounded-lg shadow-lg transform -rotate-6 overflow-hidden transition-all duration-500 hover:-rotate-12 hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-400 rounded-full transition-all duration-300 hover:bg-gray-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
