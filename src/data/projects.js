import metricspace from '../assets/images/metricspace.png';
import payease from '../assets/images/payease.png';
import shopique from '../assets/images/shopique.png';
import skinscribe from '../assets/images/skinscribe.png';
import gadgety from '../assets/images/gadgety.png';

export const projects = [
  {
    title: "PayEase",
    description: "A full-stack bill payment platform with secure authentication, wallet funding, password reset, and utility payments across major Nigerian providers.",
    features: [
      "JWT Authentication + Forgot/Reset Password Flow",
      "Wallet Funding via Paystack Redirect + Verification",
      "Bill Payments for Electricity, Airtime, Data, and Cable TV",
      "Transaction History, Notifications, and Analytics",
      "Profile Management with Production Deployment on Vercel + Render",
    ],
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "React Router",
      "Context API",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "PostgreSQL",
      "Brevo",
      "Paystack",
      "VTPass",
      "Docker",
      "Render",
      "Vercel"
    ],
    image: payease,
    github: "https://github.com/nne-nna/bill-payment-system",
    demo: "https://payease-web.vercel.app/"
  },
  {
    title: "MetricSpace",
    description: "A powerful business dashboard for streamlined management and data analysis.",
    features: [
      "Collapsible Sidebar with Theme Support",
      "Profile Management with Instant Updates",
      "Real-time Inventory Stats and Smart Notifications",
      "Financial Reports with Charts and Insights",
      "Advanced Product Search and Customer Management",
    ],
    tech: ["React", "React Hooks", "React Router", "Context API", "Axios", "Tailwind CSS", "Chart.js", "PropTypes"],
    image: metricspace,
    github: "https://github.com/nne-nna/DashBoard",
    demo: "https://metricspace.vercel.app/"
  },
  {
    title: "Shopique",
    description: "A sleek and user-friendly e-commerce website for a smooth shopping experience.",
    features: [
      "Responsive design across devices",
      "Dynamic product gallery",
      "Real-time cart updates",
      "Multiple payment options",
      "Order tracking",
    ],
    tech: ["React", "Tailwind CSS", "Context API", "Stripe", "Razorpay"],
    image: shopique,
    github: "https://github.com/nne-nna/shopique",
    demo: "https://shopiquee.vercel.app/"
  },
  {
    title: "SkinScribe",
    description: "A modern skincare blog website with a seamless user experience.",
    features: [
      "Fully responsive design",
      "Engaging animations",
      "Dynamic content management",
      "Optimized performance",
      "Interactive contact form"
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: skinscribe,
    github: "https://github.com/nne-nna/skincare-blogsite",
    demo: "https://skinscribe.vercel.app/"
  },
  {
    title: "Gadgety",
    description: "A tech store for exploring and purchasing the latest gadgets.",
    features: [
      "Home and search features",
      "Product details and reviews",
      "Easy checkout",
      "Responsive design",
      "Wishlist and favorites"
    ],
    tech: ["React", "Tailwind CSS", "Context API"],
    image: gadgety,
    github: "https://github.com/nne-nna/TechShop",
    demo: "https://gadgety.vercel.app/"
  }
];