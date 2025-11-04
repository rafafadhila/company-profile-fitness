export async function uploadImage(file: File): Promise<string> {
    const APP_ID = process.env.NEXT_PUBLIC_APP_ID
    const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY
    const UPLOAD_PATH = "image" // adjust folder name if needed

    try {
        const formData = new FormData()
        formData.append("file", file)

        const res = await fetch(
            `https://api.backendless.com/${APP_ID}/${REST_API_KEY}/files/${UPLOAD_PATH}/${file.name}`,
            {
                method: "POST",
                body: formData,
            }
        )

        if (!res.ok) {
            throw new Error("Upload failed")
        }

        const data = await res.json()
        return data.fileURL // only return the file URL
    } catch (err) {
        console.error("Error uploading image:", err)
        throw err
    }
}