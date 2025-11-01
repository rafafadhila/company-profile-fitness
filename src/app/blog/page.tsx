import Header from "../components/Header";
import BlogList from "../components/blog/BlogList";

export default function page() {
    return (
        <main className="bg-white">
            <Header
                image="/images/header.jpg"
                title="Blog"
                subtitle="Learning is the best for our body.">
            </Header>
            <BlogList></BlogList>
        </main>
    )
}
