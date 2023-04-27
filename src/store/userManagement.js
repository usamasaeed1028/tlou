import { create } from "zustand";

/* const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
})) */

export const useUserManagmentInternalState = create((set) => ({
  currentItem: "index",
  selectedUser: {},
  isEditing: false,
  setUserManagmentCurrentItem: (x) => set({ currentItem: x }),
  setSelectedUser: (user) => set({ selectedUser: user }),
  setIsEditing: (x) => set({ isEditing:x }),
}));
