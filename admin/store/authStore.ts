import { create } from "zustand";
import { supabase } from "../lib/supabase";
import type { AuthUser, LoginCredentials } from "../types/auth";

interface AuthState {
  user: AuthUser | null;
  isLoading: boolean;
  signIn: (credentials: LoginCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,

  signIn: async (credentials) => {
    set({ isLoading: true });
    try {
      const { data, error } =
        await supabase.auth.signInWithPassword(credentials);
      if (error) throw error;
      set({ user: data.user as AuthUser });
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },

  checkAuth: async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    set({ user: user as AuthUser });
  },
}));
