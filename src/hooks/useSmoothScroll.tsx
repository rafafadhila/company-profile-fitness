'use client'

export function useSmoothScroll() {
    function scrollToSection(id: string) {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return { scrollToSection }
}
