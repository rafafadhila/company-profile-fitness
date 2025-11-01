import RegisterForm from "@/features/register/components/RegisterForm"

export default function page() {
    return (
        <main className='bg-white h-screen'>
            <div className='h-screen flex justify-center items-center text-black p-3'>
                <RegisterForm></RegisterForm>
            </div>
        </main>
    )
}
