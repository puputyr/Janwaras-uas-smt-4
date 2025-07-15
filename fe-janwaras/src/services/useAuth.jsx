import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
const api = 'http://localhost:3000'

export const getUser = () => {
  const stored = localStorage.getItem('user');
  return stored ? JSON.parse(stored) : null;
};


export const useAuth = () => {
  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    try {
      const res = await axios.post(`${api}/auth/login`, {
        email,
        password,
      });
      console.log(res)
      const { token, user } = res.data;

      localStorage.setItem('user', JSON.stringify(res.user));
      localStorage.setItem('token', res.token);
      toast.success("Login berhasil!");
      navigate("/beranda");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login gagal.");
    }
  };

  const register = async ({ nama, email, password }) => {
    try {
      const res = await axios.post(`${api}/auth/register`, {
        nama,
        email,
        password,
      });

      toast.success("Registrasi berhasil, silakan login.");
      return true
    } catch (err) {
      toast.error(err.response?.data?.message || "Registrasi gagal.");
    }
  };

  return { login, register };
};
