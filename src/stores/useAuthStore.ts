import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    email: string;
    name: string;
    objectId: string;
}

interface UseAuthStore {
    user: User;
    setUser: (user: User) => void;
    logout: () => void; // add logout to clear user (and clear persisted data)
}

const useAuthStore = create<UseAuthStore>()(
    persist(
        (set) => ({
            user: {
                email: '',
                name: '',
                objectId: '',
            },
            setUser: (user) => set({ user }),
            logout: () => set({ user: { email: '', name: '', objectId: '' } }),
        }),
        {
            name: 'user-store',
            partialize: (state) => ({
                user: { email: '', name: '', objectId: state?.user?.objectId },
            }),
        }
    )
);

export default useAuthStore; 