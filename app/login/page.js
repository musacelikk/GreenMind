"use client";

import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Kullanıcı Adı:", username);
    console.log("Şifre:", password);
    alert("Giriş başarılı!");
  };

  return (
    <div className="relative min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center">
      {/* GreenMind Logo */}
      <div className="mb-12 w-full flex justify-center items-center">
        <Image
          src="/l.png"
          alt="GreenMind"
          width={600}
          height={180}
          className="object-contain mx-auto "
          priority
        />
      </div>

      {/* Login Form */}
      <div className="w-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-[#2a2a2a] p-10 rounded-2xl w-full max-w-md relative z-10 mx-auto"
        >
        {/* Input Fields */}
        <div className="mb-5">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4a9eff] text-sm"
            placeholder="kullanıcı adını giriniz ..."
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4a9eff] text-sm"
            placeholder="şifre giriniz ..."
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 bg-gradient-to-r from-[#6DA5FF] to-[#3ADC51] text-white py-3.5 rounded-lg font-medium hover:opacity-90 transition text-sm"
          >
            Şifremi Unuttum
          </button>
          <button
            type="submit"
            className="flex-1 bg-transparent py-3.5 rounded-lg font-medium hover:opacity-90 transition text-sm relative overflow-hidden"
            style={{
              border: '2px solid',
              borderImage: 'linear-gradient(to right, #6DA5FF, #3ADC51) 1',
            }}
          >
            <span className="bg-gradient-to-r from-[#6DA5FF] to-[#3ADC51] bg-clip-text text-transparent">
              Devam Et
            </span>
          </button>
        </div>
        </form>
      </div>

      {/* Right Sidebar Icons */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-5">
        <div className="w-9 h-9 rounded flex items-center justify-center cursor-pointer bg-gradient-to-r from-[#6DA5FF] to-[#3ADC51] transition hover:opacity-90">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            className="text-white"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
        <div className="w-9 h-9 rounded flex items-center justify-center cursor-pointer bg-gradient-to-r from-[#6DA5FF] to-[#3ADC51] transition hover:opacity-90">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            className="text-white"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>
        <div className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer bg-gradient-to-r from-[#6DA5FF] to-[#3ADC51] transition hover:opacity-90">
          <span className="text-white text-sm font-bold">G</span>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-500 text-xs">
        Copyright © 2023 - bbsm.tech Tüm hakları saklıdır.
      </div>
    </div>
  );
}
