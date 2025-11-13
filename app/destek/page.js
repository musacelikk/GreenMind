"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DestekPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const supportCategories = [
    {
      id: 1,
      title: "Kurulum Desteği",
      description: "Sistem kurulumu ve ilk yapılandırma konusunda yardım alın.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Teknik Destek",
      description: "Sistem sorunları ve teknik problemler için 7/24 destek.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Yazılım Güncellemeleri",
      description: "Mobil uygulama ve sistem yazılımı güncellemeleri hakkında bilgi.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Garanti ve Bakım",
      description: "Garanti kapsamı ve periyodik bakım hizmetleri hakkında bilgi.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "Teknik destek nasıl alabilirim?",
      answer: "Teknik destek için 7/24 destek hattımızı arayabilir, e-posta gönderebilir veya canlı destek sistemimizden yararlanabilirsiniz. Ortalama yanıt süremiz 2 saat içindedir."
    },
    {
      id: 2,
      question: "Garanti kapsamı nedir?",
      answer: "Tüm ürünlerimiz 2 yıl garanti kapsamındadır. Garanti süresi içinde ücretsiz onarım ve değişim hizmeti sunuyoruz. Ayrıca 5 yıl uzatılmış garanti seçeneklerimiz de mevcuttur."
    },
    {
      id: 3,
      question: "Uzaktan destek alabilir miyim?",
      answer: "Evet, sisteminize uzaktan erişim sağlayarak çoğu sorunu anında çözebiliyoruz. Güvenli bağlantı protokolleri kullanarak sisteminize erişir ve sorunları çözeriz."
    },
    {
      id: 4,
      question: "Kurulum desteği ücretsiz mi?",
      answer: "Tam paket sistem satın alan müşterilerimize kurulum desteği ücretsizdir. Diğer durumlarda kurulum hizmeti ücretlidir. Detaylı bilgi için iletişime geçebilirsiniz."
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black page-transition">
      {/* Navbar */}
      <Navbar variant="fixed" />

      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] overflow-hidden flex items-center bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#6DA5FF] to-[#3ADC51] bg-clip-text text-transparent">
              Destek Merkezi
            </span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Size yardımcı olmak için buradayız. Sorularınız için 7/24 destek hizmetimizden yararlanabilirsiniz.
          </p>
        </div>
      </section>

      {/* Support Categories */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Destek Kategorileri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category) => (
              <div
                key={category.id}
                className="relative rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6DA5FF] to-[#3ADC51] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-white mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="relative rounded-xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                >
                  <span className="text-white font-semibold text-lg">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-white transition-transform duration-300 ${
                      openFAQ === faq.id ? "rotate-180" : ""
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
                {openFAQ === faq.id && (
                  <div className="px-6 pb-4 text-white/70 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-2xl bg-gradient-to-r from-[#6DA5FF]/20 to-[#3ADC51]/20 backdrop-blur-md border border-white/10 p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hala Yardıma İhtiyacınız Var mı?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/web/iletisim"
                className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#6DA5FF] to-[#3ADC51] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                İletişime Geç
              </Link>
              <a
                href="tel:+905551234567"
                className="inline-block px-8 py-3 rounded-lg border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Hemen Ara: +90 (555) 123 45 67
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

