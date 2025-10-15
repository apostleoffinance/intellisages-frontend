"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SubscribeCard: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Main card */}
      <div className="bg-gray-50 rounded-2xl shadow-lg p-6 md:p-10 lg:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-orange-500">Join 10,000+</span>{" "}
              <span className="text-black">Leaders</span>
            </h2>

            <p className="text-gray-700 text-base md:text-lg">
              subscribing to latest Africa Web 3.0 market insights
            </p>

            <div className="flex flex-col sm:flex-row gap-0 w-full">
              <Link
                href="https://intellisages.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center text-sm"
              >
                Subscribe
              </Link>
            </div>

            <div className="text-xs text-gray-600">
              <p>
                By subscribing you agree to{" "}
                <span className="underline cursor-pointer hover:text-gray-800">
                  Substack's Terms of Use
                </span>
                ,{" "}
                <span className="underline cursor-pointer hover:text-gray-800">
                  our Privacy Policy
                </span>{" "}
                and{" "}
                <span className="underline cursor-pointer hover:text-gray-800">
                  our Information collection notice
                </span>
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <svg
                className="w-16 h-4 text-gray-400"
                viewBox="0 0 80 20"
                fill="currentColor"
              >
                <text
                  x="0"
                  y="15"
                  fontSize="12"
                  fontFamily="serif"
                  fontStyle="italic"
                >
                  substack
                </text>
              </svg>
            </div>
          </div>

          {/* Right Content */}
          <Image src="/phone.png" alt="ig bg" width={288} height={600} />
        </div>
      </div>
    </div>
  );
};

export default SubscribeCard;
