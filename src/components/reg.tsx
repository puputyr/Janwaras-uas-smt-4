import React, { useState } from 'react';

// Komponen Ikon sederhana
const EyeIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639l4.43-7.086a1 1 0 011.558 0l4.43 7.086a1 1 0 010 .639l-4.43 7.086a1 1 0 01-1.558 0l-4.43-7.086z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const GoogleIcon = () => (
    <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path>
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.222 0-9.618-3.67-11.283-8.591l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 35.245 44 30.028 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
    </svg>
);


// Komponen Utama Aplikasi
const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F0F5F0] font-sans">
      <div className="flex w-full max-w-5xl m-4 bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Kolom Kiri - Gambar Ilustrasi */}
        <div className="hidden md:flex w-1/2 bg-[#E6EFE6] p-12 flex-col justify-between">
          <div className="flex items-center space-x-2">
             <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#006400"/>
                <path d="M22.14 11.32C22.14 11.32 20.06 12.3 20.06 14.92C20.06 17.54 22.14 18.52 22.14 18.52" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.86 11.32C17.86 11.32 19.94 12.3 19.94 14.92C19.94 17.54 17.86 18.52 17.86 18.52" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 18.52V22.24" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M25.5 16.5C25.5 16.5 24.5 18.5 22 18.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5 16.5C14.5 16.5 15.5 18.5 18 18.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M29 20C29 24.9706 24.9706 29 20 29C15.0294 29 11 24.9706 11 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-2xl font-bold text-gray-800">JanWaras</span>
          </div>
          <div className="flex justify-center items-center">
             <img src="http://googleusercontent.com/file_content/0" alt="Jamu Illustration" className="max-w-md w-full" />
          </div>
          <div></div>
        </div>

        {/* Kolom Kanan - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-[#F0F5F0] flex flex-col justify-center">
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Halo,</h1>
            <h2 className="text-3xl font-bold text-gray-800">Selamat Datang!</h2>
            <p className="text-gray-600 mt-2">
              {isRegister ? "Buat akun anda sekarang" : "Silahkan masukan username dan password."}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {isRegister && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                <input 
                  type="text" 
                  placeholder="Masukkan Nama Anda"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                placeholder="Masukkan Email Anda"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kata Sandi</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Masukkan Kata Sandi"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 px-4 flex items-center text-gray-500">
                  <EyeIcon />
                </button>
              </div>
            </div>

            {isRegister ? (
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" name="terms" type="checkbox" className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-600">
                    Ya, saya mengonfirmasi bahwa saya telah membaca, memahami, dan menyetujui <a href="#" className="font-medium text-green-700 hover:underline">Syarat & Ketentuan dan Kebijakan Privasi</a>.
                  </label>
                </div>
              </div>
            ) : (
                 <div className="flex items-center justify-end">
                    <a href="#" className="text-sm text-green-700 hover:underline">Lupa Kata Sandi?</a>
                </div>
            )}


            <div>
              <button 
                type="submit"
                className="w-full bg-[#006400] text-white font-bold py-3 px-4 rounded-lg hover:bg-green-800 transition duration-300"
              >
                {isRegister ? 'Daftar' : 'Masuk'}
              </button>
            </div>
          </form>

          {/* Pemisah */}
          <div className="mt-6 flex items-center justify-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm text-gray-500">atau</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          
          {/* Tombol Google */}
          <div className="mt-6">
             <button
                type="button"
                className="w-full flex justify-center items-center bg-white text-gray-700 font-medium py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300"
                >
                <GoogleIcon />
                Masuk dengan Google
            </button>
          </div>


          {/* Link Ganti Form */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              {isRegister ? 'Sudah memiliki akun? ' : 'Belum memiliki akun? '}
              <button onClick={toggleForm} className="font-medium text-green-700 hover:underline">
                {isRegister ? 'Masuk' : 'Buat Akun'}
              </button>
            </p>
          </div>
            
          <div className="mt-12 text-center text-xs text-gray-500">
            <p>&copy; Mbok Gendhong Team 2025 - All Rights Reserved</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
