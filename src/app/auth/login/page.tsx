import LoginForm from "@/features/login/components/LoginForm"

export default function page() {
    return (
        <main className='bg-white h-screen'>
            <div className='h-screen flex justify-center items-center text-black p-3'>
                <LoginForm></LoginForm>
            </div>
        </main>
    )
}
