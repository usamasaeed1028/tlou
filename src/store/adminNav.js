import { create } from 'zustand'

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))


export const useAdminNav=create((set)=>({
    menuIsOpen:true,
    currentItem:'User Management',
    toggleMenu:()=>set((state)=>({menuIsOpen:!state.menuIsOpen})),
    setCurrentItem:(x)=>set(()=>({currentItem:x}))
}))

