import { create } from 'zustand'

export const useAuthStore = create<any>((set: any) => ({
  login: '',
  setLogin: (payload: any) => set(() => ({ login: payload })),
}))
