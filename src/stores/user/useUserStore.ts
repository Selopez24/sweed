import { User } from "src/types";
import { create } from "zustand";

interface UserState {
  user: User | null
  setUser: (user: User) => void
}

const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (user) => set({ user })
}))

export default useUserStore

