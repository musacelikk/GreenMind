"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function WebPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="relative min-h-screen overflow-hidden page-transition">
      {/* First Image Section */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/1.png"
            alt="GreenMind Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Navbar */}
        <Navbar variant="fixed" />

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-start px-6 md:px-12 lg:px-20">
        <div className="text-left max-w-5xl">
          {/* Animated Background Glow */}
          <div 
            className="absolute inset-0 -z-10 blur-3xl opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(109, 165, 255, 0.4) 0%, rgba(58, 220, 81, 0.4) 50%, transparent 70%)",
              animation: "pulse 4s ease-in-out infinite",
            }}
          ></div>

          {/* Main Headline */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight relative text-white"
            style={{
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
              filter: "drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5))",
            }}
          >
            <span className="inline-block text-white">
              Kontrolü Elinizde
            </span>
          </h1>

          {/* Sub-headline with Fade Animation */}
          <p 
            className="text-md md:text-lg text-white/95 mb-10 max-w-xl font-semibold leading-relaxed"
            style={{
              animation: "fadeInUp 1s ease-out 0.6s both",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            GreenMind ile bahçe bakımında kontrol, verimlilik ve sürdürülebilirlik tek platformda.
          </p>

          {/* CTA Button with Advanced Effects */}
          <div 
            className="inline-block"
            style={{
              animation: "fadeInUp 1s ease-out 0.8s both",
            }}
          >
            <button 
              className="group relative px-6 py-3 rounded-xl font-bold text-sm bg-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Button Text */}
              <span className="relative z-10 flex items-center gap-2">
                <span className="bg-gradient-to-r from-[#6DA5FF] to-[#3ADC51] bg-clip-text text-transparent">
                  Detaylı Bilgi
                </span>
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6DA5FF" />
                      <stop offset="100%" stopColor="#3ADC51" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="url(#arrowGradient)" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>

              {/* Shine Effect */}
              <span 
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              ></span>
            </button>
          </div>
        </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }
      `}</style>

      {/* Services Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="/gemini.png"
                alt="GreenMind Akıllı Sulama Sistemi"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                  Akıllı Sulama Sistemi
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl text-white/90">
                <p>
                  GreenMind akıllı sulama çözümleriyle bahçenizin ihtiyacı olan suyu doğru zamanda, doğru miktarda ve en verimli şekilde sağlayın.
                </p>
                
                <p>
                  Uzaktan erişim özelliği sayesinde bahçe bakımınızı istediğiniz yerden yönetin, su tasarrufu yapın ve bitkilerinizin sağlıklı büyümesini destekleyin.
                </p>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mt-8 mb-4">
                Bahçe Sulamanızı Artık Cep Telefonunuzdan Yönetin
              </h3>
              <p className="text-lg md:text-xl text-white/90">
                Kullanıcı dostu mobil uygulamalarımızla kontrol tamamen sizde!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20 px-6">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/2.png"
            alt="GreenMind Features Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better readability */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Feature Card 1 */}
            <div 
              className="relative p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6DA5FF] to-[#3ADC51] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-4 w-16 h-16 flex items-center justify-center">
                  <img
                    src="/erisim.png"
                    alt="Kontrol Sizde"
                    width={64}
                    height={64}
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Kontrol Sizde
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Telefonunuz veya bilgisayarınız üzerinden sulama sisteminizi her yerden yönetebilirsiniz.
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div 
              className="relative p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6DA5FF] to-[#3ADC51] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-4 w-16 h-16 flex items-center justify-center">
                  <img
                    src="/suu.png"
                    alt="Verimli Su Yönetimi"
                    width={64}
                    height={64}
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Verimli Su Yönetimi
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Akıllı algoritmalar sayesinde gereksiz su kullanımını önler ve suyunuzu verimli kullanır.
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div 
              className="relative p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6DA5FF] to-[#3ADC51] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-4 w-16 h-16 flex items-center justify-center">
                  <img
                    src="/ıa.png"
                    alt="Otonom Planlama"
                    width={64}
                    height={64}
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Otonom Planlama
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Toprak ve bitki verilerini analiz ederek en uygun sulama programını otomatik belirler.
                </p>
              </div>
            </div>

            {/* Feature Card 4 */}
            <div 
              className="relative p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6DA5FF] to-[#3ADC51] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-4 w-16 h-16 flex items-center justify-center">
                  <img
                    src="/multiyonetim.png"
                    alt="Çok Noktalı Yönetim"
                    width={64}
                    height={64}
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Çok Noktalı Yönetim
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Birden fazla bahçe veya tarlayı tek bir sistem üzerinden kolayca kontrol edebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative w-full py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#6DA5FF] to-[#3ADC51] bg-clip-text text-transparent">
              Sıkça Sorulan Sorular
            </span>
          </h2>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="relative rounded-xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-white font-semibold text-lg">
                  Sulama sistemi nasıl çalışır?
                </span>
                <svg
                  className={`w-5 h-5 text-white transition-transform duration-300 ${
                    openFAQ === 1 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFAQ === 1 && (
                <div className="px-6 pb-4 text-white/70 leading-relaxed">
                  <p>
                    Akıllı sulama sistemimiz, toprak nem sensörleri ve hava durumu verilerini analiz ederek otomatik olarak en uygun sulama zamanını belirler. Mobil uygulama veya web arayüzü üzerinden sisteminizi her yerden kontrol edebilir ve manuel olarak da yönetebilirsiniz.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="relative rounded-xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-white font-semibold text-lg">
                  Kurulum süreci nasıl işler?
                </span>
                <svg
                  className={`w-5 h-5 text-white transition-transform duration-300 ${
                    openFAQ === 2 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFAQ === 2 && (
                <div className="px-6 pb-4 text-white/70 leading-relaxed">
                  <p>
                    Kurulum sürecimiz oldukça basittir. Uzman ekibimiz bahçenize veya tarlanıza gelerek gerekli sensörleri ve sulama ekipmanlarını yerleştirir. Sistem birkaç saat içinde aktif hale gelir ve mobil uygulama üzerinden hemen kullanmaya başlayabilirsiniz.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="relative rounded-xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-white font-semibold text-lg">
                  Su tasarrufu sağlanır mı?
                </span>
                <svg
                  className={`w-5 h-5 text-white transition-transform duration-300 ${
                    openFAQ === 3 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFAQ === 3 && (
                <div className="px-6 pb-4 text-white/70 leading-relaxed">
                  <p>
                    Evet, akıllı algoritmalarımız sayesinde gereksiz su kullanımını önler ve suyunuzu %30-50 oranında daha verimli kullanırsınız. Sistem, toprak nem seviyesini sürekli izleyerek sadece gerektiğinde sulama yapar ve yağmur tahminlerini de dikkate alır.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="relative rounded-xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-white font-semibold text-lg">
                  Birden fazla alanı yönetebilir miyim?
                </span>
                <svg
                  className={`w-5 h-5 text-white transition-transform duration-300 ${
                    openFAQ === 4 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFAQ === 4 && (
                <div className="px-6 pb-4 text-white/70 leading-relaxed">
                  <p>
                    Kesinlikle! Sistemimiz çok noktalı yönetim özelliği sayesinde birden fazla bahçe, tarla veya sulama alanını tek bir panel üzerinden kolayca yönetmenize olanak sağlar. Her alan için ayrı programlar oluşturabilir ve bağımsız olarak kontrol edebilirsiniz.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 5 */}
            <div className="relative rounded-xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 5 ? null : 5)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-white font-semibold text-lg">
                  İnternet bağlantısı gerekli mi?
                </span>
                <svg
                  className={`w-5 h-5 text-white transition-transform duration-300 ${
                    openFAQ === 5 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFAQ === 5 && (
                <div className="px-6 pb-4 text-white/70 leading-relaxed">
                  <p>
                    Sistem, internet bağlantısı olmadan da çalışabilir. Yerel ağ üzerinden kontrol edebilirsiniz. Ancak uzaktan erişim ve mobil uygulama özelliklerini kullanmak için internet bağlantısı gereklidir. Sistem, internet kesintilerinde bile önceden belirlenen programları çalıştırmaya devam eder.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 6 */}
            <div className="relative rounded-xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 6 ? null : 6)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-white font-semibold text-lg">
                  Bakım ve destek nasıl sağlanır?
                </span>
                <svg
                  className={`w-5 h-5 text-white transition-transform duration-300 ${
                    openFAQ === 6 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFAQ === 6 && (
                <div className="px-6 pb-4 text-white/70 leading-relaxed">
                  <p>
                    Sistemimiz minimum bakım gerektirir. Sensörler ve ekipmanlar dayanıklı malzemelerden üretilmiştir. 7/24 teknik destek hizmetimiz mevcuttur ve herhangi bir sorun durumunda uzaktan müdahale edebiliriz. Ayrıca yıllık bakım paketlerimiz ile sisteminizin her zaman en iyi şekilde çalışmasını sağlarız.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Chat Widget */}
      <div className="fixed bottom-6 right-6 z-30">
        <a
          href="https://wa.me/905551234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-14 h-14 rounded-full items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

