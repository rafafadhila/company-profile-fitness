import { useState } from "react";

export default function useToggleMobile(initial = false) {
    const [isOpen, setIsOpen] = useState(initial);
    const toggle = () => setIsOpen(prev => !prev);
    return { isOpen, toggle, setIsOpen };
}
