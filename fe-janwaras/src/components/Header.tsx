import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); // redirect ke login page
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-jamu-green rounded-full flex items-center justify-center">
              <img src="/logo/Logo.png" alt="Logo JanWaras" className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-jamu-green-dark">JanWaras</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/beranda" className="text-foreground hover:text-jamu-green transition-colors font-medium">Beranda</Link>
            <Link to="/rekomendasi" className="text-foreground hover:text-jamu-green transition-colors font-medium">Rekomendasi</Link>
            <Link to="/jammarket" className="text-foreground hover:text-jamu-green transition-colors font-medium">JamMarket</Link>
            <Link to="/racikdewe" className="text-foreground hover:text-jamu-green transition-colors font-medium">Racik Dewe</Link>
            <Link to="/about" className="text-foreground hover:text-jamu-green transition-colors font-medium">About Us</Link>
          </nav>

          {/* Right side icons */}
          <div className="relative flex items-center space-x-2" ref={dropdownRef}>
            <Button variant="ghost" size="icon" className="relative" aria-label="Notifikasi">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Keranjang Belanja">
              <ShoppingCart className="h-5 w-5" />
            </Button>

            {/* 👤 Icon with dropdown */}
            <div
              className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center cursor-pointer relative"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              <span className="text-xs">👤</span>

              {showDropdown && (
                <div className="absolute right-0 top-10 w-32 bg-white border border-gray-200 shadow-lg rounded-md p-2 z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
