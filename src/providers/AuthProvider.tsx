'use client'

import { axiosInstance } from "@/utils/axios-instance";
import { toast } from "react-toastify";
import useAuthStore from "@/stores/useAuthStore";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const { user, setUser } = useAuthStore();
    const router = useRouter();
    const pathname = usePathname();

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
        const handleAuth = async () => {
            if (user?.objectId) {
                await onSessionLogin();
                if (pathname.startsWith("/auth")) {
                    router.push("/");
                }
            } else {
                const isProtected = !pathname.startsWith("/auth") && pathname !== "/";
                if (isProtected) {
                    router.push("/auth/login");
                }
            }
        };
        handleAuth();
    }, [user?.objectId, pathname]);

    return <>{children}</>;
}
