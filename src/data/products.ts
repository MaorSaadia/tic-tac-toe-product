import { ProductData } from "../types/product";

export const products: Record<string, ProductData> = {
  soapshear: {
    id: "soapshear",
    title: "SoapShear: Stay Clean",
    badge: "Best Seller",
    price: 24.95,
    originalPrice: 34.93,
    maxQuantity: 10,
    review: {
      rating: 5.0,
      count: 18,
    },
    features: [
      {
        icon: "CheckCircle",
        text: "Hygienic and Clean Design",
      },
      {
        icon: "CheckCircle",
        text: "Premium Wall Mount Included",
      },
      {
        icon: "Truck",
        text: "Free Express Shipping",
      },
    ],
    accordionItems: [
      {
        id: "how-it-works",
        title: "How It Works",
        content:
          "Transform soap into smooth powder effortlessly with our patented grinding mechanism. Simply insert your soap bar and turn the handle for instant, mess-free soap powder.",
      },
      {
        id: "placement",
        title: "Where Can I Put It?",
        content:
          "Perfect for kitchens, bathrooms, or camping. The included wall mount allows for easy installation on any flat surface, while the compact design makes it ideal for travel.",
      },
      {
        id: "shipping",
        title: "Shipping Information",
        content:
          "Free worldwide shipping on all orders. Standard delivery takes 3-5 business days, with express shipping options available at checkout.",
      },
      {
        id: "returns",
        title: "Our Return Policy",
        content:
          "30-day money-back guarantee. If you're not completely satisfied, return the product in its original condition for a full refund, no questions asked.",
      },
    ],
    featuresDetail: {
      mainFeatures: [],
      stats: undefined,
    },
  },

  ticTacToeGame: {
    id: "ticTacToeGame",
    title: "Tic-Tac-Toe Puzzle Game",
    badge: "Perfect Gift",
    price: 14.99,
    originalPrice: 19.99,
    maxQuantity: 20,
    review: {
      rating: 4.8,
      count: 42,
    },
    features: [
      {
        icon: "Gift",
        text: "Perfect Gift for Kids and Adults",
      },
      {
        icon: "LightBulb",
        text: "Educational & Engaging",
      },
      {
        icon: "Airplane",
        text: "Compact & Travel-Friendly",
      },
    ],
    accordionItems: [
      {
        id: "features",
        title: "Why Choose This Game?",
        content:
          "Develop problem-solving skills, enhance logic, and enjoy hours of fun with this portable Tic-Tac-Toe game. Its ergonomic design ensures comfort, while the durable build guarantees lasting use.",
      },
      {
        id: "gift",
        title: "Perfect Gift for Any Occasion",
        content:
          "An excellent holiday or birthday gift for kids aged 3 and older. Whether at home or on the go, this game offers fun, education, and engagement for the whole family.",
      },
      {
        id: "specs",
        title: "Product Specifications",
        content:
          "Material: ABS\nColor Options: Yellow, Orange\nNet Weight: 131g\nSize: 90mm x 90mm x 28mm\nPackage Includes: 1x Portable Tic-Tac-Toe Puzzle Game",
      },
      {
        id: "shipping",
        title: "Shipping Information",
        content:
          "Enjoy free worldwide shipping on all orders. Delivery takes 3-5 business days. Optional express shipping is available at checkout for faster delivery.",
      },
      {
        id: "returns",
        title: "Our Return Policy",
        content:
          "We offer a 30-day money-back guarantee. If you're not satisfied, return the product in its original condition for a full refund.",
      },
    ],
    featuresDetail: {
      mainFeatures: [],
      stats: undefined,
    },
  },
  grindingSoapBox: {
    id: "grindingSoapBox",
    title: "Grinding Soap Box: Hygienic Soap Solution",
    badge: "New Arrival",
    price: 19.95,
    originalPrice: 24.99,
    maxQuantity: 15,
    review: {
      rating: 4.6,
      count: 28,
    },
    features: [
      {
        icon: "Sparkles",
        text: "Innovative Design for Hygienic Use",
      },
      {
        icon: "ShieldCheck",
        text: "Waterproof & Durable",
      },
      {
        icon: "AdjustmentsHorizontal",
        text: "Adjustable Powder Output",
      },
      {
        icon: "Hammer",
        text: "Tool-Free Installation",
      },
    ],
    accordionItems: [
      {
        id: "features",
        title: "Why Choose This Soap Box?",
        content:
          "Keep your soap dry and hygienic with this innovative grinding container. Avoid soggy soap and bacteria by easily grinding your soap into fine powder for mess-free use.",
      },
      {
        id: "design",
        title: "Durable & Waterproof Design",
        content:
          "Built with ABS plastic, stainless steel components, and a silicone sealing strip to keep soap dry and fragrant while resisting rust and wear.",
      },
      {
        id: "adjustment",
        title: "Adjustable Output Levels",
        content:
          "Customize your soap powder output with 3 adjustable levels. Each soap bar provides up to 5000 uses for long-lasting efficiency.",
      },
      {
        id: "installation",
        title: "Easy Installation",
        content:
          "Comes with a strong adhesive for quick, tool-free installation. Perfect for bathrooms, kitchens, RVs, and more.",
      },
      {
        id: "specs",
        title: "Product Specifications",
        content:
          "Material: ABS\nColor: White\nPackage Includes: 1x Grinding Soap Box",
      },
      {
        id: "returns",
        title: "Our Return Policy",
        content:
          "We offer a 30-day money-back guarantee. Return the product in its original condition for a full refund if you're not satisfied.",
      },
    ],
    featuresDetail: {
      mainFeatures: [],
      stats: undefined,
    },
  },
  // Add more products here following the same structure
};

export const productFeatures = {
  soapshear: {
    mainFeatures: [
      {
        image: "/product-detail-1.jpeg",
        title: "Transform Soap Into Smooth, Usable Powder Effortlessly",
        description:
          "With SoapShear, keep bar soap fresh and dry. Its precise grating mechanism transforms messy bars into fine powder with a simple press, making your daily routine cleaner and more efficient.",
      },
      {
        image: "/product-detail-2.jpeg",
        title: "Make your soap last longer",
        description:
          "SoapShear grinds just the right amount of soap, helping your bars last longer and saving you money. The precision control ensures zero waste and maximum efficiency in your soap usage.",
      },
      {
        image: "/product-detail-3.jpeg",
        title: "Innovative Design Meets Functionality",
        description:
          "Our sleek, modern design isn't just about looks. Every aspect of SoapShear has been engineered for optimal performance, durability, and ease of use, making it a perfect addition to any bathroom or kitchen.",
      },
    ],
    stats: [
      {
        value: "30%",
        label: "Longer Lasting Soap",
      },
      {
        value: "5k+",
        label: "Happy Customers",
      },
      {
        value: "4.9★",
        label: "Average Rating",
      },
    ],
  },
  ticTacToeGame: {
    mainFeatures: [
      {
        image: "/ticTacToeGame/tic-tac-toe-feature-1.jpeg",
        title: "Fun and Educational for All Ages",
        description:
          "Engage your kids and yourself with this simple yet challenging game. It promotes problem-solving and logic skills while providing hours of entertainment.",
      },
      {
        image: "/ticTacToeGame/tic-tac-toe-feature-2.jpeg",
        title: "Portable and Travel-Friendly",
        description:
          "Take it anywhere! The compact and lightweight design makes it ideal for family trips, vacations, or just playing on the go.",
      },
      {
        image: "/ticTacToeGame/tic-tac-toe-feature-3.jpeg",
        title: "Built to Last",
        description:
          "Crafted from durable ABS material, this game is designed to withstand daily use by kids and adults alike, ensuring long-term fun.",
      },
    ],
    stats: [
      {
        value: "4 Modes",
        label: "Game Options",
      },
      {
        value: "131g",
        label: "Lightweight Design",
      },
      {
        value: "4.8★",
        label: "Average Rating",
      },
    ],
  },
  grindingSoapBox: {
    mainFeatures: [
      {
        image: "/grinding-soap-box-feature-1.jpeg",
        title: "Innovative Design for a Cleaner Experience",
        description:
          "Say goodbye to soggy soap and bacterial growth. The soap grinding container transforms soap bars into fine powder effortlessly, ensuring a clean and refreshing experience every time.",
      },
      {
        image: "/grinding-soap-box-feature-2.jpeg",
        title: "Durable and Waterproof Construction",
        description:
          "Made with ABS plastic and a built-in silicone sealing strip, the design keeps soap dry and fragrant. Stainless steel components prevent rust, ensuring long-lasting durability.",
      },
      {
        image: "/grinding-soap-box-feature-3.jpeg",
        title: "Adjustable Powder Output Levels",
        description:
          "Choose from 3 powder output levels for customized soap usage. One soap bar can be ground up to 5000 times, making it both efficient and practical.",
      },
      {
        image: "/grinding-soap-box-feature-4.jpeg",
        title: "Tool-Free Installation",
        description:
          "Comes with a strong adhesive for easy, drill-free installation. Perfect for bathrooms, kitchens, RVs, and more, saving space and protecting your walls.",
      },
    ],
    stats: [
      {
        value: "3 Levels",
        label: "Adjustable Output",
      },
      {
        value: "5000x",
        label: "Soap Grinding Uses",
      },
      {
        value: "4.7★",
        label: "Average Rating",
      },
    ],
  },
};
