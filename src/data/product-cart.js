const sampleProducts = [
  {
    id: 1,
    title: "هدفون بی‌سیم مدل X200",
    description:
      "هدفون بی‌سیم با کیفیت صدای عالی و طراحی ارگونومیک برای استفاده طولانی مدت. مناسب برای کار، مسافرت و ورزش.",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "audio",
    currentPrice: 1290000,
    originalPrice: 1590000,
    discount: 20,
    rating: 4.2,
    reviews: 124,
    instructor: "شرکت سونی",
    students: 850,
    features: [
      "بلوتوث 5.0",
      "مقاوم در برابر آب",
      "باتری 30 ساعته",
      "میکروفون داخلی",
    ],
  },
  {
    id: 2,
    title: "ماوس گیمینگ مدل G502",
    description:
      "ماوس حرفه ای برای گیمرها با دقت بالا و طراحی ارگونومیک. دارای نور RGB قابل تنظیم و 11 دکمه برنامه‌پذیر.",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "gaming",
    currentPrice: 850000,
    originalPrice: 990000,
    discount: 15,
    rating: 4.7,
    reviews: 236,
    instructor: "شرکت لاجیتک",
    students: 1200,
    features: [
      "حسگر HERO 25K",
      "وزن قابل تنظیم",
      "پروفایل‌های ذخیره شده",
      "ساختار ضد لغزش",
    ],
  },
  {
    id: 3,
    title: "کیبورد مکانیکی مدل K70",
    description:
      "کیبورد مکانیکی با سوئیچ Cherry MX و نورپردازی RGB. مناسب برای برنامه‌نویسان و گیمرهای حرفه‌ای.",
    image:
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "gaming",
    currentPrice: 2200000,
    originalPrice: 2500000,
    discount: 12,
    rating: 4.9,
    reviews: 189,
    instructor: "شرکت Corsair",
    students: 950,
    features: [
      "سوئیچ Cherry MX Red",
      "بدنه آلومینیومی",
      "نرم‌افزار iCUE",
      "حالت بازی",
    ],
  },
  {
    id: 4,
    title: "دوره جامع React.js",
    description:
      "آموزش کامل React.js از مقدماتی تا پیشرفته با انجام پروژه‌های واقعی. شامل Redux، Hooks و Context API.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "frontend",
    currentPrice: 990000,
    originalPrice: 1200000,
    discount: 18,
    rating: 4.8,
    reviews: 345,
    instructor: "علی محمدی",
    students: 2100,
    features: ["پروژه‌محور", "پشتیبانی دائمی", "آپدیت رایگان", "مدرک معتبر"],
  },
  {
    id: 5,
    title: "آموزش Node.js پیشرفته",
    description:
      "یادگیری Node.js برای توسعه backend با Express، MongoDB و معماری‌های پیشرفته.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "backend",
    currentPrice: 1100000,
    originalPrice: 1350000,
    discount: 19,
    rating: 4.6,
    reviews: 278,
    instructor: "مریم احمدی",
    students: 1800,
    features: [
      "RESTful APIs",
      "Authentication",
      "Deployment",
      "Performance Optimization",
    ],
  },
  {
    id: 6,
    title: "دوره کامل Python",
    description:
      "یادگیری Python از پایه تا پیشرفته برای توسعه وب، هوش مصنوعی و اتوماسیون.",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "programming",
    currentPrice: 850000,
    originalPrice: 1000000,
    discount: 15,
    rating: 4.7,
    reviews: 412,
    instructor: "نازنین کریمی",
    students: 3200,
    features: [
      "Django Framework",
      "Data Science",
      "Web Scraping",
      "Automation",
    ],
  },
  {
    id: 7,
    title: "طراحی رابط کاربری با Figma",
    description:
      "آموزش کامل طراحی UI/UX با Figma از مبتدی تا حرفه‌ای با تمرین‌های عملی.",
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "design",
    currentPrice: 750000,
    originalPrice: 900000,
    discount: 17,
    rating: 4.9,
    reviews: 198,
    instructor: "رضا حسینی",
    students: 1500,
    features: [
      "Component Library",
      "Prototyping",
      "Design Systems",
      "Collaboration",
    ],
  },
  {
    id: 8,
    title: "دوره DevOps با Docker و Kubernetes",
    description:
      "یادگیری مفاهیم DevOps و پیاده‌سازی با Docker، Kubernetes و CI/CD Pipelines.",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "devops",
    currentPrice: 1300000,
    originalPrice: 1600000,
    discount: 19,
    rating: 4.8,
    reviews: 156,
    instructor: "امیررضا نوروزی",
    students: 950,
    features: [
      "Containerization",
      "Orchestration",
      "Cloud Deployment",
      "Monitoring",
    ],
  },
  {
    id: 9,
    title: "آموزش Flutter برای توسعه موبایل",
    description:
      "یادگیری توسعه اپلیکیشن‌های موبایل چندسکویی با Flutter و Dart.",
    image:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "mobile",
    currentPrice: 950000,
    originalPrice: 1150000,
    discount: 17,
    rating: 4.5,
    reviews: 231,
    instructor: "سارا محمدزاده",
    students: 1400,
    features: ["Widgets", "State Management", "Firebase", "Publishing"],
  },
  {
    id: 10,
    title: "دوره امنیت سایبری",
    description:
      "آموزش مفاهیم امنیت اطلاعات و راهکارهای دفاع در برابر تهدیدات سایبری.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "security",
    currentPrice: 1200000,
    originalPrice: 1500000,
    discount: 20,
    rating: 4.7,
    reviews: 187,
    instructor: "محمد امنیت",
    students: 1100,
    features: [
      "Penetration Testing",
      "Cryptography",
      "Network Security",
      "Ethical Hacking",
    ],
  },
];

export default sampleProducts;
