"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function UrunlerPage() {
  const products = [
    {
      id: 1,
      name: "Akıllı Sulama Kontrol Ünitesi",
      description: "Merkezi kontrol ünitesi ile tüm sulama sisteminizi tek bir noktadan yönetin. WiFi ve mobil uygulama desteği ile her yerden kontrol edebilirsiniz.",
      features: [
        "WiFi ve Bluetooth bağlantısı",
        "Mobil uygulama desteği",
        "7/24 uzaktan erişim",
        "Çoklu bölge yönetimi",
        "Enerji tasarruflu"
      ],
      price: "₺12.999"
    },
    {
      id: 2,
      name: "Toprak Nem Sensörü",
      description: "Gerçek zamanlı toprak nem ölçümü yapan akıllı sensörler. Toprağın nem seviyesini sürekli izleyerek otomatik sulama sağlar.",
      features: [
        "Gerçek zamanlı ölçüm",
        "Su geçirmez tasarım",
        "Uzun ömürlü pil",
        "Kolay kurulum",
        "Çoklu sensör desteği"
      ],
      price: "₺899"
    },
    {
      id: 3,
      name: "Hava Durumu İstasyonu",
      description: "Yerel hava durumu verilerini toplayarak sulama programınızı optimize eden akıllı istasyon. Yağmur tahminleri ile gereksiz sulamayı önler.",
      features: [
        "Sıcaklık ve nem ölçümü",
        "Yağmur sensörü",
        "Rüzgar hızı ölçümü",
        "UV indeksi",
        "Yağmur tahmin sistemi"
      ],
      price: "₺2.499"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black page-transition">
      {/* Navbar */}
      <Navbar variant="fixed" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#6DA5FF] to-[#3ADC51] bg-clip-text text-transparent">
              Ürünlerimiz
            </span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Akıllı sulama sistemleri için ihtiyacınız olan tüm ürünler. 
            Modern teknoloji ile tarımınızı geleceğe taşıyın.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative rounded-xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6DA5FF] to-[#3ADC51] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {product.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-white/70 text-sm">
                        <svg className="w-5 h-5 text-[#3ADC51] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#f6f7f7] to-[#f4f5f4] bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <button className="px-6 py-2 rounded-lg border border-transparent bg-gradient-to-r from-[#6DA5FF] to-[#3ADC51] text-white font-semibold hover:opacity-90 transition-opacity">
                      Detaylı Bilgi
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-2xl bg-gradient-to-r from-[#6DA5FF]/20 to-[#3ADC51]/20 backdrop-blur-md border border-white/10 p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Özel Çözümler İçin Bizimle İletişime Geçin
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Büyük ölçekli projeleriniz için özel çözümler sunuyoruz. 
              Uzman ekibimiz size en uygun sistemi tasarlar.
            </p>
            <Link
              href="/web/iletisim"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#6DA5FF] to-[#3ADC51] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

