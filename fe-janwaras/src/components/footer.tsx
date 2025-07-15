import React, { useState } from 'react';

// --- Komponen Ikon (SVG) ---
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const SocialIcon = ({ children }) => (
    <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:bg-green-800 transition-colors">
        {children}
    </div>
);

// --- Komponen Halaman Kontak ---
export const ContactPage = () => {
    // State untuk mengelola input form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Handler untuk memperbarui state saat input berubah
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    // Fungsi untuk memanggil Gemini API dan membuat draf pesan
    const handleGenerateMessage = async () => {
        if (!formData.name || !formData.subject) {
            setError('Silakan isi Nama dan Subjek terlebih dahulu.');
            return;
        }
        
        setIsLoading(true);
        setError('');
        
        const prompt = `Anda adalah asisten virtual untuk "JanWaras", sebuah merek jamu tradisional. Buatkan draf pesan kontak yang singkat, sopan, dan profesional dari pengguna bernama "${formData.name}" yang ingin bertanya tentang "${formData.subject}". Mulailah dengan sapaan yang hangat dan akhiri dengan ucapan terima kasih.`;

        try {
            const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
            const payload = { contents: chatHistory };
            const apiKey = ""; // API key akan di-inject secara otomatis
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const result = await response.json();
            
            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const generatedText = result.candidates[0].content.parts[0].text;
                setFormData(prev => ({ ...prev, message: generatedText }));
            } else {
                throw new Error("Gagal mendapatkan konten dari respons API.");
            }

        } catch (err) {
            console.error("Error calling Gemini API:", err);
            setError("Maaf, terjadi kesalahan saat membuat pesan. Silakan coba lagi.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-[#F0F5F0] font-sans py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">Hubungi Kami</h1>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                        Ada pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi Tim Mbok Gendhong
                    </p>
                </div>

                <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4"><PhoneIcon /><div><h3 className="font-bold text-gray-700">Phone</h3><p className="text-gray-600">+62 812 3456 7890</p></div></div>
                                <div className="flex items-start space-x-4"><EmailIcon /><div><h3 className="font-bold text-gray-700">Email</h3><p className="text-gray-600">info@janwaras.id</p></div></div>
                                <div className="flex items-start space-x-4"><LocationIcon /><div><h3 className="font-bold text-gray-700">Location</h3><p className="text-gray-600">Jl. Jamu Tradisional No. 123<br/>Sukoharjo, Indonesia</p></div></div>
                            </div>
                            <div className="flex space-x-3 mt-8"><SocialIcon>f</SocialIcon><SocialIcon>t</SocialIcon><SocialIcon>i</SocialIcon></div>
                        </div>

                        {/* Kolom Kanan: Form Kontak dengan Fitur Gemini */}
                        <div>
                            <form className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="sr-only">Nama</label>
                                    <input type="text" id="name" placeholder="Nama" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="sr-only">Subjek</label>
                                    <input type="text" id="subject" placeholder="Subjek" value={formData.subject} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow" />
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Pesan</label>
                                        <button type="button" onClick={handleGenerateMessage} disabled={isLoading} className="text-sm font-semibold text-green-700 hover:text-green-900 disabled:opacity-50 disabled:cursor-not-allowed flex items-center">
                                            <span className="mr-1 text-lg">✨</span>
                                            {isLoading ? 'Membuat...' : 'Bantu Tulis Pesan'}
                                        </button>
                                    </div>
                                    <textarea id="message" rows="5" placeholder="Isi pesan Anda di sini, atau biarkan Gemini membantu Anda..." value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow"></textarea>
                                    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="bg-[#006400] text-white font-bold py-3 px-8 rounded-lg hover:bg-green-800 transition-all duration-300 transform hover:scale-105">
                                        Kirim Pesan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-12 max-w-5xl mx-auto h-80 bg-gray-300 rounded-2xl flex items-center justify-center text-gray-500 shadow-lg overflow-hidden">
                    <img src="http://googleusercontent.com/file_content/1" alt="Peta Lokasi Pasar Jamu Nguter" className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    );
};

const Footer = () => (
    <footer className="bg-[#F0F5F0] w-full py-6">
        <div className="container mx-auto px-4">
            <p className="text-center text-sm text-gray-500">
                &copy; 2025 Mbok Gendhong Team. All Rights Reserved
            </p>
        </div>
    </footer>
);

export default Footer;
