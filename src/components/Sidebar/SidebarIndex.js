import React, { useState, useEffect, useRef } from 'react';
import './SidebarIndex.css';

const SidebarIndex = () => {
    // State
    const [isVisible, setIsVisible] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);

    // Refs
    const sidebarRef = useRef(null);
    const rafRef = useRef(null);
    const activeIdRef = useRef('');
    const sections = [
        { id: 'what-built', name: 'What Have I Built?' },
        { id: 'what-do', name: 'What Do I Do?' },
        { id: 'what-know', name: 'What Do I Know?' },
        { id: 'certificates', name: 'Certificates' },
        { id: 'homelab', name: 'Home Lab' },
        { id: 'location', name: 'Location' },
        { id: 'contact', name: 'Contact' }
    ];

    // Toggle minimize state
    const toggleMinimize = (e) => {
        e.stopPropagation(); // Prevent event bubbling
        setIsMinimized(!isMinimized);

        // Save preference in localStorage
        localStorage.setItem('sidebar-minimized', !isMinimized ? 'true' : 'false');
    };

    // Initialize and handle sidebar updates
    useEffect(() => {
        // Check if we should show the sidebar based on window width
        const checkVisibility = () => {
            setIsVisible(window.innerWidth > 1400);
        };

        // Check saved minimize preference
        const savedMinimize = localStorage.getItem('sidebar-minimized') === 'true';
        setIsMinimized(savedMinimize);

        // Check visibility initially and on resize
        checkVisibility();
        window.addEventListener('resize', checkVisibility);

        // Don't proceed further if the sidebar isn't visible
        if (!isVisible) {
            return () => {
                window.removeEventListener('resize', checkVisibility);
            };
        }

        // Get name-heading element reference
        let nameHeadingBottom = 0;
        const getNameHeadingPosition = () => {
            const nameHeading = document.querySelector('.name-heading');
            if (nameHeading) {
                const rect = nameHeading.getBoundingClientRect();
                nameHeadingBottom = rect.bottom + window.scrollY;
            }
        };

        // Update active section in DOM directly (no state updates)
        const updateActiveSection = (sectionId) => {
            if (activeIdRef.current === sectionId) return;

            activeIdRef.current = sectionId;

            if (sidebarRef.current) {
                const items = sidebarRef.current.querySelectorAll('li');
                items.forEach(item => {
                    if (item.getAttribute('data-id') === sectionId) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }
        };

        // Find which section is active based on scroll position
        const findActiveSection = () => {
            const scrollY = window.scrollY;
            const scrollPosition = scrollY + 100;
            const containers = document.querySelectorAll('.websites-container, .websites-container-info, .websites-container-info2');

            // Handle top of page
            if (scrollY < 50 && sections.length > 0) {
                updateActiveSection(sections[0].id);
                return;
            }

            // Handle bottom of page
            if ((window.innerHeight + scrollY) >= document.body.offsetHeight - 50 && sections.length > 0) {
                updateActiveSection(sections[sections.length - 1].id);
                return;
            }

            // Find section in viewport
            for (let i = 0; i < containers.length && i < sections.length; i++) {
                const container = containers[i];
                const rect = container.getBoundingClientRect();
                const containerTop = rect.top + scrollY;
                const containerBottom = rect.bottom + scrollY;

                if (scrollPosition >= containerTop && scrollPosition < containerBottom) {
                    updateActiveSection(sections[i].id);
                    return;
                }
            }
        };

        // Update sidebar position function - runs with requestAnimationFrame
        const updateSidebarPosition = () => {
            if (!sidebarRef.current) {
                rafRef.current = requestAnimationFrame(updateSidebarPosition);
                return;
            }

            // Get current scroll position
            const scrollY = window.scrollY;

            // Update sidebar position - keep it below the name heading
            const newTop = Math.max(nameHeadingBottom - 47, scrollY + 100);
            sidebarRef.current.style.top = `${newTop}px`;

            // Set correct theme from document
            const theme = document.documentElement.getAttribute('data-theme') || 'light';

            // Update classes without affecting minimized state
            if (isMinimized) {
                sidebarRef.current.className = `sidebar-index ${theme} minimized`;
            } else {
                sidebarRef.current.className = `sidebar-index ${theme}`;
            }

            // Update active section
            findActiveSection();

            // Continue animation loop
            rafRef.current = requestAnimationFrame(updateSidebarPosition);
        };

        // Initial setup
        getNameHeadingPosition();

        // Start animation loop after a brief delay to ensure DOM is ready
        const initTimeout = setTimeout(() => {
            getNameHeadingPosition(); // Get position again to make sure
            rafRef.current = requestAnimationFrame(updateSidebarPosition);
        }, 100);

        // Clean up on unmount
        return () => {
            clearTimeout(initTimeout);
            window.removeEventListener('resize', checkVisibility);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [isVisible, isMinimized]);

    // Handle clicks on section links
    const handleSectionClick = (sectionId) => {
        // If sidebar is minimized, expand it first
        if (isMinimized) {
            setIsMinimized(false);
            localStorage.setItem('sidebar-minimized', 'false');

            // Short delay to allow animation to complete before scrolling
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 300);
        } else {
            scrollToSection(sectionId);
        }
    };

    // Scroll to a section
    const scrollToSection = (sectionId) => {
        // Find section by ID
        const index = sections.findIndex(s => s.id === sectionId);
        if (index === -1) return;

        // Find corresponding container
        const containers = document.querySelectorAll('.websites-container, .websites-container-info, .websites-container-info2');
        if (index < containers.length) {
            // Smooth scroll to container
            containers[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Don't render anything if not visible
    if (!isVisible) return null;

    // Determine initial theme
    const initialTheme = document.documentElement.getAttribute('data-theme') || 'light';

    return (
        <div
            ref={sidebarRef}
            className={`sidebar-index ${initialTheme} ${isMinimized ? 'minimized' : ''}`}
            style={{ position: 'absolute' }}
        >
            <div className="sidebar-title">
                {/* Text is hidden via CSS when minimized */}
                <span>Page Sections</span>

                <button
                    className="sidebar-toggle"
                    onClick={toggleMinimize}
                    title={isMinimized ? "Expand sidebar" : "Minimize sidebar"}
                >
                    <div className="sidebar-toggle-icon"></div>
                </button>
            </div>
            <ul>
                {sections.map(section => (
                    <li
                        key={section.id}
                        data-id={section.id}
                        className={activeIdRef.current === section.id ? 'active' : ''}
                        onClick={() => handleSectionClick(section.id)}
                    >
                        {section.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarIndex;