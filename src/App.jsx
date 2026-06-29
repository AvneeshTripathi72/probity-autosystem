import { useState, useEffect, useRef, useCallback } from "react";

const productVideoSlides = [
  {
    title: "Motor Assembly Line",
    category: "Assembly Line Automation",
    thumbnail: "/images/project_video_1.jpg",
    videoUrl: "/videos/project_video_1.mp4",
  },
  {
    title: "Fully automated Sound House Enclosure System",
    category: "SPM",
    thumbnail: "/images/project_video_2.jpg",
    videoUrl: "/videos/project_video_2.mp4",
  },
  {
    title: "Automated bearing press unit",
    category: "Assembly Line Automation",
    thumbnail: "/images/project_video_3.jpg",
    videoUrl: "/videos/project_video_3.mp4",
  },
  {
    title: "Automated bearing press unit (Fast)",
    category: "Assembly Line Automation",
    thumbnail: "/images/project_video_4.jpg",
    videoUrl: "/videos/project_video_4.mp4",
  },
  {
    title: "Assembly Line Automation with MES Software Integration",
    category: "Assembly Line Automation",
    thumbnail: "/images/thumb_1.jpg",
    videoUrl: "/videos/video1.mp4",
  },
  {
    title: "Friction Feeder (SPM)",
    category: "SPM",
    thumbnail: "/images/img10.jpg",
    videoUrl: "https://drive.google.com/file/d/1ZLkMCPAuIH4TTQDH5-6V2tlm2Q8OZpKX/view",
  },
  {
    title: "Robotic Pick & Place Automation Cell",
    category: "Robotics Machine tending",
    thumbnail: "/images/image1.png",
    videoUrl: null,
  },
  {
    title: "Robotic Welding Cell",
    category: "Robotics Machine tending",
    thumbnail: "/images/welding_cell.png",
    videoUrl: null,
  },
  {
    title: "Robotic Palletizing System",
    category: "Robotics Machine tending",
    thumbnail: "/images/palletizer.png",
    videoUrl: null,
  },
  {
    title: "Robotic Gripper & Component Handling",
    category: "Robotics Machine tending",
    thumbnail: "/images/gripper.png",
    videoUrl: null,
  },
  {
    title: "Sintered Parts Powder Press",
    category: "Robotics Machine tending",
    thumbnail: "/images/img27.jpg",
    videoUrl: "https://drive.google.com/file/d/1BRR2OncdZUoBkoGw8wbzVeldyifzy1fM/view",
  },
  {
    title: "Auto Box Stepping with Shrink Machine",
    category: "Assembly Line Automation",
    thumbnail: "/images/img34.jpg",
    videoUrl: "https://drive.google.com/file/d/1OrJ0KZ24NYVuVtLAVlgB_GLPde5yQk30/view",
  },
  {
    title: "Rear Line Seat Checking ODS Unit",
    category: "SPM",
    thumbnail: "/images/img37.jpg",
    videoUrl: "https://drive.google.com/file/d/1aCM_P2iymcZu18OnmDYbNLkLay_ZNDuV/view",
  },
  {
    title: "Robot Sound box",
    category: "SPM",
    thumbnail: "/images/img44.jpg",
    videoUrl: "https://drive.google.com/file/d/1S-URxa85xeYFBOOulbxb_rTVqe5pIB94/view",
  },
  {
    title: "Automated Conveyor Sorting Line",
    category: "Material Handling & Gantry",
    thumbnail: "/images/conveyor_robot.png",
    videoUrl: null,
  },
  {
    title: "Bearing Loader Unloader Lifter",
    category: "Material Handling & Gantry",
    thumbnail: "/images/img48.jpg",
    videoUrl: "https://drive.google.com/file/d/1p-J2OecsY7FQlTN-gHFi0H9UgkO3fr_F/view",
  },
  {
    title: "Carrot Type Conveyor",
    category: "Assembly Line Automation",
    thumbnail: "/images/img52.jpg",
    videoUrl: "https://drive.google.com/file/d/1zHmNKaF9zGLSBGUmBYzoWC49Zj-uMEOb/view",
  },
  {
    title: "Shrink Wrapping Unit",
    category: "Assembly Line Automation",
    thumbnail: "/images/img56.jpg",
    videoUrl: "https://drive.google.com/file/d/14AEfu20Wb4DdnmtbxaRGNxUvqAq8Nm_D/view",
  },
  {
    title: "Bucket Elevator Conveyor",
    category: "Material Handling & Gantry",
    thumbnail: "/images/img60.jpg",
    videoUrl: "https://drive.google.com/file/d/1GlmtVlBN-fDNM6JQGCs279BigQdYuGN1/view",
  },
  {
    title: "Aging set up unit for battery and invertor testing",
    category: "SPM",
    thumbnail: "/images/img64.jpg",
    videoUrl: null,
  },
  {
    title: "Scara robot integration",
    category: "Robotics Machine tending",
    thumbnail: "/images/img72.jpg",
    videoUrl: "https://drive.google.com/file/d/1AHkonU0QVMu01KC8dAobU-Ycl4QsCIEs/view",
  },
  {
    title: "Manipulator for battery Lifting",
    category: "Material Handling & Gantry",
    thumbnail: "/images/img76.jpg",
    videoUrl: "https://drive.google.com/file/d/1z3yGLrAw2T6Tn4eASdXIh2-bt9_Fg75U/view",
  },
  {
    title: "Haircrack bearing rejection unit",
    category: "SPM",
    thumbnail: "/images/img80.jpg",
    videoUrl: "https://drive.google.com/file/d/1blQ9PSMq63uNEvKpTF3SLUcOMcIICdKJ/view",
  },
  {
    title: "Manipulator",
    category: "Material Handling & Gantry",
    thumbnail: "/images/img84.jpg",
    videoUrl: "https://drive.google.com/file/d/1fycsh6nDfaGMoArCckIoHw-Jrz0K5OOY/view",
  },
  {
    title: "Battery Pack Conveyor",
    category: "",
    thumbnail: "/images/img88.jpg",
    videoUrl: null,
  },
  {
    title: "SIERRA AIR CONNECTOR",
    category: "Traceability & Data System",
    thumbnail: "/images/img93.jpg",
    videoUrl: null,
  },
  {
    title: "Armrest Assembly Line",
    category: "Assembly Line Automation",
    thumbnail: "/images/thumb_2.jpg",
    videoUrl: "/videos/video2.mp4",
  },
  {
    title: "J4U Headrest Assembly Line",
    category: "Assembly Line Automation",
    thumbnail: "/images/thumb_3.jpg",
    videoUrl: "https://drive.google.com/file/d/1dsrZMDW0Uj_UzVofHOAoCcOn5Lbb-ZxP/view",
  },
  {
    title: "Motorized Gluing Machine",
    category: "Gluing & Spraying Automation",
    thumbnail: "/images/img111.jpg",
    videoUrl: "https://drive.google.com/file/d/1BHkflY0M5lQeM_GsHzy7ZX4u1XHl-qPf/view",
  },
  {
    title: "J4U Armrest Assembly Line",
    category: "Assembly Line Automation",
    thumbnail: "/images/img116.jpg",
    videoUrl: null,
  },
  {
    title: "TMR Machine",
    category: "Material Mixing & Handling equipment",
    thumbnail: "/images/img120.jpg",
    videoUrl: "https://drive.google.com/file/d/1NHhE-Fl-_NMwHGy4YN5NM7lRWa_3FUnj/view",
  },
];
const priorityProductCategory = "Assembly Line Automation";
const prioritizeProductGroupEntries = (groupEntries) => {
  const orderedGroups = [...groupEntries];
  const priorityGroupIndex = orderedGroups.findIndex(
    ([category]) => category === priorityProductCategory
  );

  if (priorityGroupIndex > 0) {
    const [priorityGroup] = orderedGroups.splice(priorityGroupIndex, 1);
    orderedGroups.unshift(priorityGroup);
  }

  return orderedGroups;
};
const getProductCategoryGroups = (items, getCategory) => {
  const groupedItems = new Map();

  items.forEach((item) => {
    const category = getCategory(item)?.trim() || "Other Projects";

    if (!groupedItems.has(category)) {
      groupedItems.set(category, []);
    }

    groupedItems.get(category).push(item);
  });

  return prioritizeProductGroupEntries(Array.from(groupedItems.entries()));
};
const createProductGroupId = (category) =>
  `product-gallery-group-${category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
const productVideoGroups = getProductCategoryGroups(
  productVideoSlides,
  ({ category }) => category
).map(([category, slides]) => {
  const sliderSlides = slides;

  return {
    id: createProductGroupId(category),
    category,
    slides,
    sliderSlides,
    slideCount: sliderSlides.length,
  };
});
const productImageGroups = (() => {
  const groupedImages = new Map();

  productVideoSlides.forEach(({ title, category, thumbnail }, index) => {
    const categoryLabel = category?.trim() || "Other Projects";
    const image = {
      id: `product-gallery-${index + 1}`,
      src: thumbnail,
      alt: `${title} product image`,
      title,
      category: categoryLabel,
    };

    if (!groupedImages.has(categoryLabel)) {
      groupedImages.set(categoryLabel, []);
    }

    groupedImages.get(categoryLabel).push(image);
  });

  return prioritizeProductGroupEntries(Array.from(groupedImages.entries())).map(([category, images]) => ({
    id: createProductGroupId(category),
    category,
    previewImage: images[0],
    images,
    imageCount: images.length,
  }));
})();

const getDrivePreviewUrl = (url) => {
  const match = url?.match(/\/file\/d\/([^/]+)/);
  return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
};

const heroSlides = [
  {
    heading: "MULTIMODEL SEAT ASSEMBLY LINE",
    subheading: "End To End Traceability",
    detail: "SBRS Testing",
    image: "/images/hero1.jpeg",
  },
  {
    heading: "ULTRASONIC WELDING CELL",
    subheading: "Robotic Application",
    detail: "Clamping Fixtures",
    image: "/images/hero2.jpeg",
  },
  {
    heading: "ROBOTIC PALLETIZING SYSTEM",
    subheading: "Material Handling",
    detail: "Automated Stacking & Dispatch",
    image: "/images/hero3.jpeg",
  },
  {
    heading: "ROBOTIC PICK & PLACE CELL",
    subheading: "Machine Tending",
    detail: "High-Speed Component Handling",
    image: "/images/hero4.jpeg",
  },
  {
    heading: "AUTOMATED CONVEYOR SORTING LINE",
    subheading: "Material Handling & Gantry",
    detail: "High Performance Routing",
    image: "/images/hero1.jpeg",
  },
];

function AnimatedCounter({ value }) {
  const numericString = value.replace(/[^0-9]/g, '');
  const suffix = value.replace(/[0-9]/g, '');
  const target = parseInt(numericString, 10);

  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (isNaN(target)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          let startTimestamp = null;
          const duration = 2000; // 2 seconds

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easedProgress = progress * (2 - progress); // quadratic ease-out
            const currentCount = Math.floor(easedProgress * target);
            
            setCount(currentCount);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [target]);

  return <span ref={elementRef}>{isNaN(target) ? value : `${count}${suffix}`}</span>;
}

export default function App() {
  // ── Mobile nav state ──────────────────────────────────────────────────────
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCatalogTab, setActiveCatalogTab] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideoSlide, setActiveVideoSlide] = useState(null);
  const [activeGalleryGroup, setActiveGalleryGroup] = useState(null);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [customerCols, setCustomerCols] = useState(2);
  const [showAllCustomers, setShowAllCustomers] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkViewport = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      setCustomerCols(w >= 1024 ? 5 : w >= 640 ? 3 : 2);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const handlePrevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };
  const [activeGallerySlideIndex, setActiveGallerySlideIndex] = useState(0);
  const [activeProjectFilter, setActiveProjectFilter] = useState("All");

  const openCatalog = (tab) => {
    setActiveCatalogTab(tab);
    setTimeout(() => {
      setModalOpen(true);
    }, 10);
  };

  const closeCatalog = () => {
    setModalOpen(false);
    setTimeout(() => {
      setActiveCatalogTab(null);
    }, 300);
  };

  const openGalleryGroup = (group) => {
    setActiveGallerySlideIndex(0);
    setActiveGalleryGroup(group);
  };

  const openGalleryForSlide = (slide) => {
    const categoryLabel = slide.category?.trim() || "Other Projects";
    const group = productImageGroups.find(g => g.category === categoryLabel);
    if (group) {
      const imgIndex = group.images.findIndex(img => img.title === slide.title);
      setActiveGallerySlideIndex(imgIndex >= 0 ? imgIndex : 0);
      setActiveGalleryGroup(group);
    }
  };

  const closeGalleryGroup = () => {
    setActiveGalleryGroup(null);
    setActiveGallerySlideIndex(0);
  };

  // Disable body scroll when an overlay popup is active
  useEffect(() => {
    if (activeCatalogTab || activeVideoSlide || activeGalleryGroup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeCatalogTab, activeVideoSlide, activeGalleryGroup]);

  useEffect(() => {
    if (!activeVideoSlide) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveVideoSlide(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeVideoSlide]);

  useEffect(() => {
    if (!activeGalleryGroup) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveGalleryGroup(null);
        setActiveGallerySlideIndex(0);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeGalleryGroup]);

  const activeGalleryImages = activeGalleryGroup?.images ?? [];
  const activeGalleryImage =
    activeGalleryImages[activeGallerySlideIndex] ?? activeGalleryImages[0];
  const galleryHasMultipleImages = activeGalleryImages.length > 1;

  const showPreviousGalleryImage = () => {
    if (!galleryHasMultipleImages) return;
    setActiveGallerySlideIndex((index) =>
      (index - 1 + activeGalleryImages.length) % activeGalleryImages.length
    );
  };

  const showNextGalleryImage = () => {
    if (!galleryHasMultipleImages) return;
    setActiveGallerySlideIndex((index) => (index + 1) % activeGalleryImages.length);
  };

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close menu on hash-link click
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((l) => l.addEventListener("click", closeMenu));
    return () => links.forEach((l) => l.removeEventListener("click", closeMenu));
  }, [closeMenu]);

  // ── Scroll-reveal IntersectionObserver ───────────────────────────────────
  useEffect(() => {
    const els = document.querySelectorAll(".js-reveal");
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // ── Product slider state ──────────────────────────────────────────────────
  const [productCategorySlideIndexes, setProductCategorySlideIndexes] = useState({});
  const productSliderTrackRefs = useRef({});
  const [productSliderLayouts, setProductSliderLayouts] = useState({});

  const getProductCategorySlideIndex = useCallback(
    (groupId) => productCategorySlideIndexes[groupId] ?? 0,
    [productCategorySlideIndexes]
  );

  const calculateProductSliderOffset = useCallback((groupId, slideIndex) => {
    const track = productSliderTrackRefs.current[groupId];
    if (!track) return;
    const firstCard = track.querySelector("[data-product-slide]");
    if (!firstCard) return;
    const gap = window.innerWidth >= 640 ? 24 : 12; // sm:gap-6 = 24px, gap-3 = 12px
    const cardW = firstCard.offsetWidth;
    setProductSliderLayouts((layouts) => ({
      ...layouts,
      [groupId]: {
        offset: -slideIndex * (cardW + gap),
        sidePadding: 0,
      },
    }));
  }, []);

  const showPreviousProductSlide = (group) => {
    if (group.slideCount <= 1) return;
    setProductCategorySlideIndexes((indexes) => {
      const currentIndex = indexes[group.id] ?? 0;
      const nextIndex = (currentIndex - 1 + group.slideCount) % group.slideCount;
      return { ...indexes, [group.id]: nextIndex };
    });
  };

  const showNextProductSlide = (group) => {
    if (group.slideCount <= 1) return;
    setProductCategorySlideIndexes((indexes) => {
      const currentIndex = indexes[group.id] ?? 0;
      const nextIndex = (currentIndex + 1) % group.slideCount;
      return { ...indexes, [group.id]: nextIndex };
    });
  };

  useEffect(() => {
    productVideoGroups.forEach((group) => {
      calculateProductSliderOffset(group.id, getProductCategorySlideIndex(group.id));
    });
  }, [calculateProductSliderOffset, getProductCategorySlideIndex]);

  useEffect(() => {
    const updateProductSliderOffsets = () => {
      productVideoGroups.forEach((group) => {
        calculateProductSliderOffset(group.id, getProductCategorySlideIndex(group.id));
      });
    };
    window.addEventListener("resize", updateProductSliderOffsets);
    return () => window.removeEventListener("resize", updateProductSliderOffsets);
  }, [calculateProductSliderOffset, getProductCategorySlideIndex]);

  return (
    <>
      <main className="overflow-x-hidden bg-background text-foreground pb-32 md:pb-0">
        <header
          className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 shadow-sm backdrop-blur-xl transition-all duration-300"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
            <a href="#top" className="group flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-glow">
                <img
                  src="/images/logo.jpeg"
                  alt="Probity Autosystem Pvt Ltd Logo"
                  className="h-full w-full object-contain p-0.5"
                />
              </div>
              <div className="flex-1 min-w-0 leading-tight">
                <div className="font-display text-sm font-bold transition-colors duration-300 group-hover:text-primary md:text-base">
                  Probity Autosystem Pvt Ltd
                </div>
                <div className="text-[10px] font-semibold tracking-widest text-primary-glow">
                  ENGINEERING EVERYTHING
                </div>
              </div>
            </a>
            
            <nav className="hidden items-center gap-8 text-sm font-bold md:flex">
              {[
                { name: 'About', href: '#about' },
                { name: 'Vision', href: '#vision' },
                { name: 'Solutions', href: '#products' },
                { name: 'Industries', href: '#industries' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:text-primary hover:after:w-full hover-glow"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-bold text-background transition-all duration-300 hover:scale-105 hover:bg-primary hover:shadow-[0_0_20px_oklch(50%_0.08_235/0.4)] md:inline-flex"
              tabIndex={0}
            >
              Get Quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(o => !o)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/85 text-foreground transition-colors duration-300 hover:border-primary hover:text-primary md:hidden"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x h-5 w-5"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu h-5 w-5"
                >
                  <path d="M4 5h16" />
                  <path d="M4 12h16" />
                  <path d="M4 19h16" />
                </svg>
              )}
            </button>
          </div>
          <div
            className="overflow-hidden border-t border-border bg-background md:hidden"
            style={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0, overflow: "hidden", transition: "opacity 0.3s ease" }}
          >
            <div className="space-y-2 px-4 py-4">
              <a
                href="#about"
                className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary/40 hover:text-primary"
              >
                <span>About</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#vision"
                className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary/40 hover:text-primary"
              >
                <span>Vision</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#products"
                className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary/40 hover:text-primary"
              >
                <span>Products</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary/40 hover:text-primary"
              >
                <span>Contact</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors duration-300 hover:bg-primary"
              >
                Get Quote
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </header>
        <section
          id="top"
          style={{
            position: 'relative',
            height: '75vh',
            minHeight: '480px',
            width: '100%',
            overflow: 'hidden',
            backgroundColor: '#000000',
            color: '#ffffff',
          }}
        >
          {/* Slider Background images */}
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                inset: 0,
                transition: 'opacity 1s ease-in-out',
                opacity: index === currentHeroSlide ? 1 : 0,
                zIndex: index === currentHeroSlide ? 10 : 0,
                pointerEvents: index === currentHeroSlide ? 'auto' : 'none',
              }}
            >
              <img
                src={slide.image}
                alt={slide.heading}
                loading={index === 0 ? "eager" : "lazy"}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'brightness(0.85) saturate(1.1) contrast(1)',
                  transform: index === currentHeroSlide ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 6s ease-out',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.15), transparent 50%, rgba(0, 0, 0, 0.35))',
                  zIndex: 1
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to right, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.05) 60%, transparent)',
                  zIndex: 2
                }}
              />
              
              {/* Overlay Slide Content */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  paddingTop: isMobile ? '5.5rem' : '5rem',
                  paddingBottom: isMobile ? '1.5rem' : '2rem',
                  paddingLeft: '5%',
                  paddingRight: '5%',
                  zIndex: 10,
                }}
              >
                <div style={{ maxWidth: '800px', textAlign: 'left', paddingLeft: isMobile ? '0' : '5vw', width: '100%' }}>
                  <h1 
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: isMobile ? '1.85rem' : 'clamp(2rem, 4.5vw, 3.75rem)',
                      lineHeight: '1.1',
                      fontWeight: '900',
                      textTransform: 'uppercase',
                      letterSpacing: '-0.02em',
                      color: '#facc15',
                      margin: 0,
                      textShadow: '0 4px 12px rgba(0,0,0,0.8)',
                      opacity: index === currentHeroSlide ? 1 : 0,
                      transform: index === currentHeroSlide ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s',
                    }}
                  >
                    {slide.heading}
                  </h1>
                  <h2 
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: isMobile ? '1.2rem' : 'clamp(1.25rem, 3.2vw, 2.25rem)',
                      lineHeight: '1.2',
                      fontWeight: '800',
                      color: '#ffffff',
                      marginTop: '0.75rem',
                      marginBottom: '0.25rem',
                      textShadow: '0 3px 8px rgba(0,0,0,0.8)',
                      opacity: index === currentHeroSlide ? 1 : 0,
                      transform: index === currentHeroSlide ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.7s ease-out 0.4s, transform 0.7s ease-out 0.4s',
                    }}
                  >
                    {slide.subheading}
                  </h2>
                  <p 
                    style={{
                      fontSize: 'clamp(0.9rem, 1.8vw, 1.25rem)',
                      fontWeight: '500',
                      color: 'rgba(255, 255, 255, 0.85)',
                      marginTop: '0.5rem',
                      textShadow: '0 2px 6px rgba(0,0,0,0.8)',
                      opacity: index === currentHeroSlide ? 1 : 0,
                      transform: index === currentHeroSlide ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.7s ease-out 0.6s, transform 0.7s ease-out 0.6s',
                    }}
                  >
                    {slide.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Left/Right Arrow Controls */}
          <button
            type="button"
            onClick={handlePrevHeroSlide}
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 30,
              display: 'inline-flex',
              height: '48px',
              width: '48px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              backgroundColor: 'rgba(0, 0, 0, 0.45)',
              color: '#ffffff',
              backdropFilter: 'blur(8px)',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            className="hover-glow"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ height: '20px', width: '20px' }}
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNextHeroSlide}
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 30,
              display: 'inline-flex',
              height: '48px',
              width: '48px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              backgroundColor: 'rgba(0, 0, 0, 0.45)',
              color: '#ffffff',
              backdropFilter: 'blur(8px)',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            className="hover-glow"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ height: '20px', width: '20px' }}
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* Indicator Dots */}
          <div 
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 30,
              display: 'flex',
              gap: '10px',
            }}
          >
            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentHeroSlide(index)}
                style={{
                  height: '8px',
                  width: index === currentHeroSlide ? '24px' : '8px',
                  borderRadius: '4px',
                  backgroundColor: index === currentHeroSlide ? '#00c8b4' : 'rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <a
            href="#company-intro"
            aria-label="Scroll to company introduction section"
            className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-scroll-bob flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50 sm:flex z-20"
          >
            <span>Scroll</span>
            <span className="block h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
          </a>
        </section>

        <section
          id="company-intro"
          className="relative bg-background text-foreground px-5 py-20 sm:px-6 md:py-24 border-b border-border overflow-hidden"
        >
          {/* Ambient Background Glows */}
          <div className="intro-glow-1" />
          <div className="intro-glow-2" />

          <style>{`
            .intro-glow-1 {
              position: absolute;
              top: 5%;
              left: 5%;
              width: 300px;
              height: 300px;
              background: var(--primary);
              opacity: 0.05;
              filter: blur(50px);
              pointer-events: none;
              z-index: 0;
            }
            .intro-glow-2 {
              position: absolute;
              bottom: 10%;
              right: 5%;
              width: 350px;
              height: 350px;
              background: var(--primary-glow);
              opacity: 0.05;
              filter: blur(60px);
              pointer-events: none;
              z-index: 0;
            }
            .intro-badge {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              padding: 6px 16px;
              border-radius: 9999px;
              background: rgba(15, 23, 42, 0.03);
              border: 1px solid rgba(15, 23, 42, 0.08);
              font-size: 11px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.15em;
              color: var(--primary);
              box-shadow: 0 4px 15px rgba(15, 23, 42, 0.01);
              transition: all 0.3s ease;
              position: relative;
              z-index: 1;
            }
            .intro-badge:hover {
              border-color: var(--primary-glow);
              background: rgba(15, 23, 42, 0.05);
              transform: translateY(-1px);
            }
            .intro-heading {
              font-family: 'Outfit', sans-serif;
              font-size: clamp(2.25rem, 5vw, 3.5rem);
              font-weight: 800;
              line-height: 1.15;
              color: #0f172a;
              margin-top: 24px;
              margin-bottom: 28px;
              letter-spacing: -0.02em;
              position: relative;
              z-index: 1;
            }
            .text-gradient {
              background: linear-gradient(135deg, var(--primary) 0%, var(--primary-glow) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            .intro-text {
              font-size: clamp(1rem, 1.8vw, 1.15rem);
              line-height: 1.7;
              color: #475569;
              max-width: 600px;
              margin-bottom: 36px;
              position: relative;
              z-index: 1;
            }
            .intro-step-pill {
              display: flex;
              align-items: center;
              gap: 10px;
              padding: 8px 18px;
              border-radius: 9999px;
              background: #ffffff;
              border: 1px solid #e2e8f0;
              font-size: 11px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.1em;
              color: #334155;
              box-shadow: 0 4px 10px rgba(15, 23, 42, 0.03);
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .intro-step-pill:hover {
              border-color: var(--primary-glow);
              background: rgba(15, 23, 42, 0.02);
              color: var(--primary);
              transform: translateY(-2px);
              box-shadow: 0 6px 15px rgba(15, 23, 42, 0.05);
            }
            .intro-step-dot {
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: linear-gradient(135deg, var(--primary) 0%, var(--primary-glow) 100%);
              box-shadow: 0 0 8px rgba(28, 71, 120, 0.15);
              transition: transform 0.3s;
            }
            .intro-step-pill:hover .intro-step-dot {
              transform: scale(1.3);
            }
            .timeline-connector {
              display: flex;
              align-items: center;
              justify-content: center;
              transition: transform 0.3s;
            }
            .timeline-connector:hover {
              transform: translateX(2px);
            }
            .btn-explore {
              background: linear-gradient(135deg, var(--primary) 0%, var(--primary-glow) 100%);
              color: #ffffff !important;
              font-weight: 700;
              font-size: 16px;
              padding: 18px 38px;
              letter-spacing: 0.03em;
              box-shadow: 0 10px 28px rgba(28, 71, 120, 0.2);
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .btn-explore:hover {
              transform: translateY(-3px) scale(1.03);
              box-shadow: 0 14px 35px rgba(28, 71, 120, 0.3);
              background: linear-gradient(135deg, var(--primary-glow) 0%, var(--primary) 100%);
            }
            .btn-contact {
              background: #ffffff;
              border: 2px solid var(--border);
              color: var(--primary) !important;
              font-weight: 700;
              font-size: 16px;
              padding: 18px 38px;
              letter-spacing: 0.03em;
              box-shadow: 0 6px 18px rgba(15, 23, 42, 0.03);
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .btn-contact:hover {
              background: #f8fafc;
              border-color: var(--primary-glow);
              color: var(--primary) !important;
              transform: translateY(-3px) scale(1.03);
              box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
            }
            .capabilities-container {
              background: #000000;
              backdrop-filter: blur(12px);
              border-radius: 28px;
              border: 1px solid rgba(56, 189, 248, 0.2);
              padding: 32px;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(56, 189, 248, 0.05);
              position: relative;
              overflow: hidden;
              z-index: 1;
            }
            .capabilities-container::before {
              content: '';
              position: absolute;
              inset: 0;
              background: radial-gradient(circle at top right, rgba(56, 189, 248, 0.12), transparent 60%),
                          radial-gradient(circle at bottom left, rgba(56, 189, 248, 0.06), transparent 50%);
              pointer-events: none;
              z-index: 0;
            }
            .capabilities-container > * {
              position: relative;
              z-index: 1;
            }
            .capabilities-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 24px;
              border-bottom: 1px solid rgba(56, 189, 248, 0.15);
              padding-bottom: 16px;
            }
            .capabilities-title {
              font-size: 13px;
              font-weight: 800;
              text-transform: uppercase;
              letter-spacing: 0.2em;
              color: #ffffff;
              margin: 0;
            }
            .capabilities-badge {
              background: linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(56, 189, 248, 0.25) 100%);
              border: 1px solid rgba(56, 189, 248, 0.35);
              padding: 5px 12px;
              border-radius: 9999px;
              font-size: 10px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.1em;
              color: #7dd3fc;
            }
            .capability-card {
              display: flex;
              align-items: center;
              gap: 16px;
              padding: 16px 20px;
              border-radius: 16px;
              background: linear-gradient(135deg, #141414 0%, #0f0f0f 100%);
              border: 1px solid rgba(56, 189, 248, 0.12);
              transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
              cursor: pointer;
              position: relative;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
            }
            .capability-card::after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 4px;
              height: 100%;
              background: linear-gradient(to bottom, var(--primary), var(--primary-glow));
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            .capability-card:hover::after {
              opacity: 1;
            }
            .capability-card:hover {
              background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
              border-color: rgba(56, 189, 248, 0.45);
              box-shadow: 0 12px 24px rgba(56, 189, 248, 0.12), 0 4px 10px rgba(0, 0, 0, 0.5);
              transform: translateY(-4px) scale(1.01);
            }
            .capability-icon-wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 46px;
              width: 46px;
              flex-shrink: 0;
              border-radius: 12px;
              background: linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(56, 189, 248, 0.2) 100%);
              color: #38bdf8;
              border: 1px solid rgba(56, 189, 248, 0.25);
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .capability-card:hover .capability-icon-wrapper {
              background: linear-gradient(135deg, var(--primary) 0%, var(--primary-glow) 100%);
              color: #ffffff;
              border-color: transparent;
              transform: scale(1.1) rotate(4deg);
              box-shadow: 0 6px 15px rgba(56, 189, 248, 0.4);
            }
            .capability-text {
              font-size: 15px;
              font-weight: 700;
              color: #cbd5e1;
              transition: color 0.3s ease;
            }
            .capability-card:hover .capability-text {
              color: #ffffff;
            }
            @media (min-width: 640px) {
              .capability-card.span-2 {
                grid-column: span 2;
              }
            }
          `}</style>
          
          <div className="mx-auto max-w-7xl relative z-10">
            <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
              {/* Left: Original Hero content */}
              <div className="relative flex flex-col h-full">
                <div className="intro-badge">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  Probity Autosystem Pvt Ltd
                </div>
                <h2 className="intro-heading">
                  Smart Factory
                  <br />
                  <span className="text-gradient">Automation Solutions</span>
                </h2>
                <p className="intro-text">
                  We <span className="font-semibold text-foreground">design, build, test &amp; commission</span> turnkey industrial
                  automation — robotics, conveyors, assembly lines &amp; Industry 4.0 systems — for the factories of tomorrow.
                </p>

                {/* Styled Stepper Process Timeline */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px', marginTop: '36px', marginBottom: '40px' }}>
                  <div className="intro-step-pill">
                    <span className="intro-step-dot" />
                    Design
                  </div>
                  <span className="timeline-connector">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: 'var(--primary-glow)', opacity: 0.8 }}
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </span>
                  <div className="intro-step-pill">
                    <span className="intro-step-dot" />
                    Build
                  </div>
                  <span className="timeline-connector">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: 'var(--primary-glow)', opacity: 0.8 }}
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </span>
                  <div className="intro-step-pill">
                    <span className="intro-step-dot" />
                    Test
                  </div>
                  <span className="timeline-connector">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: 'var(--primary-glow)', opacity: 0.8 }}
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </span>
                  <div className="intro-step-pill">
                    <span className="intro-step-dot" />
                    Commission
                  </div>
                </div>

                <div className="mt-12 flex flex-col items-center gap-4 sm:mt-14 sm:flex-row sm:gap-6">
                  <a
                    href="#products"
                    className="btn-explore group inline-flex w-full items-center justify-center gap-2 rounded-full font-bold text-white sm:w-auto"
                    tabIndex={0}
                  >
                    Explore Solutions
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="#contact"
                    className="btn-contact group inline-flex w-full items-center justify-center gap-2 rounded-full font-bold sm:w-auto"
                    tabIndex={0}
                  >
                    Contact Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right h-4 w-4 transition-all duration-300 sm:opacity-0 sm:group-hover:translate-x-1 sm:group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right: Capability matrix card */}
              <div className="relative mt-8 lg:mt-0">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-primary/5 blur-2xl" />
                <div className="capabilities-container">
                  <div className="capabilities-header">
                    <p className="capabilities-title">Core Capabilities</p>
                    <span className="capabilities-badge">7 Segments</span>
                  </div>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      { name: "Industrial Robotics", icon: "bot" },
                      { name: "Conveyor Systems", icon: "conveyor" },
                      { name: "Warehouse Automation", icon: "warehouse" },
                      { name: "Assembly Lines", icon: "assembly" },
                      { name: "Traceability Systems", icon: "scan" },
                      { name: "Special Purpose Machines", icon: "cog" },
                      { name: "Industry 4.0 Solutions", icon: "network" },
                    ].map((item, idx) => (
                      <li key={item.name} className={`capability-card ${idx === 6 ? 'span-2' : ''}`}>
                        <span className="capability-icon-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            {item.icon === "bot" && (
                              <>
                                <path d="M12 8V4H8" />
                                <rect width="16" height="12" x="4" y="8" rx="2" />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </>
                            )}
                            {item.icon === "conveyor" && (
                              <>
                                <rect width="20" height="6" x="2" y="9" rx="1" />
                                <circle cx="6" cy="18" r="2" />
                                <circle cx="18" cy="18" r="2" />
                                <path d="M6 15v1" />
                                <path d="M18 15v1" />
                              </>
                            )}
                            {item.icon === "warehouse" && (
                              <>
                                <path d="M3 21V8l9-5 9 5v13" />
                                <path d="M9 21V12h6v9" />
                                <path d="M3 21h18" />
                              </>
                            )}
                            {item.icon === "assembly" && (
                              <>
                                <path d="M12 3v18" />
                                <path d="M3 12h18" />
                                <circle cx="6" cy="6" r="2" />
                                <circle cx="18" cy="6" r="2" />
                                <circle cx="18" cy="18" r="2" />
                                <circle cx="6" cy="18" r="2" />
                              </>
                            )}
                            {item.icon === "scan" && (
                              <>
                                <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                                <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                                <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                                <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                                <path d="M7 12h10" />
                              </>
                            )}
                            {item.icon === "cog" && (
                              <>
                                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                                <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                <path d="M12 2v2" />
                                <path d="M12 22v-2" />
                                <path d="m17 20.66-1-1.73" />
                                <path d="M11 10.27 7 3.34" />
                                <path d="m20.66 17-1.73-1" />
                                <path d="m3.34 7 1.73 1" />
                                <path d="m14 12h8" />
                                <path d="M2 12h2" />
                                <path d="m20.66 7-1.73 1" />
                                <path d="m3.34 17 1.73-1" />
                                <path d="m17 3.34-1 1.73" />
                                <path d="m11 13.73-4 6.93" />
                              </>
                            )}
                            {item.icon === "network" && (
                              <>
                                <rect x="16" y="16" width="6" height="6" rx="1" />
                                <rect x="2" y="16" width="6" height="6" rx="1" />
                                <rect x="9" y="2" width="6" height="6" rx="1" />
                                <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                                <path d="M12 12V8" />
                              </>
                            )}
                          </svg>
                        </span>
                        <span className="capability-text">
                          {item.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="group overflow-hidden border-y border-border bg-foreground py-6 text-background">
          <div className="flex animate-marquee whitespace-nowrap">
            <div className="flex cursor-default items-center gap-6 px-8 font-display text-2xl md:text-3xl">
              <span>Conveyors</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles h-5 w-5 text-primary-glow group-hover:animate-pulse"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx={4} cy={20} r={2} />
              </svg>
            </div>
            <div className="flex cursor-default items-center gap-6 px-8 font-display text-2xl md:text-3xl">
              <span>Robotics</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles h-5 w-5 text-primary-glow group-hover:animate-pulse"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx={4} cy={20} r={2} />
              </svg>
            </div>
            <div className="flex cursor-default items-center gap-6 px-8 font-display text-2xl md:text-3xl">
              <span>Vision Systems</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles h-5 w-5 text-primary-glow group-hover:animate-pulse"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx={4} cy={20} r={2} />
              </svg>
            </div>
            <div className="flex cursor-default items-center gap-6 px-8 font-display text-2xl md:text-3xl">
              <span>Pick & Place</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles h-5 w-5 text-primary-glow group-hover:animate-pulse"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx={4} cy={20} r={2} />
              </svg>
            </div>
            <div className="flex cursor-default items-center gap-6 px-8 font-display text-2xl md:text-3xl">
              <span>Turnkey Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles h-5 w-5 text-primary-glow group-hover:animate-pulse"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx={4} cy={20} r={2} />
              </svg>
            </div>
            <div className="flex cursor-default items-center gap-6 px-8 font-display text-2xl md:text-3xl">
              <span>EPIC Solutions</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles h-5 w-5 text-primary-glow group-hover:animate-pulse"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx={4} cy={20} r={2} />
              </svg>
            </div>
            <div className="flex cursor-default items-center gap-6 px-8 font-display text-2xl md:text-3xl">
              <span>Custom Machinery</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles h-5 w-5 text-primary-glow group-hover:animate-pulse"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx={4} cy={20} r={2} />
              </svg>
            </div>
            <div className="flex cursor-default items-center gap-6 px-8 font-display text-2xl md:text-3xl">
              <span>Material Handling</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles h-5 w-5 text-primary-glow group-hover:animate-pulse"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx={4} cy={20} r={2} />
              </svg>
            </div>
            <div className="flex cursor-default items-center gap-6 px-8 font-display text-2xl md:text-3xl">
              <span>Conveyors</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles h-5 w-5 text-primary-glow group-hover:animate-pulse"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx={4} cy={20} r={2} />
              </svg>
            </div>
            <div className="flex cursor-default items-center gap-6 px-8 font-display text-2xl md:text-3xl">
              <span>Robotics</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles h-5 w-5 text-primary-glow group-hover:animate-pulse"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx={4} cy={20} r={2} />
              </svg>
            </div>
            <div className="flex cursor-default items-center gap-6 px-8 font-display text-2xl md:text-3xl">
              <span>Vision Systems</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles h-5 w-5 text-primary-glow group-hover:animate-pulse"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx={4} cy={20} r={2} />
              </svg>
            </div>
            <div className="flex cursor-default items-center gap-6 px-8 font-display text-2xl md:text-3xl">
              <span>Pick & Place</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles h-5 w-5 text-primary-glow group-hover:animate-pulse"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx={4} cy={20} r={2} />
              </svg>
            </div>
            <div className="flex cursor-default items-center gap-6 px-8 font-display text-2xl md:text-3xl">
              <span>Turnkey Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles h-5 w-5 text-primary-glow group-hover:animate-pulse"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx={4} cy={20} r={2} />
              </svg>
            </div>
            <div className="flex cursor-default items-center gap-6 px-8 font-display text-2xl md:text-3xl">
              <span>EPIC Solutions</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles h-5 w-5 text-primary-glow group-hover:animate-pulse"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx={4} cy={20} r={2} />
              </svg>
            </div>
            <div className="flex cursor-default items-center gap-6 px-8 font-display text-2xl md:text-3xl">
              <span>Custom Machinery</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles h-5 w-5 text-primary-glow group-hover:animate-pulse"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx={4} cy={20} r={2} />
              </svg>
            </div>
            <div className="flex cursor-default items-center gap-6 px-8 font-display text-2xl md:text-3xl">
              <span>Material Handling</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles h-5 w-5 text-primary-glow group-hover:animate-pulse"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx={4} cy={20} r={2} />
              </svg>
            </div>
          </div>
        </div>
        <section
          id="about"
          className="bg-background px-5 py-20 sm:px-6 md:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <div>
              <div
                className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary"
              >
                Who We Are
              </div>
              <h2
                className="text-3xl font-bold leading-tight sm:text-4xl md:text-6xl"
              >
                A rapidly growing <span className="text-gradient">engineering & automation</span> company.
              </h2>
              <p
                className="mt-6 text-lg leading-relaxed text-muted-foreground"
              >
                Probity Autosystem Pvt Ltd is a leading industrial automation company specializing in turnkey manufacturing automation solutions for automotive, EV, engineering, electronics, and process industries. We design, manufacture, install, and commission advanced automation systems that improve productivity, quality, safety, and traceability.
              </p>
              <div
                className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                <div className="group flex cursor-default items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check h-4 w-4 flex-shrink-0 text-primary transition-transform duration-300 group-hover:scale-125"
                    aria-hidden="true"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span className="transition-all duration-300 group-hover:font-medium">
                    Strong design & engineering team
                  </span>
                </div>
                <div className="group flex cursor-default items-center gap-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check h-4 w-4 flex-shrink-0 text-primary transition-transform duration-300 group-hover:scale-125" aria-hidden="true"><circle cx={12} cy={12} r={10} /><path d="m9 12 2 2 4-4" /></svg>
                  <span className="transition-all duration-300 group-hover:font-medium">
                    Customized solutions as per client requirements
                  </span>
                </div>
                <div className="group flex cursor-default items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check h-4 w-4 flex-shrink-0 text-primary transition-transform duration-300 group-hover:scale-125"
                    aria-hidden="true"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span className="transition-all duration-300 group-hover:font-medium">
                    Focus on quality, precision & reliability
                  </span>
                </div>
                <div className="group flex cursor-default items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check h-4 w-4 flex-shrink-0 text-primary transition-transform duration-300 group-hover:scale-125"
                    aria-hidden="true"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span className="transition-all duration-300 group-hover:font-medium">
                    Competitive and cost-effective solutions
                  </span>
                </div>
                <div className="group flex cursor-default items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check h-4 w-4 flex-shrink-0 text-primary transition-transform duration-300 group-hover:scale-125"
                    aria-hidden="true"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span className="transition-all duration-300 group-hover:font-medium">
                    On-time delivery with after-sales support
                  </span>
                </div>
                <div className="group flex cursor-default items-center gap-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check h-4 w-4 flex-shrink-0 text-primary transition-transform duration-300 group-hover:scale-125" aria-hidden="true"><circle cx={12} cy={12} r={10} /><path d="m9 12 2 2 4-4" /></svg>
                  <span className="transition-all duration-300 group-hover:font-medium">
                    Continuous innovation & technology upgrade
                  </span>
                </div>
              </div>
            </div>
            <div
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-hero p-1 shadow-elegant">
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-foreground">
                  <div className="grid-pattern absolute inset-0 opacity-20" />
                  <video
                    src="/videos/project_video_1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-background/10 p-4 backdrop-blur">
                    <div className="text-xs uppercase tracking-widest text-white/60">
                      Engineered in
                    </div>
                    <div className="font-display text-xl font-bold text-white sm:text-2xl">
                      Pune, India
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -top-4 h-24 w-24 animate-float rounded-full bg-gradient-teal opacity-80 blur-2xl" />
            </div>
          </div>
        </section>

        {/* ── COMPANY HIGHLIGHTS (GRAPHICAL COUNTERS) ── */}
        <section id="company-highlights" className="relative overflow-hidden bg-secondary/40 px-5 py-20 sm:px-6 md:py-32">
          <div className="bg-gradient-mesh absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-16 text-center sm:mb-20">
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)' }}>Company Highlights</div>
              <h2 className="text-4xl font-extrabold sm:text-5xl md:text-6xl" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: '1.15' }}>
                Trusted by Industry, <span className="text-gradient">Powered by Numbers</span>
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-muted-foreground" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.25rem)' }}>
                A snapshot of our scale, experience, and the trust our customers place in us.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 sm:gap-7">
              {[
                { value: "2018", label: "Established", sub: "Year of inception", span: "lg:col-span-2" },
                { value: "Pune", label: "Headquarters", sub: "Maharashtra, India", span: "lg:col-span-2" },
                { value: "50+", label: "Employees", sub: "Skilled workforce", span: "lg:col-span-1" },
                { value: "300+", label: "Projects Delivered", sub: "Across industries", span: "lg:col-span-1" },
                { value: "Pan India", label: "Service Coverage", sub: "Nationwide support", span: "lg:col-span-2 lg:col-start-2" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-3xl border border-border bg-background p-8 text-center shadow-card transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:border-primary hover:shadow-elegant sm:p-10 lg:p-12 ${item.span}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/15 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/40" />
                  <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/30" />
                  <div className="relative flex h-full min-h-[180px] flex-col items-center justify-center">
                    <div
                      className="font-display font-black leading-none text-gradient transition-transform duration-300 group-hover:scale-110"
                      style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)' }}
                    >
                      <AnimatedCounter value={item.value} />
                    </div>
                    <div
                      className="mt-5 font-bold uppercase tracking-widest text-primary"
                      style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)' }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="mt-3 text-muted-foreground font-medium"
                      style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1rem)' }}
                    >
                      {item.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ── WHAT WE DO SECTION ── */}
        <section id="what-we-do" className="relative overflow-hidden bg-background px-5 py-20 sm:px-6 md:py-32">
          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">What We Do</div>
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                  We design & manufacture <span className="text-gradient">special purpose advance machines</span> and turnkey projects.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  We deliver customized automation solutions tailored to each client’s production requirements.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all duration-300 hover:bg-primary-glow">
                    Get Consultation
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-foreground p-6 sm:p-10 shadow-glow text-background">
                <h3 className="mb-6 font-display text-xl font-bold text-background uppercase tracking-wider">Our Core Solutions</h3>
                <div className="space-y-4">
                  {[
                    "Special Purpose Machines (SPM)",
                    "Turnkey Automation & EPIC Projects",
                    "Material Handling Systems",
                    "Industrial Conveyors (All Types)",
                    "Pick & Place Automation Systems",
                    "Robotic Integration (Delta, SCARA, 4-axis, 6-axis)",
                    "Machine Vision & Inspection Systems"
                  ].map((sol, i) => (
                    <div key={i} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-background/10 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-background/20">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-teal text-white font-bold text-sm">
                        {i + 1}
                      </div>
                      <span className="text-sm font-bold text-background" dangerouslySetInnerHTML={{ __html: sol }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="vision"
          className="relative overflow-hidden bg-secondary/40 px-5 py-20 sm:px-6 md:py-32"
        >
          <div className="bg-gradient-mesh absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-7xl">
            <div
              className="mb-20 text-center"
            >
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                Future Vision
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">
                Vision & <span className="text-gradient">Mission</span>
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div
                className="group relative cursor-default rounded-3xl border border-border bg-background p-6 shadow-card transition-all duration-300 hover:shadow-elegant sm:p-8 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-teal shadow-glow sm:h-16 sm:w-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-rocket h-7 w-7 text-primary-foreground"
                    aria-hidden="true"
                  >
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" />
                    <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />
                  </svg>
                </div>
                <div className="mb-2 text-xs uppercase tracking-widest text-primary transition-all duration-300 group-hover:tracking-[0.2em]">
                  Vision
                </div>
                <h3 className="mb-4 text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-primary sm:text-2xl md:text-3xl">
                  India's preferred automation solution provider for smart manufacturing and Industry 4.0 transformation.
                </h3>
                <p className="leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                  To become India's preferred automation solution provider for smart manufacturing and Industry 4.0 transformation.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 rounded-b-3xl bg-gradient-teal transition-transform duration-500 group-hover:scale-x-100" />
              </div>
              <div
                className="group relative cursor-default rounded-3xl border border-border bg-background p-6 shadow-card transition-all duration-300 hover:shadow-elegant sm:p-8 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-teal shadow-glow sm:h-16 sm:w-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-target h-7 w-7 text-primary-foreground"
                    aria-hidden="true"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <circle cx={12} cy={12} r={6} />
                    <circle cx={12} cy={12} r={2} />
                  </svg>
                </div>
                <div className="mb-2 text-xs uppercase tracking-widest text-primary transition-all duration-300 group-hover:tracking-[0.2em]">
                  Mission
                </div>
                <h3 className="mb-4 text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-primary sm:text-2xl md:text-3xl">
                  Innovative, reliable and cost-effective automation that elevates manufacturing excellence.
                </h3>
                <p className="leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                  Deliver innovative, reliable, and cost-effective automation solutions that enhance manufacturing excellence.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 rounded-b-3xl bg-gradient-teal transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </div>
          </div>
        </section>
        <section
          id="products"
          className="bg-background px-5 py-20 sm:px-6 md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div
              className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            >
              <div>
                <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                  Products & Solutions
                </div>
                <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
                  We design & manufacture <span className="text-gradient">special purpose machines</span> & turnkey projects.
                </h2>
              </div>
              <p className="max-w-md text-muted-foreground">
                From single-station conveyors to full turnkey robotic lines
                engineered to your unique specifications.
              </p>
            </div>
            <div
              className="mb-16"
              style={{ display: "grid", gap: "2rem" }}
            >
              {productVideoGroups.map((group) => {
                const categorySlideIndex = getProductCategorySlideIndex(group.id);
                const categorySliderLayout = productSliderLayouts[group.id] ?? {};
                const categorySliderOffset = categorySliderLayout.offset ?? 0;
                const categorySliderSidePadding = categorySliderLayout.sidePadding ?? 0;
                const hasMultipleSlides = group.slideCount > 1;

                return (
                  <div key={group.id} className="w-full min-w-0">
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end md:justify-between">
                      <div>
                        <h3 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
                          {group.category}
                        </h3>
                      </div>
                      <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                        Category-specific product videos and project previews.
                      </p>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-3xl py-3 sm:py-6">
                      {hasMultipleSlides && (
                        <div className="pointer-events-none absolute inset-y-0 left-2 z-20 flex items-center sm:left-4">
                          <button
                            type="button"
                            aria-label={`Show previous ${group.category} product slide`}
                            onClick={() => showPreviousProductSlide(group)}
                            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 bg-foreground/62 text-white backdrop-blur-md transition-colors duration-300 hover:border-primary-glow hover:bg-primary hover:text-primary-foreground sm:h-12 sm:w-12"
                            tabIndex={0}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-arrow-left h-4 w-4"
                              aria-hidden="true"
                            >
                              <path d="m12 19-7-7 7-7" />
                              <path d="M19 12H5" />
                            </svg>
                          </button>
                        </div>
                      )}
                      {hasMultipleSlides && (
                        <div className="pointer-events-none absolute inset-y-0 right-2 z-20 flex items-center sm:right-4">
                          <button
                            type="button"
                            aria-label={`Show next ${group.category} product slide`}
                            onClick={() => showNextProductSlide(group)}
                            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 bg-foreground/62 text-white backdrop-blur-md transition-colors duration-300 hover:border-primary-glow hover:bg-primary hover:text-primary-foreground sm:h-12 sm:w-12"
                            tabIndex={0}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-arrow-right h-4 w-4"
                              aria-hidden="true"
                            >
                              <path d="M5 12h14" />
                              <path d="m12 5 7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      )}
                      <div
                        className="flex gap-3 sm:gap-6 will-change-transform"
                        ref={(node) => {
                          if (node) {
                            productSliderTrackRefs.current[group.id] = node;
                          } else {
                            delete productSliderTrackRefs.current[group.id];
                          }
                        }}
                        style={{
                          paddingInline: `${categorySliderSidePadding}px`,
                          transform: `translate3d(${categorySliderOffset}px, 0, 0)`,
                          transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                        }}
                      >
                        {group.sliderSlides.map((slide, index) => (
                          <article
                            key={`${group.id}-${slide.title}-${index}`}
                            aria-hidden={categorySlideIndex !== index}
                            data-product-slide="true"
                            className="group relative h-[21rem] w-[16.5rem] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-black sm:h-[25rem] sm:w-[31rem] lg:w-[36rem] cursor-pointer"
                          >
                            <img
                              alt={slide.title}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full rounded-[inherit] object-cover transition-[transform,filter,opacity] duration-500 sm:group-hover:scale-[1.03] sm:group-hover:brightness-[0.56] sm:group-hover:saturate-[1.08] "
                              src={slide.thumbnail}
                              style={{ objectPosition: "center center" }}
                            />
                            {slide.videoUrl ? (
                              <button
                                type="button"
                                onClick={() => setActiveVideoSlide(slide)}
                                aria-label={`Open ${slide.title} video`}
                                className="absolute inset-0 z-10"
                              >
                                <span className="sr-only">Open {slide.title} video</span>
                              </button>
                            ) : (
                              <button
                                type="button"
                                onClick={() => openGalleryForSlide(slide)}
                                aria-label={`Open ${slide.title} image gallery`}
                                className="absolute inset-0 z-10"
                              >
                                <span className="sr-only">Open {slide.title} image gallery</span>
                              </button>
                            )}
                            <div className="absolute inset-0 rounded-[inherit] bg-gradient-teal transition-opacity duration-500 sm:opacity-0 sm:group-hover:opacity-80 opacity-0" />
                            <div className="absolute inset-0 rounded-[inherit] bg-black/20 transition-opacity duration-500 sm:opacity-100 sm:group-hover:opacity-10 opacity-100" />
                            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition-all duration-500 sm:group-hover:bg-primary/50 " />
                            {slide.category && (
                              <div className="absolute left-0 top-0 rounded-tl-3xl rounded-br-2xl border-r border-b border-white/10 bg-black/40 px-4 py-3 backdrop-blur-sm transition-colors duration-300 sm:group-hover:border-primary-glow/30 sm:group-hover:bg-black/20 ">
                                <div className="text-[10px] uppercase tracking-[0.3em] text-primary-glow">
                                  {slide.category}
                                </div>
                              </div>
                            )}
                            {slide.videoUrl ? (
                              <div className="pointer-events-none absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 bg-foreground/62 text-white backdrop-blur-md transition-colors duration-300 sm:h-12 sm:w-12">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="lucide lucide-play h-4 w-4"
                                  aria-hidden="true"
                                >
                                  <polygon points="6 3 20 12 6 21 6 3" />
                                </svg>
                              </div>
                            ) : (
                              <div className="pointer-events-none absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 bg-foreground/62 text-white backdrop-blur-md transition-colors duration-300 sm:h-12 sm:w-12">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="lucide lucide-eye h-4 w-4"
                                  aria-hidden="true"
                                >
                                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </div>
                            )}
                            <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-black via-black/28 to-transparent transition-opacity duration-300 sm:opacity-75 sm:group-hover:opacity-100 opacity-75" />
                            <div className="absolute inset-x-0 bottom-0 rounded-b-3xl border-t border-white/10 bg-black/48 px-4 py-4 backdrop-blur-sm transition-all duration-300 sm:group-hover:border-primary-glow/30 sm:group-hover:bg-black/32 sm:px-6 sm:py-5 ">
                              <div className="max-w-xl">
                                {slide.category && (
                                  <div className="text-[10px] uppercase tracking-[0.28em] text-primary-glow">
                                    {slide.category}
                                  </div>
                                )}
                                <h3 className="mt-2 font-display text-xl font-bold text-white transition-colors duration-300 sm:text-[2rem] sm:group-hover:text-primary-glow">
                                  {slide.title}
                                </h3>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mb-16">
              <div
                className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
              >
                <div>
                  <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
                    Project Gallery
                  </div>
                  <h3 className="max-w-2xl font-display text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                    Engineered systems in{" "}
                    <span className="text-gradient">
                      real production frames
                    </span>
                    .
                  </h3>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Browse our work across Robotics, Conveyors, Warehouse, Assembly Lines and SPM projects. Open any category to view its complete image set.
                </p>
              </div>
              <div className="mb-6 flex flex-wrap gap-2">
                {[
                  { label: "All", match: null },
                  { label: "Robotics Projects", match: ["Robotics Machine tending"] },
                  { label: "Conveyor Projects", match: ["Material Handling & Gantry", "Material Mixing & Handling equipment"] },
                  { label: "Assembly Lines", match: ["Assembly Line Automation"] },
                  { label: "SPM Projects", match: ["SPM"] },
                  { label: "Traceability & Gluing", match: ["Traceability & Data System", "Gluing & Spraying Automation", "Other Projects"] },
                ].map((cat, i) => {
                  const isActive = activeProjectFilter === cat.label;
                  return (
                    <button
                      key={i}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveProjectFilter(cat.label)}
                      className={
                        "rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 " +
                        (isActive
                          ? "border-primary bg-primary text-primary-foreground shadow-glow"
                          : "border-border bg-secondary/30 text-foreground hover:border-primary/40 hover:bg-primary/10 hover:text-primary")
                      }
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {(() => {
                  const filterMap = [
                    { label: "Robotics Projects", match: ["Robotics Machine tending"] },
                    { label: "Conveyor Projects", match: ["Material Handling & Gantry", "Material Mixing & Handling equipment"] },
                    { label: "Assembly Lines", match: ["Assembly Line Automation"] },
                    { label: "SPM Projects", match: ["SPM"] },
                    { label: "Traceability & Gluing", match: ["Traceability & Data System", "Gluing & Spraying Automation", "Other Projects"] },
                  ];
                  const activeFilter = filterMap.find((f) => f.label === activeProjectFilter);
                  const visibleGroups = activeFilter
                    ? productImageGroups.filter((g) => activeFilter.match.includes(g.category))
                    : productImageGroups;
                  if (visibleGroups.length === 0) {
                    return (
                      <div className="col-span-full rounded-3xl border border-dashed border-border bg-secondary/20 p-10 text-center text-sm text-muted-foreground">
                        No projects in this category yet — please check back soon.
                      </div>
                    );
                  }
                  return visibleGroups.map((group) => (
                    <article
                      key={group.id}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-foreground"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden rounded-[inherit]">
                        <img
                          alt={`${group.category} product category preview`}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full rounded-[inherit] object-cover transition-[transform,filter] duration-500 group-hover:scale-[1.04] group-hover:brightness-[0.6]"
                          src={group.previewImage.src}
                          style={{ objectPosition: "center center" }}
                        />
                        <div className="absolute inset-0 bg-gradient-teal opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent" />
                        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-all duration-500 group-hover:bg-primary/40" />
                        <div className="absolute left-0 top-0 border-r border-b border-white/10 bg-black/38 px-4 py-3 backdrop-blur-sm transition-colors duration-300 group-hover:border-primary-glow/30 group-hover:bg-black/20">
                          <div className="text-[10px] uppercase tracking-[0.28em] text-primary-glow">
                            {group.category}
                          </div>
                        </div>
                        <div className="absolute right-0 top-0 border-l border-b border-white/10 bg-black/38 px-4 py-3 backdrop-blur-sm transition-colors duration-300 group-hover:border-primary-glow/30 group-hover:bg-black/20">
                          <div className="text-[10px] uppercase tracking-[0.2em] text-white/80">
                            {group.imageCount} {group.imageCount === 1 ? "image" : "images"}
                          </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/42 px-4 py-4 backdrop-blur-sm transition-all duration-300 group-hover:border-primary-glow/30 group-hover:bg-black/28 sm:px-5">
                          <div className="text-[10px] uppercase tracking-[0.24em] text-primary-glow">
                            Preview: {group.previewImage.title}
                          </div>
                          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center md:justify-between">
                            <h4 className="font-display text-lg font-bold text-white transition-colors duration-300 group-hover:text-primary-glow sm:text-xl">
                              {group.category}
                            </h4>
                            <button
                              type="button"
                              onClick={() => openGalleryGroup(group)}
                              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:border-primary-glow hover:bg-primary hover:text-primary-foreground sm:w-auto"
                              aria-label={`Open ${group.category} product image gallery`}
                            >
                              View more
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-arrow-right h-3.5 w-3.5"
                                aria-hidden="true"
                              >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ));
                })()}
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div
                className="group relative overflow-hidden rounded-3xl bg-foreground p-6 text-background sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-teal opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition-all group-hover:bg-primary/40" />
                <div className="relative flex flex-col h-full">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-background/10 backdrop-blur transition-all duration-300 group-hover:bg-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-boxes h-6 w-6 text-primary-glow transition-colors duration-300 group-hover:text-white"
                      aria-hidden="true"
                    >
                      <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
                      <path d="m7 16.5-4.74-2.85" />
                      <path d="m7 16.5 5-3" />
                      <path d="M7 16.5v5.17" />
                      <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
                      <path d="m17 16.5-5-3" />
                      <path d="m17 16.5 4.74-2.85" />
                      <path d="M17 16.5v5.17" />
                      <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
                      <path d="M12 8 7.26 5.15" />
                      <path d="m12 8 4.74-2.85" />
                      <path d="M12 13.5V8" />
                    </svg>
                  </div>
                  <h3 className="mb-3 font-display text-2xl font-bold transition-colors duration-300 group-hover:text-primary-glow">
                    Conveyors
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-background/70 transition-colors duration-300 group-hover:text-background/90">
                    Free flow, flat belt, mesh, roller, plastic modular,
                    backlit, telescopic, magnetic, vibratory and more.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-background/10 px-3 py-1 text-xs backdrop-blur transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/20">
                      Free Flow Chain
                    </span>
                    <span className="rounded-full border border-white/10 bg-background/10 px-3 py-1 text-xs backdrop-blur transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/20">
                      Flat Belt
                    </span>
                    <span className="rounded-full border border-white/10 bg-background/10 px-3 py-1 text-xs backdrop-blur transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/20">
                      Roller
                    </span>
                    <span className="rounded-full border border-white/10 bg-background/10 px-3 py-1 text-xs backdrop-blur transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/20">
                      Modular
                    </span>
                    <span className="rounded-full border border-white/10 bg-background/10 px-3 py-1 text-xs backdrop-blur transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/20">
                      Magnetic
                    </span>
                    <span className="rounded-full border border-white/10 bg-background/10 px-3 py-1 text-xs backdrop-blur transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/20">
                      Telescopic
                    </span>
                  </div>
                  <div onClick={() => openCatalog('conveyors')} className="mt-8 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-primary-glow group-hover:text-white">
                    {activeCatalogTab === 'conveyors' ? 'Hide Details' : 'Learn more'}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="group relative overflow-hidden rounded-3xl bg-foreground p-6 text-background sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-teal opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition-all group-hover:bg-primary/40" />
                <div className="relative flex flex-col h-full">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-background/10 backdrop-blur transition-all duration-300 group-hover:bg-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-bot h-6 w-6 text-primary-glow transition-colors duration-300 group-hover:text-white"
                      aria-hidden="true"
                    >
                      <path d="M12 8V4H8" />
                      <rect width={16} height={12} x={4} y={8} rx={2} />
                      <path d="M2 14h2" />
                      <path d="M20 14h2" />
                      <path d="M15 13v2" />
                      <path d="M9 13v2" />
                    </svg>
                  </div>
                  <h3 className="mb-3 font-display text-2xl font-bold transition-colors duration-300 group-hover:text-primary-glow">
                    Pick & Place / Robotics
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-background/70 transition-colors duration-300 group-hover:text-background/90">
                    Pneumatic gantry systems and robotics. Delta, SCARA, 6-axis
                    and 4-axis robots as turnkey projects.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-background/10 px-3 py-1 text-xs backdrop-blur transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/20">
                      Delta Robot
                    </span>
                    <span className="rounded-full border border-white/10 bg-background/10 px-3 py-1 text-xs backdrop-blur transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/20">
                      Articulated
                    </span>
                    <span className="rounded-full border border-white/10 bg-background/10 px-3 py-1 text-xs backdrop-blur transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/20">
                      Gantry
                    </span>
                    <span className="rounded-full border border-white/10 bg-background/10 px-3 py-1 text-xs backdrop-blur transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/20">
                      SCARA
                    </span>
                    <span className="rounded-full border border-white/10 bg-background/10 px-3 py-1 text-xs backdrop-blur transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/20">
                      Pneumatic
                    </span>
                    <span className="rounded-full border border-white/10 bg-background/10 px-3 py-1 text-xs backdrop-blur transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/20">
                      Servo
                    </span>
                  </div>
                  <div onClick={() => openCatalog('robotics')} className="mt-8 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-primary-glow group-hover:text-white">
                    {activeCatalogTab === 'robotics' ? 'Hide Details' : 'Learn more'}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="group relative overflow-hidden rounded-3xl bg-foreground p-6 text-background sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-teal opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition-all group-hover:bg-primary/40" />
                <div className="relative flex flex-col h-full">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-background/10 backdrop-blur transition-all duration-300 group-hover:bg-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-eye h-6 w-6 text-primary-glow transition-colors duration-300 group-hover:text-white"
                      aria-hidden="true"
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                  </div>
                  <h3 className="mb-3 font-display text-2xl font-bold transition-colors duration-300 group-hover:text-primary-glow">
                    Vision Systems
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-background/70 transition-colors duration-300 group-hover:text-background/90">
                    Smart vision for critical applications. Fault detection,
                    dimension measurement and defect inspection.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-background/10 px-3 py-1 text-xs backdrop-blur transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/20">
                      Part Presence
                    </span>
                    <span className="rounded-full border border-white/10 bg-background/10 px-3 py-1 text-xs backdrop-blur transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/20">
                      Dimension Measure
                    </span>
                    <span className="rounded-full border border-white/10 bg-background/10 px-3 py-1 text-xs backdrop-blur transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/20">
                      Defect Detect
                    </span>
                    <span className="rounded-full border border-white/10 bg-background/10 px-3 py-1 text-xs backdrop-blur transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/20">
                      AI Inspection
                    </span>
                  </div>
                  <div onClick={() => openCatalog('vision')} className="mt-8 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-primary-glow group-hover:text-white">
                    {activeCatalogTab === 'vision' ? 'Hide Details' : 'Learn more'}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>


            </div>



          </div>
        </section>
        {/* ── INDUSTRIES WE EMPOWER ── */}
        {/* ── CORE SOLUTIONS & SERVICES ── */}
        <section id="solutions" className="relative overflow-hidden bg-secondary/40 px-5 py-20 sm:px-6 md:py-32">
          <div className="bg-gradient-mesh absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Capabilities</div>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">Our Core <span className="text-gradient">Solutions & Services</span></h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Custom-engineered systems for the highest throughput, speed & accuracy across production lines.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Assembly Line Automation",
                  desc: "Custom-designed assembly line solutions for Automotive, FMCG, White Goods & Engineering sectors — built for speed, accuracy & scalability.",
                  icon: (
                    <>
                      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                      <path d="m2 12 10 5 10-5" />
                      <path d="m2 17 10 5 10-5" />
                    </>
                  )
                },
                {
                  title: "Advanced Welding Systems",
                  desc: "Manual & Robotic welding setups (TIG / MIG / Ultrasonic) with complete turnkey integration for precision manufacturing.",
                  icon: (
                    <>
                      <path d="m4 20 7-7" />
                      <path d="m8 16 4 4" />
                      <path d="m13 7 4 4" />
                      <path d="m15 5 4 4" />
                      <path d="M19 4h.01" />
                      <path d="M21 6h.01" />
                      <path d="M18 7h.01" />
                    </>
                  )
                },
                {
                  title: "Material Handling & Gantry",
                  desc: "Smart robotic handling, gantry systems & palletizing solutions to optimize production flow and reduce manual effort.",
                  icon: (
                    <>
                      <path d="M3 7h18" />
                      <path d="M6 7v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
                      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
                      <path d="M12 11v5" />
                      <path d="m9 13 3 3 3-3" />
                    </>
                  )
                },
                {
                  title: "Robotic Machine Tending",
                  desc: "End-to-end automation for machine loading/unloading, pouring operations & interlinking processes — improving efficiency & safety.",
                  icon: (
                    <>
                      <path d="M12 8V4H8" />
                      <rect width={16} height={12} x={4} y={8} rx={2} />
                      <path d="M2 14h2" />
                      <path d="M20 14h2" />
                      <path d="M15 13v2" />
                      <path d="M9 13v2" />
                    </>
                  )
                },
                {
                  title: "Traceability & Data Systems",
                  desc: "Complete production traceability with real-time data tracking, logging & quality control integration for zero-error manufacturing.",
                  icon: (
                    <>
                      <ellipse cx={12} cy={5} rx={8} ry={3} />
                      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
                      <path d="M9 17h6" />
                    </>
                  )
                },
                {
                  title: "Gluing & Spraying Automation",
                  desc: "High-precision robotic glue dispensing & spray coating solutions ensuring consistency and minimal wastage.",
                  icon: (
                    <>
                      <path d="M7 4h6" />
                      <path d="M9 4v4" />
                      <path d="M6 8h10v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z" />
                      <path d="M16 11h3" />
                      <path d="M18 8l2-2" />
                      <path d="M18 14l2 2" />
                    </>
                  )
                },
                {
                  title: "Special Purpose Machines (SPM)",
                  desc: "Custom-built machines for unique industrial needs — Assembly, Leak Testing, Forming, Punching & more.",
                  icon: (
                    <>
                      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.3a2 2 0 1 1-4 0V22a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H2a2 2 0 1 1 0-4h.3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L3.5 8A2 2 0 1 1 6.3 5.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V3.7a2 2 0 1 1 4 0V4a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 1 1 19.1 8l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.3a2 2 0 1 1 0 4h-.3a1.7 1.7 0 0 0-1.6 1Z" />
                    </>
                  )
                }
              ].map((sol, i) => (
                <div key={i} className="group relative cursor-default rounded-3xl border border-border bg-background p-6 shadow-card transition-all duration-300 hover:shadow-elegant hover:border-primary/30 sm:p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-teal shadow-glow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground" aria-hidden="true">
                      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                      <path d="m2 12 10 5 10-5" />
                      <path d="m2 17 10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-primary" dangerouslySetInnerHTML={{ __html: sol.title }} />
                  <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80" dangerouslySetInnerHTML={{ __html: sol.desc }} />
                  <div className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 rounded-b-3xl bg-gradient-teal transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="bg-background px-5 py-20 sm:px-6 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Industries</div>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">Industries We <span className="text-gradient">Empower</span></h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">End-to-end automation solutions across the most demanding industrial sectors.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: "Automotive (2W & 4W)", desc: "End-to-end automation solutions for automotive manufacturing, including assembly lines, material handling, welding, and inspection systems designed for high efficiency and precision." },
                { label: "FMCG & Packaging", desc: "High-speed automation systems for packaging, sorting, and product handling, ensuring faster throughput and consistent quality in mass production environments." },
                { label: "Electronics & White Goods", desc: "Precision-driven automation for electronics and appliance manufacturing, including assembly, testing, and inspection with high accuracy and reliability." },
                { label: "Heavy Industry & Construction", desc: "Robust and durable automation solutions built to handle heavy loads and harsh industrial environments, ensuring reliability and long-term performance." },
                { label: "Medical & Healthcare", desc: "Clean, accurate, and quality-focused automation systems for medical devices, inspection processes, and critical applications requiring high precision." },
                { label: "General Manufacturing", desc: "Customized special purpose machines (SPM) and turnkey automation solutions tailored to diverse industrial applications and production requirements." },
              ].map((ind, i) => (
                <div key={i} className="group cursor-default rounded-3xl border border-border bg-background p-6 shadow-card transition-all duration-300 hover:shadow-elegant hover:border-primary/30 sm:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-teal shadow-glow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground" aria-hidden="true"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" /><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" /><path d="M12 3v6" /></svg>
                  </div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">{ind.label}</div>
                  <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80" dangerouslySetInnerHTML={{ __html: ind.desc }} />
                  <div className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 rounded-b-3xl bg-gradient-teal transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR INFRASTRUCTURE ── */}
        <section id="facility" className="relative overflow-hidden bg-secondary/40 px-5 py-20 sm:px-6 md:py-32">
          <div className="bg-gradient-mesh absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Infrastructure</div>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">Our <span className="text-gradient">Infrastructure</span></h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Manufacturing capability that OEM customers can rely on — from design to dispatch, all under one roof.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Design Department", desc: "Dedicated mechanical, electrical and controls design teams using the latest CAD/CAE tools.", icon: "M2 12h2M20 12h2M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" },
                { title: "Mechanical Assembly Area", desc: "Spacious build floor for SPMs, conveyors and robotic cells with overhead cranes and jigs.", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
                { title: "Electrical Panel Shop", desc: "In-house panel design, wiring, PLC integration and FAT (Factory Acceptance Testing).", icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0h10m-10 0H5m10 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m10 0V9" },
                { title: "Testing Facility", desc: "Dedicated test bays for leak testing, run-time trials, vision validation and endurance tests.", icon: "M9 2H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM15 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0zM15 12h-2" },
                { title: "Quality Inspection Area", desc: "Calibrated instruments, gauges and check fixtures for zero-defect dispatch.", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
                { title: "Installation Team", desc: "Dedicated site installation & commissioning crew for pan-India deployment and on-site support.", icon: "M14 7h6v6M3 17h6v-4H3zM3 7l4-4 4 4M17 17l4 4M21 17l-4-4" },
              ].map((item, i) => (
                <div key={i} className="group relative cursor-default rounded-3xl border border-border bg-background p-6 shadow-card transition-all duration-300 hover:border-primary/40 hover:shadow-elegant sm:p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-teal shadow-glow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground" aria-hidden="true"><path d={item.icon} /></svg>
                  </div>
                  <h3 className="mb-2 text-lg font-bold leading-tight transition-colors duration-300 group-hover:text-primary sm:text-xl">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ENGINEERING CAPABILITIES ── */}
        <section id="engineering-capabilities" className="relative overflow-hidden bg-foreground px-5 py-20 text-background sm:px-6 md:py-28">
          <div className="grid-pattern absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-glow">Engineering Capabilities</div>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Tools, Software & <span className="text-gradient">Programming Expertise</span></h2>
              <p className="mx-auto mt-4 max-w-2xl text-background/60">Multi-platform engineering expertise — from mechanical CAD to multi-brand robot programming.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Mechanical Design",
                  software: ["SolidWorks", "AutoCAD", "Inventor"],
                  icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
                },
                {
                  title: "Electrical Design",
                  software: ["EPLAN", "AutoCAD Electrical"],
                  icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
                },
                {
                  title: "PLC Programming",
                  software: ["Siemens", "Mitsubishi", "Allen Bradley", "Delta"],
                  icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0h10m-10 0H5m10 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m10 0V9",
                },
                {
                  title: "Robot Programming",
                  software: ["ABB", "FANUC", "KUKA", "Yaskawa"],
                  icon: "M12 8V4H8 M4 8h16v12H4z M2 14h2 M20 14h2 M15 13v2 M9 13v2",
                },
              ].map((group, i) => (
                <div key={i} className="group flex flex-col h-full rounded-3xl border border-white/10 bg-background/5 p-6 backdrop-blur transition-all duration-300 hover:border-primary-glow/50 hover:bg-background/10 sm:p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-teal shadow-glow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground" aria-hidden="true"><path d={group.icon} /></svg>
                  </div>
                  <h3 className="mb-4 font-display text-lg font-bold transition-colors duration-300 group-hover:text-primary-glow">{group.title}</h3>
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-primary-glow">Software / Platforms</div>
                  <ul className="space-y-1.5">
                    {group.software.map((s, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-background/80 transition-colors duration-300 group-hover:text-background">
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-glow" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROBOTICS AUTOMATION SECTION ── */}
        <section id="robotics" className="bg-background px-5 py-20 sm:px-6 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Robotics Automation</div>
                <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
                  Robotic Cells for <span className="text-gradient">Every Industrial Need</span>
                </h2>
              </div>
              <p className="max-w-md text-muted-foreground">
                From pick & place to welding, machine tending and palletizing — turnkey robotic cells programmed and integrated in-house.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Robotic Pick & Place",
                  items: ["Bin Picking", "Component Handling", "Packaging"],
                  icon: "M12 8V4H8 M4 8h16v12H4z M2 14h2 M20 14h2 M15 13v2 M9 13v2",
                },
                {
                  title: "Robotic Welding Cells",
                  items: ["Spot Welding", "MIG Welding", "TIG Welding"],
                  icon: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z",
                },
                {
                  title: "Machine Tending",
                  items: ["CNC Loading", "Press Loading"],
                  icon: "M12 22V12M12 12L6.5 7M12 12l5.5-5",
                },
                {
                  title: "Palletizing Systems",
                  items: ["Box Stacking", "Finished Goods Handling"],
                  icon: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z M7 16.5l-4.74-2.85 M7 16.5 5-3 M7 16.5v5.17 M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
                },
              ].map((card, i) => (
                <div key={i} className="group flex flex-col h-full relative cursor-default overflow-hidden rounded-3xl border border-border bg-secondary/30 p-6 shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-elegant sm:p-7">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/30" />
                  <div className="relative flex flex-col h-full">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-teal shadow-glow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground" aria-hidden="true"><path d={card.icon} /></svg>
                    </div>
                    <h3 className="mb-4 font-display text-lg font-bold transition-colors duration-300 group-hover:text-primary sm:text-xl">{card.title}</h3>
                    <ul className="space-y-2">
                      {card.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary" aria-hidden="true"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONVEYOR SYSTEMS SECTION ── */}
        <section id="conveyor-systems" className="relative overflow-hidden bg-secondary/40 px-5 py-20 sm:px-6 md:py-32">
          <div className="bg-gradient-mesh absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Conveyor Systems</div>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">Complete Conveyor <span className="text-gradient">Product Portfolio</span></h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">One of our strongest product lines — engineered for assembly, warehouse, paint shop and heavy material transfer applications.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Free Flow Conveyor",
                  apps: ["Assembly Line", "Engine Assembly", "HVAC Assembly"],
                  icon: "M3 12h18M3 6h18M3 18h18",
                },
                {
                  title: "Slat Conveyor",
                  apps: ["Automobile Assembly", "Heavy Component Handling"],
                  icon: "M3 6h18v12H3z M3 9h18M3 12h18M3 15h18",
                },
                {
                  title: "Roller Conveyor",
                  apps: ["Warehouse", "Logistics"],
                  icon: "M2 12h20M6 8v8M12 8v8M18 8v8",
                },
                {
                  title: "Chain Conveyor",
                  apps: ["Heavy Material Transfer"],
                  icon: "M10.59 13.41L13.42 10.58M6.34 17.66l1.41-1.41M3 12h2M19 12h2M12 3v2M12 19v2",
                },
                {
                  title: "Overhead Conveyor",
                  apps: ["Paint Shop", "Material Movement"],
                  icon: "M3 17h18M3 13h18M5 17v4M19 17v4M5 9V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",
                },
                {
                  title: "Modular / Belt Conveyor",
                  apps: ["Packaging Lines", "Light-duty Assembly"],
                  icon: "M4 6h16v12H4z M4 12h16",
                },
              ].map((conv, i) => (
                <div key={i} className="group flex flex-col h-full relative cursor-default overflow-hidden rounded-3xl border border-border bg-background p-6 shadow-card transition-all duration-300 hover:border-primary/40 hover:shadow-elegant sm:p-7">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/30" />
                  <div className="relative flex flex-col h-full">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-teal shadow-glow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground" aria-hidden="true"><path d={conv.icon} /></svg>
                    </div>
                    <h3 className="mb-3 font-display text-xl font-bold transition-colors duration-300 group-hover:text-primary">{conv.title}</h3>
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-primary">Applications</div>
                    <ul className="space-y-1.5">
                      {conv.apps.map((a, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EV BATTERY PACK ASSEMBLY SOLUTIONS ── */}
        <section id="ev-battery" className="bg-background px-5 py-20 sm:px-6 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">EV Solutions</div>
                <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
                  EV Battery Pack <span className="text-gradient">Assembly Solutions</span>
                </h2>
              </div>
              <p className="max-w-md text-muted-foreground">
                End-to-end battery pack assembly lines — from cell sorting & stacking to laser welding, EOL testing and full traceability.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Cell Sorting & Stacking", desc: "High-speed cell grading, pairing and stacking with precision pick & place." },
                { title: "Laser Welding", desc: "Tab-to-busbar laser welding with vision-based quality verification." },
                { title: "Module & Pack Assembly", desc: "Mechanized module assembly with torque control and traceability logging." },
                { title: "EOL Testing & Aging", desc: "End-of-line testing, aging test setup, BMS flashing and pack validation." },
              ].map((item, i) => (
                <div key={i} className="group rounded-3xl border border-border bg-secondary/30 p-6 shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-elegant sm:p-7">
                  <div className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-primary">0{i + 1}</div>
                  <h3 className="mb-2 font-display text-lg font-bold transition-colors duration-300 group-hover:text-primary sm:text-xl">{item.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background p-6 sm:p-8">
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-primary">Why EV OEMs Choose Probity</div>
              <h3 className="mb-3 font-display text-xl font-bold sm:text-2xl">Full-pack assembly lines with integrated traceability, MES & inline EOL testing.</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">From cells to packs, our solutions are designed for high throughput, tight quality control and the unique safety demands of EV manufacturing.</p>
            </div>
          </div>
        </section>

        {/* ── WAREHOUSE AUTOMATION SECTION ── */}
        <section id="warehouse-automation" className="relative overflow-hidden bg-secondary/40 px-5 py-20 sm:px-6 md:py-32">
          <div className="bg-gradient-mesh absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Warehouse Automation</div>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">Smart <span className="text-gradient">Warehouse Automation</span></h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Modernize your warehouse with ASRS, AGV, AMR and a fully integrated inventory management platform.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "ASRS",
                  full: "Automatic Storage & Retrieval Systems",
                  desc: "High-density racking with stacker cranes for fast, accurate material storage and retrieval.",
                  icon: "M3 21V8l9-5 9 5v13M3 21h18M9 21V12h6v9",
                },
                {
                  title: "AGV",
                  full: "Automated Guided Vehicles",
                  desc: "Magnetic / laser-guided vehicles for repeatable, safe material movement on the shop floor.",
                  icon: "M3 16V8h18v8M3 16h18M7 20h10M9 12h6",
                },
                {
                  title: "AMR",
                  full: "Autonomous Mobile Robots",
                  desc: "SLAM-based mobile robots for flexible, dynamic routing in modern warehouses.",
                  icon: "M5 11h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zM9 11V7a3 3 0 0 1 6 0v4",
                },
                {
                  title: "Smart Warehouse",
                  full: "RFID • Barcode • Inventory",
                  desc: "End-to-end tracking with RFID, barcode and inventory management software.",
                  icon: "M3 3h18v6H3zM5 9v12h14V9M9 13h6",
                },
              ].map((w, i) => (
                <div key={i} className="group rounded-3xl border border-border bg-background p-6 shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-elegant sm:p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-teal shadow-glow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground" aria-hidden="true"><path d={w.icon} /></svg>
                  </div>
                  <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-primary">{w.full}</div>
                  <h3 className="mb-2 font-display text-xl font-bold transition-colors duration-300 group-hover:text-primary">{w.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRACEABILITY SYSTEMS SECTION ── */}
        <section id="traceability" className="bg-background px-5 py-20 sm:px-6 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Traceability Systems</div>
                <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
                  Complete <span className="text-gradient">Line Traceability</span>
                </h2>
                <p className="mt-4 max-w-2xl text-muted-foreground">OEMs depend on accurate, real-time traceability — we deliver the full stack: technologies, software and integration.</p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-border bg-secondary/30 p-6 shadow-card sm:p-8">
                <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Technologies</div>
                <h3 className="mb-6 font-display text-2xl font-bold sm:text-3xl">Identification & Marking</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {["RFID", "Barcode", "QR Code", "Laser Marking"].map((t, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-2xl border border-border bg-background p-3 transition-all duration-300 hover:border-primary/40">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-teal shadow-glow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground" aria-hidden="true"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                      </div>
                      <span className="text-sm font-semibold">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-border bg-secondary/30 p-6 shadow-card sm:p-8">
                <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Features</div>
                <h3 className="mb-6 font-display text-2xl font-bold sm:text-3xl">Tracking & Reporting</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {["Production Tracking", "Genealogy Tracking", "Quality Records", "Digital Work Instructions"].map((f, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-2xl border border-border bg-background p-3 transition-all duration-300 hover:border-primary/40">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-teal shadow-glow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="9 12 12 14 22 4" /></svg>
                      </div>
                      <span className="text-sm font-semibold">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SPECIAL PURPOSE MACHINES SECTION ── */}
        <section id="spm" className="relative overflow-hidden bg-secondary/40 px-5 py-20 sm:px-6 md:py-32">
          <div className="bg-gradient-mesh absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Special Purpose Machines</div>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">Engineered <span className="text-gradient">SPMs for Production</span></h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Custom-built special purpose machines tailored to your exact testing, pressing, marking, assembly and inspection needs.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Leak Testing Machines", desc: "Air / water / helium leak test stations with cycle-time data logging.", icon: "M12 2v6M5 12a7 7 0 0 1 14 0v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6z" },
                { title: "Pressing Machines", desc: "Pneumatic / servo pressing stations with force monitoring and SPC.", icon: "M12 2v20M2 12h20" },
                { title: "Marking Systems", desc: "Laser / dot-peen / ink-jet marking integrated with conveyor or robotic cell.", icon: "M12 19l7-7 3 3-7 7H12v-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" },
                { title: "Assembly Fixtures", desc: "Custom fixtures and gauges for manual and automated assembly lines.", icon: "M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z" },
                { title: "Vision Inspection Systems", desc: "Inline vision stations for part presence, dimension and defect inspection.", icon: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" },
                { title: "Gluing & Spraying", desc: "Automated gluing, dispensing and spraying systems with recipe control.", icon: "M9 11l3-9 3 9M9 11h6M9 11v10M15 11v10" },
              ].map((spm, i) => (
                <div key={i} className="group flex flex-col h-full relative cursor-default overflow-hidden rounded-3xl border border-border bg-background p-6 shadow-card transition-all duration-300 hover:border-primary/40 hover:shadow-elegant sm:p-7">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/30" />
                  <div className="relative flex flex-col h-full">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-teal shadow-glow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground" aria-hidden="true"><path d={spm.icon} /></svg>
                    </div>
                    <h3 className="mb-2 font-display text-lg font-bold transition-colors duration-300 group-hover:text-primary sm:text-xl">{spm.title}</h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{spm.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRY 4.0 SOLUTIONS SECTION ── */}
        <section id="industry-4" className="bg-background px-5 py-20 sm:px-6 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Industry 4.0</div>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">Industry 4.0 <span className="text-gradient">Solutions</span></h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Modern customers expect connected, data-driven manufacturing. We deliver the digital layer that brings your plant to life.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "OEE Monitoring", desc: "Real-time OEE dashboards for availability, performance and quality.", icon: "M3 3v18h18 M7 14l3-3 4 4 5-5" },
                { title: "Dashboard Reporting", desc: "Plant-wide live dashboards with KPIs, alerts and drill-down reports.", icon: "M3 3h7v9H3z M14 3h7v5h-7z M14 12h7v9h-7z M3 16h7v5H3z" },
                { title: "MES Integration", desc: "Manufacturing Execution System integration with line-level work order dispatch.", icon: "M4 6h16v4H4z M4 14h16v6H4z M8 6v12" },
                { title: "SCADA", desc: "Plant-wide SCADA for real-time visualization and control of every station.", icon: "M2 12h20 M12 2v20 M4.93 4.93l14.14 14.14 M19.07 4.93L4.93 19.07" },
                { title: "Remote Monitoring", desc: "Secure cloud-based remote monitoring and notifications for any line, anywhere.", icon: "M2 16h20 M2 12h20 M5 20h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" },
                { title: "Predictive Maintenance", desc: "AI-driven predictive maintenance to reduce unplanned downtime.", icon: "M12 2a10 10 0 1 0 10 10 M12 6v6l4 2" },
              ].map((it, i) => (
                <div key={i} className="group rounded-3xl border border-border bg-secondary/30 p-6 shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-elegant sm:p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-teal shadow-glow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground" aria-hidden="true"><path d={it.icon} /></svg>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold transition-colors duration-300 group-hover:text-primary sm:text-xl">{it.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS APPROACH ── */}
        <section id="process" className="bg-background px-5 py-20 sm:px-6 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Workflow</div>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">Our Process <span className="text-gradient">Approach</span></h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">End-to-End Workflow for Seamless Automation Delivery</p>
            </div>
            <div className="relative flex flex-col items-center gap-0 md:flex-row md:items-stretch">
              {[
                { step: "01", title: "Design & Simulation", sub: "Concept to virtual validation", desc: "Engineering concepts are modeled and simulated before any fabrication begins, ensuring zero rework and maximum accuracy." },
                { step: "02", title: "Electrical & Control", sub: "Smart system integration", desc: "PLC programming, panel assembly, sensor integration and full electrical wiring completed in-house by our specialists." },
                { step: "03", title: "Application", sub: "Execution, testing & deployment", desc: "On-site installation, commissioning, operator training and ongoing after-sales support for long-term performance." },
              ].map((p, i) => (
                <div key={i} className="group relative flex flex-1 flex-col items-center px-4 py-8 text-center md:px-8">
                  {i < 2 && <div className="absolute right-0 top-1/3 hidden h-px w-full max-w-[4rem] bg-gradient-to-r from-border to-primary/40 md:block" />}
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-teal text-2xl font-bold text-primary-foreground shadow-glow">{p.step}</div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary" dangerouslySetInnerHTML={{ __html: p.sub }} />
                  <h3 className="mb-3 text-xl font-bold leading-tight group-hover:text-primary" dangerouslySetInnerHTML={{ __html: p.title }} />
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MANUFACTURING ECOSYSTEM ── */}
        <section id="manufacturing" className="relative overflow-hidden bg-foreground px-5 py-20 text-background sm:px-6 md:py-32">
          <div className="grid-pattern absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-glow">Shop Floor</div>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">Our Manufacturing <span className="text-gradient">Ecosystem</span></h2>
              <p className="mx-auto mt-4 max-w-2xl text-background/60">Integrated Shop Floor Capabilities — built for precision, speed and reliability.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
              {[
                { title: "Assembly Unit", desc: "End-to-end assembly setup for precision build & seamless integration of components across all project types.", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
                { title: "Fabrication Division", desc: "Advanced welding & cutting capabilities including MIG, TIG & Arc processes for strong, durable structures.", icon: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5zM20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5zM3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14zM14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5zM15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5zM8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" },
                { title: "Tooling & Machining Center", desc: "Equipped with VMC, Lathe, Milling & precision tools to ensure high-quality component manufacturing.", icon: "M12 22V12M12 12L6.5 7M12 12l5.5-5" },
                { title: "Inspection Lab", desc: "Accurate measurement & validation using advanced instruments ensuring zero-defect output for every project.", icon: "M9 2H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM15 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0zM15 12h-2" },
                { title: "Control Panel Assembly", desc: "In-house PLC panel design, wiring & programming for complete automation control and smart integration.", icon: "M5 12h14M12 5v14" },
                { title: "Smart Storage System", desc: "Organized inventory management for tools & standard components ensuring zero downtime on the shop floor.", icon: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" },
              ].map((item, i) => (
                <div key={i} className="group relative flex h-full flex-col cursor-default rounded-2xl border border-white/10 bg-background/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-primary-glow/50 hover:bg-background/10 hover:shadow-elegant overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-5 h-10 w-10 text-primary-glow transition-all duration-300 group-hover:drop-shadow-[0_0_12px_oklch(0.68_0.11_215)]" aria-hidden="true"><path d={item.icon} /></svg>
                  <h3 className="mb-3 font-display text-xl font-bold text-white transition-colors duration-300 group-hover:text-primary-glow" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p className="flex-1 text-sm leading-relaxed text-background/60 transition-colors duration-300 group-hover:text-background/80" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              ))}
            </div>
            <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary-glow">Workflow Advantage</div>
              <div className="font-display text-lg font-bold text-white">Fabrication → Machining → Assembly → Quality Check → Dispatch</div>
              <p className="mt-3 text-sm text-background/60">Strong infrastructure. Smarter execution. Reliable automation solutions built to scale your business.</p>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE PROBITY (KEY STRENGTHS) ── */}
        <section id="why-us" className="relative overflow-hidden bg-secondary/40 px-5 py-20 sm:px-6 md:py-32">
          <div className="bg-gradient-mesh absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Why Choose Probity</div>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">Key <span className="text-gradient">Strengths</span></h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Eight reasons our customers choose us — and stay with us — project after project.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Turnkey Execution", desc: "Concept to commissioning — single-point ownership of the entire project.", icon: "M5 13l4 4L19 7" },
                { title: "In-House Design", desc: "Mechanical, electrical, controls and software — all under one roof.", icon: "M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z" },
                { title: "Manufacturing Facility", desc: "In-house fabrication, assembly and panel shop for tightest quality control.", icon: "M12 22V12M12 12L6.5 7M12 12l5.5-5" },
                { title: "Robotics Expertise", desc: "Multi-brand robot programming — ABB, FANUC, KUKA, Yaskawa.", icon: "M12 8V4H8 M4 8h16v12H4z M2 14h2 M20 14h2 M15 13v2 M9 13v2" },
                { title: "Industry 4.0 Solutions", desc: "MES, SCADA, OEE, dashboards and remote monitoring built-in.", icon: "M3 3v18h18 M7 14l3-3 4 4 5-5" },
                { title: "Pan India Support", desc: "Service network covering every major industrial hub in India.", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a14.5 14.5 0 0 1 0 20 M12 2a14.5 14.5 0 0 0 0 20" },
                { title: "Quick Response Team", desc: "Dedicated service engineers for fast on-site response and uptime.", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
                { title: "Experienced Engineers", desc: "A team of 50+ engineers with deep domain expertise across industries.", icon: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" },
              ].map((item, i) => (
                <div key={i} className="group flex flex-col h-full relative cursor-default overflow-hidden rounded-3xl border border-border bg-background p-6 shadow-card transition-all duration-300 hover:border-primary/40 hover:shadow-elegant sm:p-7">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/30" />
                  <div className="relative flex flex-col h-full">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-teal shadow-glow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground" aria-hidden="true"><path d={item.icon} /></svg>
                    </div>
                    <h3 className="mb-2 font-display text-lg font-bold transition-colors duration-300 group-hover:text-primary sm:text-xl">{item.title}</h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="relative overflow-hidden bg-foreground px-5 py-20 text-background sm:px-6 md:py-32">
          <div className="grid-pattern absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-7xl">
            <div
              className="mb-20 text-center"
            >
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-glow">
                Capabilities
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">
                Engineering <span className="text-gradient">Excellence</span>
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div
                className="group cursor-default rounded-2xl border border-white/10 bg-background/5 p-6 backdrop-blur transition-all duration-300 hover:border-primary-glow/50 hover:bg-background/10"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-factory mb-4 h-8 w-8 text-primary-glow transition-all duration-300 group-hover:drop-shadow-[0_0_10px_oklch(0.68_0.11_215)]"
                    aria-hidden="true"
                  >
                    <path d="M12 16h.01" />
                    <path d="M16 16h.01" />
                    <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
                    <path d="M8 16h.01" />
                  </svg>
                </div>
                <h3 className="mb-2 font-display text-lg font-bold transition-colors duration-300 group-hover:text-primary-glow">
                  Custom Design & Fabrication
                </h3>
                <p className="text-sm text-background/60 transition-colors duration-300 group-hover:text-background/80">
                  Tool room, machining, fitting and welding by our experienced craftsmen for precision builds.
                </p>
              </div>
              <div
                className="group cursor-default rounded-2xl border border-white/10 bg-background/5 p-6 backdrop-blur transition-all duration-300 hover:border-primary-glow/50 hover:bg-background/10"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-cpu mb-4 h-8 w-8 text-primary-glow transition-all duration-300 group-hover:drop-shadow-[0_0_10px_oklch(0.68_0.11_215)]"
                    aria-hidden="true"
                  >
                    <path d="M12 20v2" />
                    <path d="M12 2v2" />
                    <path d="M17 20v2" />
                    <path d="M17 2v2" />
                    <path d="M2 12h2" />
                    <path d="M2 17h2" />
                    <path d="M2 7h2" />
                    <path d="M20 12h2" />
                    <path d="M20 17h2" />
                    <path d="M20 7h2" />
                    <path d="M7 20v2" />
                    <path d="M7 2v2" />
                    <rect x={4} y={4} width={16} height={16} rx={2} />
                    <rect x={8} y={8} width={8} height={8} rx={1} />
                  </svg>
                </div>
                <h3 className="mb-2 font-display text-lg font-bold transition-colors duration-300 group-hover:text-primary-glow">
                  PLC, HMI & Control Systems
                </h3>
                <p className="text-sm text-background/60 transition-colors duration-300 group-hover:text-background/80">
                  PLC, HMI, servo and pneumatic integration for complete, flawless automation control.
                </p>
              </div>
              <div
                className="group cursor-default rounded-2xl border border-white/10 bg-background/5 p-6 backdrop-blur transition-all duration-300 hover:border-primary-glow/50 hover:bg-background/10"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-zap mb-4 h-8 w-8 text-primary-glow transition-all duration-300 group-hover:drop-shadow-[0_0_10px_oklch(0.68_0.11_215)]"
                    aria-hidden="true"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-display text-lg font-bold transition-colors duration-300 group-hover:text-primary-glow">
                  Energy-Efficient System Design
                </h3>
                <p className="text-sm text-background/60 transition-colors duration-300 group-hover:text-background/80">
                  Solutions engineered to reduce energy footprint while maximizing throughput and output.
                </p>
              </div>
              <div
                className="group cursor-default rounded-2xl border border-white/10 bg-background/5 p-6 backdrop-blur transition-all duration-300 hover:border-primary-glow/50 hover:bg-background/10"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check mb-4 h-8 w-8 text-primary-glow transition-all duration-300 group-hover:drop-shadow-[0_0_10px_oklch(0.68_0.11_215)]"
                    aria-hidden="true"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="mb-2 font-display text-lg font-bold transition-colors duration-300 group-hover:text-primary-glow">
                  End-to-End Project Execution
                </h3>
                <p className="text-sm text-background/60 transition-colors duration-300 group-hover:text-background/80">
                  We ensure every system is built with precision, reliability, and long-term performance in mind.
                </p>
              </div>


            </div>
          </div>
        </section>
        {/* ── CUSTOMER BASE MARQUEE ── */}
        <section id="customers" className="relative overflow-hidden border-y border-white/5 bg-background py-20 sm:py-24">
          <div className="bg-gradient-mesh pointer-events-none absolute inset-0 opacity-30" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
          />
          <div className="relative mx-auto mb-14 max-w-7xl px-5 text-center sm:px-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_currentColor]" />
              Our Customer Base
            </div>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Trusted by <span className="text-gradient">Industry Leaders</span> across India
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              A growing family of OEMs and manufacturers who rely on us to deliver automation that just works — project after project.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                150+ Clients Served
              </span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" /></svg>
                15+ Industries
              </span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 7h-3a2 2 0 0 1-2-2V2" /><path d="M9 18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M22 18a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2Z" /></svg>
                Pan-India Presence
              </span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6">
            <div
              className="gap-2 sm:gap-3 lg:gap-4 transition-all duration-700 ease-in-out"
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${customerCols}, minmax(0, 1fr))`,
              }}
            >
              {[
                "Screenshot 2026-06-14 141914.png",
                "Screenshot 2026-06-14 141919.png",
                "Screenshot 2026-06-14 141922.png",
                "Screenshot 2026-06-14 141926.png",
                "Screenshot 2026-06-14 141930.png",
                "Screenshot 2026-06-14 141937.png",
                "Screenshot 2026-06-14 141942.png",
                "Screenshot 2026-06-14 141946.png",
                "Screenshot 2026-06-14 141949.png",
                "Screenshot 2026-06-14 141953.png",
                "Screenshot 2026-06-14 141958.png",
                "Screenshot 2026-06-14 142007.png",
                "Screenshot 2026-06-14 142011.png",
                "Screenshot 2026-06-14 142020.png",
                "Screenshot 2026-06-14 142027.png",
                "Screenshot 2026-06-14 142031.png",
                "Screenshot 2026-06-14 142036.png",
                "Screenshot 2026-06-14 142041.png",
                "Screenshot 2026-06-14 142046.png",
                "Screenshot 2026-06-14 142050.png",
                "Screenshot 2026-06-14 142055.png",
                "Screenshot 2026-06-14 142100.png",
                "Screenshot 2026-06-14 142108.png",
                "Screenshot 2026-06-14 142120.png",
                "Screenshot 2026-06-14 142124.png"
              ]
                .slice(0, showAllCustomers ? 25 : 15)
                .map((logo, i) => (
                  <div
                    key={i}
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${i * 0.03}s both`,
                    }}
                    className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-border bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50" />
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/10 via-primary-glow/10 to-primary/10 blur-xl" />
                    </div>
                    <img
                      src={`https://pub-0035a50eaf1046efa85b6e5d1631f721.r2.dev/images/${logo}`}
                      alt={`Customer logo ${i + 1}`}
                      className="relative z-10 max-h-full max-w-full object-contain mix-blend-multiply p-1 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
            </div>
            <div className="mt-10 flex justify-center sm:mt-12">
              <button
                type="button"
                onClick={() => setShowAllCustomers((prev) => !prev)}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-primary/40 bg-primary/10 px-7 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_10px_30px_rgba(56,189,248,0.35)] sm:text-base"
              >
                <span className="relative z-10">
                  {showAllCustomers ? 'Show Less' : 'View More'}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`relative z-10 transition-transform duration-300 ${showAllCustomers ? 'rotate-180' : 'group-hover:translate-y-0.5'}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
                    transform: 'translateX(-100%)',
                    animation: 'shimmer 2s infinite',
                  }}
                />
              </button>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-background px-5 py-20 sm:px-6 md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div
              className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero p-6 text-white shadow-elegant sm:p-10 md:p-16"
            >
              <div className="bg-gradient-mesh absolute inset-0 opacity-60" />
              <div className="absolute -bottom-16 -right-16 z-0 pointer-events-none opacity-80 transition-transform hover:scale-105 duration-1000">
                <svg viewBox="0 0 400 400" className="h-[450px] w-[450px] drop-shadow-[0_0_50px_rgba(56,189,248,0.5)]" aria-hidden="true">
                  <defs>
                    <linearGradient id="core-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  
                  {/* Outer Tech Ring - Slowly spinning counter-clockwise */}
                  <g style={{ transformOrigin: '200px 200px', animation: 'coreSpinReverse 20s linear infinite' }}>
                    <circle cx="200" cy="200" r="160" fill="none" stroke="url(#core-glow)" strokeWidth="4" strokeDasharray="10 20 50 20" opacity="0.8" />
                    <circle cx="200" cy="200" r="170" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="5 15" opacity="0.6" />
                    {/* decorative nodes */}
                    <circle cx="40" cy="200" r="6" fill="#38bdf8" />
                    <circle cx="360" cy="200" r="6" fill="#38bdf8" />
                    <circle cx="200" cy="40" r="6" fill="#38bdf8" />
                    <circle cx="200" cy="360" r="6" fill="#38bdf8" />
                  </g>

                  {/* Middle Data Ring - Spinning clockwise */}
                  <g style={{ transformOrigin: '200px 200px', animation: 'coreSpin 12s linear infinite' }}>
                    <circle cx="200" cy="200" r="120" fill="none" stroke="#60a5fa" strokeWidth="12" strokeDasharray="2 10 40 10 80 10" opacity="0.9" />
                    <circle cx="200" cy="200" r="130" fill="none" stroke="#93c5fd" strokeWidth="2" strokeDasharray="4 8" opacity="0.7" />
                  </g>

                  {/* Inner Core Housing - Pulsating */}
                  <g style={{ transformOrigin: '200px 200px', animation: 'pulse 3s ease-in-out infinite alternate' }}>
                    <circle cx="200" cy="200" r="80" fill="none" stroke="url(#core-glow)" strokeWidth="8" />
                    <circle cx="200" cy="200" r="90" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="1 10" />
                    
                    {/* The "Robot Eye" Center */}
                    <circle cx="200" cy="200" r="40" fill="url(#center-glow)" />
                    <circle cx="200" cy="200" r="60" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
                    
                    {/* Crosshairs */}
                    <line x1="200" y1="110" x2="200" y2="130" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                    <line x1="200" y1="270" x2="200" y2="290" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                    <line x1="110" y1="200" x2="130" y2="200" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                    <line x1="270" y1="200" x2="290" y2="200" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
              <div className="relative grid gap-12 lg:grid-cols-2">
                <div>
                  <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-glow">
                    Get In Touch
                  </div>
                  <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
                    Let's engineer your{" "}
                    <span className="text-gradient">next breakthrough</span>.
                  </h2>
                  <p className="mt-6 max-w-md text-lg text-white/70">
                    We focus on delivering solutions that maximize productivity and minimize operational costs. Tell us about your project — our engineers will design a custom automation solution tailored to your line.
                  </p>
                  <a
                    href="mailto:sales@probityautosystem.com"
                    className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-foreground shadow-lg transition-all duration-300 hover:shadow-xl"
                    tabIndex={0}
                  >
                    Start a Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>

                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div
                    className="group cursor-default rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-300 hover:border-primary-glow/70 hover:bg-white/10"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-phone mb-3 h-5 w-5 text-primary-glow transition-all duration-300 group-hover:drop-shadow-[0_0_8px_oklch(0.68_0.11_215)]"
                        aria-hidden="true"
                      >
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                      </svg>
                    </div>
                    <div className="mb-2 text-xs uppercase tracking-widest text-white/50 transition-all duration-300 group-hover:text-primary-glow group-hover:tracking-[0.15em]">
                      Phone
                    </div>
                    <div className="text-sm leading-relaxed text-white/90 transition-colors duration-300 group-hover:text-white">
                      +91 8551966166
                    </div>
                    <div className="text-sm leading-relaxed text-white/90 transition-colors duration-300 group-hover:text-white">
                      +91 8149069020
                    </div>
                  </div>
                  <div
                    className="group cursor-default rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-300 hover:border-primary-glow/70 hover:bg-white/10"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mail mb-3 h-5 w-5 text-primary-glow transition-all duration-300 group-hover:drop-shadow-[0_0_8px_oklch(0.68_0.11_215)]"
                        aria-hidden="true"
                      >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                        <rect x={2} y={4} width={20} height={16} rx={2} />
                      </svg>
                    </div>
                    <div className="mb-2 text-xs uppercase tracking-widest text-white/50 transition-all duration-300 group-hover:text-primary-glow group-hover:tracking-[0.15em]">
                      Email
                    </div>
                    <div className="text-sm leading-relaxed text-white/90 transition-colors duration-300 group-hover:text-white">
                      sales@probityautosystem.com
                    </div>
                  </div>
                  <div
                    className="group cursor-default rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-300 hover:border-primary-glow/70 hover:bg-white/10"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-globe mb-3 h-5 w-5 text-primary-glow transition-all duration-300 group-hover:drop-shadow-[0_0_8px_oklch(0.68_0.11_215)]"
                        aria-hidden="true"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                    </div>
                    <div className="mb-2 text-xs uppercase tracking-widest text-white/50 transition-all duration-300 group-hover:text-primary-glow group-hover:tracking-[0.15em]">
                      Website
                    </div>
                    <div className="text-sm leading-relaxed text-white/90 transition-colors duration-300 group-hover:text-white">
                      www.probityautosystem.com
                    </div>
                  </div>
                  <div
                    className="group cursor-default rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-300 hover:border-primary-glow/70 hover:bg-white/10"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-map-pin mb-3 h-5 w-5 text-primary-glow transition-all duration-300 group-hover:drop-shadow-[0_0_8px_oklch(0.68_0.11_215)]"
                        aria-hidden="true"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx={12} cy={10} r={3} />
                      </svg>
                    </div>
                    <div className="mb-2 text-xs uppercase tracking-widest text-white/50 transition-all duration-300 group-hover:text-primary-glow group-hover:tracking-[0.15em]">
                      Address
                    </div>
                    <div className="text-sm leading-relaxed text-white/90 transition-colors duration-300 group-hover:text-white">
                      GAT No. 558, Shinde Vasti, Nighoje,
                    </div>
                    <div className="text-sm leading-relaxed text-white/90 transition-colors duration-300 group-hover:text-white">
                      Tal. Khed,
                    </div>
                    <div className="text-sm leading-relaxed text-white/90 transition-colors duration-300 group-hover:text-white">
                      Dist. Pune
                    </div>
                    <div className="text-sm leading-relaxed text-white/90 transition-colors duration-300 group-hover:text-white">
                      410501
                    </div>
                  </div>
                </div>
                <div className="mt-2 sm:col-span-2">
                  <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-glow">Quick Connect</div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Website", value: "www.probityautosystem.com", target: "https://www.probityautosystem.com", svg: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" /></> },
                      { label: "Brochure Download", value: "Download PDF", target: "#brochure", svg: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></> },
                      { label: "WhatsApp", value: "Chat with us", target: "https://wa.me/918551966166", svg: <><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></> },
                    ].map((qr, i) => (
                      <a
                        key={i}
                        href={qr.target}
                        target={qr.target.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="group/quick relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur transition-all duration-300 hover:border-primary-glow/70 hover:bg-white/10"
                      >
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-glow">
                          <svg viewBox="0 0 24 24" className="h-full w-full text-foreground" fill="currentColor" aria-hidden="true">
                            {qr.svg}
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/50 transition-all duration-300 group-hover/quick:text-primary-glow">
                            {qr.label}
                          </div>
                          <div className="truncate text-xs font-semibold text-white/90 sm:text-sm" title={qr.value}>
                            {qr.value}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>
        <footer className="border-t border-border bg-background px-6 py-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <div className="group flex cursor-default items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center overflow-hidden">
                <img src="/images/logo.jpeg" alt="Probity Autosystem Pvt Ltd" className="h-full w-full object-contain" />
              </div>
              <span className="transition-colors duration-300 group-hover:text-foreground">
                © 2025 Probity Autosystem Pvt Ltd.
              </span>
            </div>
            <div className="group cursor-default">
              <span className="transition-colors duration-300 group-hover:text-primary">
                Engineering Everything
              </span>
              <span className="text-muted-foreground"> · Pune, India</span>
            </div>
          </div>
        </footer>


        {/* ── Product Video Player Popup ── */}
        {activeVideoSlide && (
          <div
            className="fixed inset-0 flex items-center justify-center p-2 sm:p-6 md:p-10"
            style={{ zIndex: 99999 }}
          >
            <div
              className="absolute inset-0 bg-background/90 backdrop-blur-xl transition-all duration-500"
              onClick={() => setActiveVideoSlide(null)}
            />
            <div
              className="relative w-full overflow-hidden transition-all duration-500 shadow-2xl scale-100 opacity-100"
              style={{
                zIndex: 99999,
                maxWidth: '1024px',
                width: '100%',
                backgroundColor: '#0a0f1d',
                color: '#ffffff',
                borderRadius: '1.5rem',
                border: '1px solid rgba(124, 247, 255, 0.2)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 60px rgba(124, 247, 255, 0.15)',
              }}
            >
              <div className="absolute top-0 right-0 z-50 p-4">
                <button
                  type="button"
                  onClick={() => setActiveVideoSlide(null)}
                  className="shrink-0 rounded-full bg-black/40 p-2.5 text-white/90 backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-red-500/80 hover:text-white hover:scale-110"
                  aria-label="Close video player"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
                </button>
              </div>

              <div className="flex flex-col h-full max-h-[85vh]">
                <div className="bg-black/80 flex-1 relative flex items-center justify-center" style={{ aspectRatio: '16 / 9' }}>
                  {activeVideoSlide.videoUrl && activeVideoSlide.videoUrl.includes("drive.google.com") ? (
                    <iframe
                      title={`${activeVideoSlide.title} video`}
                      src={getDrivePreviewUrl(activeVideoSlide.videoUrl)}
                      className="absolute inset-0 h-full w-full border-0"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <video
                      title={`${activeVideoSlide.title} video`}
                      src={activeVideoSlide.videoUrl}
                      controls
                      autoPlay
                      controlsList="nodownload"
                      className="absolute inset-0 h-full w-full object-contain bg-black"
                    />
                  )}
                </div>
                <div
                  className="bg-background/95 border-t border-white/10 backdrop-blur-lg"
                  style={{ padding: '24px 32px' }}
                >
                  {activeVideoSlide.category && (
                    <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-glow">
                      {activeVideoSlide.category}
                    </div>
                  )}
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl lg:text-3xl tracking-tight">
                    {activeVideoSlide.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Product Image Gallery Popup ── */}
        {activeGalleryGroup && activeGalleryImage && (
          <div
            className="fixed inset-0 flex items-center justify-center p-2 sm:p-6 md:p-10"
            style={{ zIndex: 99999 }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
              onClick={closeGalleryGroup}
            />
            <div
              className="relative flex w-full flex-col overflow-hidden transition-all duration-300"
              style={{
                zIndex: 99999,
                maxWidth: '1080px',
                maxHeight: 'calc(100svh - 1rem)',
                minHeight: 0,
                width: 'min(100%, 1080px)',
                backgroundColor: '#0a0f1d',
                color: '#ffffff',
                borderRadius: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(124, 247, 255, 0.1)',
              }}
            >
              <div
                className="flex items-start justify-between gap-4 border-b border-white/10"
                style={{ padding: '16px' }}
              >
                <div>
                  <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary-glow">
                    Product Image Gallery
                  </div>
                  <h3 className="font-display text-lg font-bold text-white sm:text-2xl">
                    {activeGalleryGroup.category}
                  </h3>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50">
                    {activeGalleryImages.length} {activeGalleryImages.length === 1 ? "image" : "images"}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeGalleryGroup}
                  className="shrink-0 rounded-full bg-white/10 p-2.5 text-white/70 transition-colors duration-300 hover:bg-white/20 hover:text-white"
                  aria-label="Close product image gallery"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
                </button>
              </div>

              <div
                className="flex-1 overflow-y-auto"
                style={{ minHeight: 0, padding: '12px' }}
              >
                <div
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-black"
                  style={{ aspectRatio: '16 / 10', maxHeight: 'min(58svh, 620px)' }}
                >
                  <img
                    alt={activeGalleryImage.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full"
                    src={activeGalleryImage.src}
                    style={{
                      backgroundColor: '#000000',
                      objectFit: 'contain',
                      objectPosition: 'center center',
                    }}
                  />
                  {galleryHasMultipleImages && (
                    <>
                      <button
                        type="button"
                        onClick={showPreviousGalleryImage}
                        className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-foreground/62 text-white backdrop-blur-md transition-colors duration-300 hover:border-primary-glow hover:bg-primary hover:text-primary-foreground sm:h-12 sm:w-12"
                        aria-label="Show previous product image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-left h-4 w-4"
                          aria-hidden="true"
                        >
                          <path d="m12 19-7-7 7-7" />
                          <path d="M19 12H5" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={showNextGalleryImage}
                        className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-foreground/62 text-white backdrop-blur-md transition-colors duration-300 hover:border-primary-glow hover:bg-primary hover:text-primary-foreground sm:h-12 sm:w-12"
                        aria-label="Show next product image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-right h-4 w-4"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                <div
                  className="mt-3 rounded-2xl border border-white/10 px-4 py-3 sm:px-6"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <div className="text-[10px] uppercase tracking-[0.24em] text-primary-glow">
                    {activeGallerySlideIndex + 1} / {activeGalleryImages.length}
                  </div>
                  <h4 className="mt-1 font-display text-base font-bold text-white sm:text-xl">
                    {activeGalleryImage.title}
                  </h4>
                </div>

                {galleryHasMultipleImages && (
                  <div
                    className="mt-4 flex gap-3"
                    style={{
                      overflowX: 'auto',
                      paddingBottom: '0.25rem',
                      scrollSnapType: 'x proximity',
                    }}
                  >
                    {activeGalleryImages.map((img, index) => {
                      return (
                        <button
                          type="button"
                          key={img.id}
                          onClick={() => setActiveGallerySlideIndex(index)}
                          className="relative shrink-0 overflow-hidden rounded-2xl border bg-black transition-all duration-300"
                          style={{
                            borderColor:
                              index === activeGallerySlideIndex
                                ? 'rgba(124, 247, 255, 0.9)'
                                : 'rgba(255, 255, 255, 0.12)',
                            height: 'clamp(3rem, 14vw, 4rem)',
                            opacity: index === activeGallerySlideIndex ? 1 : 0.58,
                            scrollSnapAlign: 'start',
                            width: 'clamp(4.5rem, 22vw, 6rem)',
                          }}
                          aria-label={`Show ${img.title}`}
                        >
                          <img
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover"
                            src={img.src}
                          />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── High-Contrast Collapsible Technical Specifications Catalog ── */}
        {activeCatalogTab && (
          <div
            className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 md:p-10"
            style={{ zIndex: 99999 }}
          >
            {/* Backdrop overlay */}
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${modalOpen ? 'opacity-100' : 'opacity-0'}`}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
              onClick={closeCatalog}
            />

            {/* Modal Container */}
            <div
              className="relative w-full transition-all duration-300 flex flex-col"
              style={{
                zIndex: 99999,
                pointerEvents: 'auto',
                maxWidth: '850px',
                maxHeight: '75vh',
                width: '95%',
                backgroundColor: '#0a0f1d',
                color: '#ffffff',
                borderRadius: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(124, 247, 255, 0.1)',
                transform: modalOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
                opacity: modalOpen ? 1 : 0,
                overflow: 'hidden',
              }}
            >
              <div
                className="flex items-center justify-between border-b border-white/10 pb-4"
                style={{
                  backgroundColor: '#0a0f1d',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '24px 32px 16px 32px',
                }}
              >
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-primary-glow">
                  Technical Specifications & Range
                </h3>
                <button
                  onClick={closeCatalog}
                  className="rounded-full bg-white/10 p-2.5 text-white/70 hover:bg-white/20 hover:text-white transition-colors duration-300"
                  aria-label="Close specifications panel"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                </button>
              </div>

              <div
                className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                style={{
                  padding: '24px 32px 32px 32px'
                }}
              >

                {activeCatalogTab === 'conveyors' && (
                  <div className="space-y-10">
                    <div>
                      <h4 className="mb-4 text-base sm:text-lg font-bold uppercase tracking-widest border-l-4 border-primary pl-3" style={{ color: '#ffffff' }}>A. Standard Conveyors</h4>
                      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {[
                          { name: "Free Flow Chain Conveyor", desc: "Designed for: Palletized assembly, workstation-based material handling." },
                          { name: "Flat Belt Conveyor", desc: "Designed for: Small parts transport, packaging, sorting lines." },
                          { name: "Roller Conveyor (Gravity & Powered)", desc: "Designed for: Heavy box handling, warehouse dispatch, tooling trays." },
                          { name: "Chain Conveyor", desc: "Designed for: Heavy pallets, automotive steel racks, bulk structures." },
                          { name: "Slat Chain Conveyor", desc: "Designed for: Bottling lines, food jars, automotive component assembly." },
                          { name: "Modular Belt Conveyor", desc: "Designed for: Curve routing, wet/washdown areas, food-grade packing." },
                          { name: "Mesh Conveyor", desc: "Designed for: Drying ovens, hot parts transport, oil drainage." },
                          { name: "Magnetic Conveyor", desc: "Designed for: Steel stamping scrap, nails, metallic component lifting." },
                          { name: "Screw Conveyor", desc: "Designed for: Powders, cement, agricultural grains, industrial slurry." },
                          { name: "Bucket Elevator Conveyor", desc: "Designed for: Vertical lift of bulk solids, sand, grains, fertilizers." },
                          { name: "Overhead Conveyor", desc: "Designed for: Painting line interlinking, overhead storage, garments." }
                        ].map((c, i) => (
                          <div key={i} className="flex flex-col h-full rounded-2xl border border-white/10 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-white/10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                            <h5 className="font-bold text-sm mb-1" style={{ color: '#ffffff' }}>{c.name}</h5>
                            <p className="flex-1 text-xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{c.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-4 text-base sm:text-lg font-bold uppercase tracking-widest border-l-4 border-primary pl-3" style={{ color: '#ffffff' }}>B. Specialized Conveyors</h4>
                      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {[
                          { name: "Knife Edge Conveyor", desc: "Designed for: Extremely small product transfers between conveyor joints." },
                          { name: "Telescopic Conveyor", desc: "Designed for: Loading/unloading logistics containers and vehicles." },
                          { name: "Backlit Conveyor", desc: "Designed for: Precision machine vision inspection of product outlines." },
                          { name: "Narrow Width Conveyor", desc: "Designed for: Small components, electronics, space-saving layouts." },
                          { name: "Curve Belt Conveyor", desc: "Designed for: 90/180-degree multi-directional floor flow." },
                          { name: "Sanitary / Washdown Conveyor", desc: "Designed for: FMCG, clean medical rooms, food packing." },
                          { name: "Twin Chain Conveyor", desc: "Designed for: Pallet-based heavy-duty engine assemblies." },
                          { name: "Packing Table Conveyor", desc: "Designed for: Integrated human-assembly packing desks." },
                          { name: "Incline Cleated Belt Conveyor", desc: "Designed for: High-angle vertical component feeding." },
                          { name: "Timing Belt Conveyor", desc: "Designed for: Synchronized high-precision parts indexing." },
                          { name: "Vibratory Conveyor", desc: "Designed for: Bulk material sorting, dry foods, metal chips." }
                        ].map((c, i) => (
                          <div key={i} className="flex flex-col h-full rounded-2xl border border-white/10 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-white/10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                            <h5 className="font-bold text-sm mb-1" style={{ color: '#ffffff' }}>{c.name}</h5>
                            <p className="flex-1 text-xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{c.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeCatalogTab === 'robotics' && (
                  <div className="space-y-10">
                    <div>
                      <h4 className="mb-4 text-base sm:text-lg font-bold uppercase tracking-widest border-l-4 border-primary pl-3" style={{ color: '#ffffff' }}>Pick & Place Systems</h4>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                          { name: "Pneumatic Pick & Place", desc: "Air-operated system for fast and repetitive movement with simple control.", cap: "Low-cost automation, repetitive tasks" },
                          { name: "Servo-Based Pick & Place", desc: "High-precision system with programmable motion control for accuracy.", cap: "Precision assembly, electronics, automotive" },
                          { name: "Gantry-Based Pick & Place", desc: "Overhead structure providing wide coverage and heavy load handling.", cap: "Large components, multi-station operations" },
                          { name: "Robotic Pick & Place", desc: "Advanced robotic system offering high speed, flexibility, and multi-axis movement.", cap: "High-speed automation, complex handling" }
                        ].map((p, i) => (
                          <div key={i} className="flex flex-col h-full rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-white/10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                            <h5 className="font-bold text-base mb-1" style={{ color: '#ffffff' }}>{p.name}</h5>
                            <p className="flex-1 text-xs mb-3" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{p.desc}</p>
                            <div className="text-[10px] text-primary-glow font-bold tracking-wider">DESIGNED FOR: {p.cap.toUpperCase()}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-4 text-base sm:text-lg font-bold uppercase tracking-widest border-l-4 border-primary pl-3" style={{ color: '#ffffff' }}>Robotic Automation Integration</h4>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                          { name: "Delta Robot", desc: "Parallel robot designed for ultra-fast and precise pick & place operations.", cap: "Packaging, food, electronics" },
                          { name: "Articulated Robot (6-Axis)", desc: "Highly flexible robot capable of complex movements similar to a human arm.", cap: "Welding, painting, material handling" },
                          { name: "SCARA Robot", desc: "Compact robot known for speed and precision in horizontal movements.", cap: "Assembly, electronics, small component handling" },
                          { name: "Gantry / Cartesian Robot", desc: "Linear motion robot offering high accuracy and load capacity.", cap: "CNC handling, heavy-duty automation" }
                        ].map((p, i) => (
                          <div key={i} className="flex flex-col h-full rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-white/10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                            <h5 className="font-bold text-base mb-1" style={{ color: '#ffffff' }}>{p.name}</h5>
                            <p className="flex-1 text-xs mb-3" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{p.desc}</p>
                            <div className="text-[10px] text-primary-glow font-bold tracking-wider">DESIGNED FOR: {p.cap.toUpperCase()}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeCatalogTab === 'vision' && (
                  <div className="space-y-10">
                    <div>
                      <h4 className="mb-4 text-base sm:text-lg font-bold uppercase tracking-widest border-l-4 border-primary pl-3" style={{ color: '#ffffff' }}>Machine Vision Systems</h4>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                          { name: "Part Presence Detection", desc: "Ensures all required components are correctly placed before processing.", cap: "Assembly verification" },
                          { name: "Dimensional Measurement", desc: "Accurate measurement of product dimensions using vision technology.", cap: "Quality control, inspection" },
                          { name: "Defect Detection", desc: "Identifies surface and structural defects automatically.", cap: "Zero-defect manufacturing" },
                          { name: "AI-Based Inspection", desc: "Advanced system using AI for intelligent and adaptive inspection.", cap: "High-end automated quality systems" }
                        ].map((v, i) => (
                          <div key={i} className="flex flex-col h-full rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-white/10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                            <h5 className="font-bold text-base mb-1" style={{ color: '#ffffff' }}>{v.name}</h5>
                            <p className="flex-1 text-xs mb-3" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{v.desc}</p>
                            <div className="text-[10px] text-primary-glow font-bold tracking-wider">DESIGNED FOR: {v.cap.toUpperCase()}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-4 text-base sm:text-lg font-bold uppercase tracking-widest border-l-4 border-primary pl-3" style={{ color: '#ffffff' }}>Custom Automation, SPM & Assembly Lines</h4>
                      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {[
                          { name: "Special Purpose Machines (SPM)", desc: "Custom-built machines tailored to specific production needs like leakage, stamping, testing.", cap: "Unique industrial processes" },
                          { name: "Assembly Automation Systems", desc: "Fully automated assembly lines ensuring speed, repeatability and zero-error.", cap: "Mass production lines" },
                          { name: "Welding Automation Systems", desc: "Automated TIG/MIG/Ultrasonic welding structures with complete safety interlocks.", cap: "Automotive, structural steel fabrication" },
                          { name: "Palletized Assembly Line", desc: "Controlled movement of products on pallets between specialized testing stations.", cap: "Workstation-based complex assemblies" },
                          { name: "Indexing Assembly Line", desc: "Step-by-step high precision indexed movement ensuring perfect positioning.", cap: "Electronics, medical, small parts" },
                          { name: "Rotary Assembly System", desc: "Circular high-speed indexing designed for tight plant spaces.", cap: "High-volume component assembly" }
                        ].map((a, i) => (
                          <div key={i} className="flex flex-col h-full rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-white/10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                            <h5 className="font-bold text-base mb-1" style={{ color: '#ffffff' }}>{a.name}</h5>
                            <p className="flex-1 text-xs mb-3" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{a.desc}</p>
                            <div className="text-[10px] text-primary-glow font-bold tracking-wider">DESIGNED FOR: {a.cap.toUpperCase()}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {/* Mobile Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
          <div className="mx-4 mb-4 rounded-3xl border border-border bg-background p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <nav className="flex justify-between items-center w-full px-2 sm:px-6">
              <a href="#top" className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span className="text-[10px] font-bold">Home</span>
              </a>
              <a href="#about" className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                <span className="text-[10px] font-bold">About</span>
              </a>
              <a href="#products" className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                <span className="text-[10px] font-bold">Solutions</span>
              </a>
              <a href="#contact" className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span className="text-[10px] font-bold">Contact</span>
              </a>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}

