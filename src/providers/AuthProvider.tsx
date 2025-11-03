'use client'

import { axiosInstance } from "@/utils/axios-instance"
import { toast } from "react-toastify"
import useAuthStore from "@/stores/useAuthStore"
import { useEffect } from "react"

export default function AuthProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { user, setUser } = useAuthStore();

    const onSessionLogin = async () => {
        try {

            const response = await axiosInstance.get('/auth/session-login', {
                headers: {
                    Authorization: `Bearer ${user?.objectId}`,
                },
            });

            setUser({
                email: response?.data?.data?.email,
                name: response?.data?.data?.name,
                objectId: response?.data?.data?.objectId,

            })

        } catch (error: any) {
            toast.error(error?.message);
        }
    };

    useEffect(() => {
        if (user?.objectId) onSessionLogin();
    }, [user?.objectId])

    return <>{ children } </>

}