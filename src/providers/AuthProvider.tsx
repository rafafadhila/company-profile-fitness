'use client'

import { axiosInstance } from "@/utils/axios-instance";
import { toast } from "react-toastify";
import useAuthStore from "@/stores/useAuthStore";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const { user, setUser } = useAuthStore();
    const router = useRouter();
    const pathname = usePathname();

    // Wait until Zustand store is hydrated before running auth logic
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        // Listen for Zustand persist hydration event
        const unsub = useAuthStore.persist.onFinishHydration(() => {
            setHydrated(true);
        });

        // In case it's already hydrated
        setHydrated(useAuthStore.persist.hasHydrated());
        return unsub;
    }, []);

    const onSessionLogin = async () => {
        try {
            const response = await axiosInstance.get("/auth/session-login", {
                headers: {
                    Authorization: `Bearer ${user?.objectId}`,
                },
            });
            setUser(response.data.data);
        } catch (error: any) {
            toast.error(error?.message);
        }
    };

    useEffect(() => {
        if (!hydrated) return; // Wait until Zustand finishes rehydrating

        const handleAuth = async () => {
            if (user?.objectId) {
                await onSessionLogin();

                // If logged in and currently in /auth page -> redirect to home
                if (pathname.startsWith("/auth")) {
                    router.push("/");
                }
            } else {
                // Not logged in — protect certain routes
                const protectedRoutes = ["/blog/create"];
                if (protectedRoutes.some((route) => pathname.startsWith(route))) {
                    router.push("/auth/login");
                }
            }
        };

        handleAuth();
    }, [hydrated, user?.objectId, pathname]);

    return <>{children}</>;
}
