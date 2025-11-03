export async function getTeamData() {
    const res = await fetch("https://randomuser.me/api/?results=20", {
        cache: "no-store", // ensures fresh data every reload (SSR)
    });

    if (!res.ok) {
        throw new Error("Failed to fetch team data");
    }

    const data = await res.json();
    const teams = data.results;

    // You can also attach custom roles and bios here if you want
    const roles = [
        "Chief Executive Officer (CEO)",
        "Chief Operations Officer (COO)",
        "Head of Fitness Programs",
        "Lead Nutritionist",
        "Personal Trainer",
        "Personal Trainer",
        "Personal Trainer",
        "Wellness Coach",
        "Marketing & Brand Strategist",
        "Sports Physiotherapist",
        "Sports Physiotherapist",
        "Sports Physiotherapist",
        "Community Manager",
        "Content Creator",
        "Content Creator",
        "Content Creator",
        "Athlete Relations Manager",
        "Customer Experience Specialist",
        "Customer Experience Specialist",
        "Customer Experience Specialist",
    ];

    const bios = [
        "Dedicated to inspiring a global movement toward a healthier lifestyle.",
        "Passionate about designing programs that build both strength and confidence.",
        "Helps clients reach their peak performance through tailored fitness plans.",
        "Combines science-based nutrition with a balanced lifestyle approach.",
        "Believes fitness should be fun, challenging, and empowering for everyone.",
        "Focuses on mental and physical well-being through sustainable habits.",
        "Brings creative energy to connect people with our brand’s fitness vision.",
        "Committed to helping athletes recover, perform, and stay injury-free.",
        "Creates a supportive global fitness community that motivates one another.",
        "Transforms everyday stories into content that inspires movement.",
        "Works closely with athletes to promote performance and longevity.",
        "Ensures every member’s experience is motivating, inclusive, and impactful.",
    ];

    // helper to randomize role & bio
    const randomItem = (arr: string[]) =>
        arr[Math.floor(Math.random() * arr.length)];

    return teams.map((member: any, index: number) => ({
        name: `${member.name.first} ${member.name.last}`,
        email: member.email,
        image: member.picture.large,
        country: member.location.country,
        role: roles[index],
        bio: randomItem(bios),
    }));
}
