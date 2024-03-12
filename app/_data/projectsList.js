import project1 from "@/assets/project1.webp";
import project1Website from "@/assets/project1Website.webp";
import project2 from "@/assets/project2.webp";
import project2Website from "@/assets/project2Website.webp";
import project3 from "@/assets/project3.webp";
import project3Website from "@/assets/project3Website.webp";
import project4 from "@/assets/project4.webp";
import project4Website from "@/assets/project4Website.webp";
import toyqo from "@/assets/toyqo.webp";
import toyqo2 from "@/assets/toyqo2.webp";
import pizza from "@/assets/pizza.webp";
import pizza2 from "@/assets/pizza2.webp";
import proland from "@/assets/proland.webp";
import proland2 from "@/assets/proland2.webp";
import proland3 from "@/assets/proland3.webp";
import isoTech from "@/assets/isoTech.webp";
import IsoTech2 from "@/assets/IsoTech2.webp";
import dashboard from "@/assets/dashboard.webp";
import dashboard2 from "@/assets/dashboard2.webp";
const ProjectList = [
  {
    id: 1,
    img: project1,
    imgAllPages: project1Website,
    title: "Toyqo",
    title_ar: "توكيو",
    liveMode: "https://aya-abdelsalam.github.io/toyqo/",
    code: "https://github.com/Aya-AbdElsalam/toyqo",
    aboutTheSite: `Toyqo is a vibrant online platform dedicated to providing a delightful shopping experience for children\'s toys. Catering to the diverse interests and developmental needs of kids, Toyqo offers a wide array of toys ranging from educational and interactive to imaginative and creative.<br/><i> 👉 features : "Add to cart", "remove from cart", "write comment", and "zooming on images when hovering on them to show their details"</i> `,
    images: [toyqo, toyqo2],
    tools: ["HTML", "CSS", "JavaScript"],
    aboutTheSite_ar: `تويكو هي منصة عبر الإنترنت نشطة مخصصة لتوفير تجربة تسوق ممتعة لألعاب الأطفال. بالتركيز على تلبية الاهتمامات المتنوعة والاحتياجات التنموية للأطفال، تقدم تويكو مجموعة واسعة من الألعاب تتنوع بين التعليمية والتفاعلية والمبتكرة والإبداعية.<br/> <i>👈 المميزات: "إضافة إلى السلة"، "إزالة من السلة"، "كتابة تعليق"، و "التكبير على الصور عند تمرير الماوس عليها لعرض تفاصيلها".</i>`,
  },
  {
    id: 2,
    img: project2,
    imgAllPages: project2Website,
    title: "Pizza",
    title_ar: "بيتزا",
    liveMode: "https://pizza-restaurant-five.vercel.app/",
    code: "https://github.com/Aya-AbdElsalam/PizzaRestaurant",
    images: [pizza, pizza2],
    tools: [
      "React.js",
      "Bootstrap",
      "CSS",
      "Redux Toolkit",
      "fontawesome",
      "emailjs",
      "lightgallery",
      "sweetalert2",
      "REST API",
    ],
    aboutTheSite:
      'Discover the perfect slice at our pizza paradise! Explore our mouthwatering menu, order online, and join us for unforgettable flavors and fun events.<br/><i>👉 features : "Add to cart" ,"Remove from cart" ,"Search for food" ,"Sort food from high to low price and low to high" ,"Filter food by price" and "Filter food by category"</i>',
    aboutTheSite_ar: `اكتشف الشريحة المثالية لدينا! استكشف قائمتنا الشهية، واطلب عبر الإنترنت، وانضم إلينا لتذوق نكهات لا تُنسى والمشاركة في الفعاليات الممتعة.<br/> <i>👈 المميزات: "إضافة إلى السلة"، "إزالة من السلة"، "البحث عن الطعام"، "ترتيب الطعام من السعر الأعلى إلى الأقل ومن الأقل إلى الأعلى"، "تصفية الطعام حسب السعر" و "تصفية الطعام حسب الفئة"</i>.`,
  },
  {
    id: 3,
    img: project3,
    imgAllPages: project3Website,
    title: "PROLAND",
    title_ar: "برولاند",
    liveMode: "https://proland-phi.vercel.app/",
    code: "https://github.com/Aya-AbdElsalam/PROLAND",
    images: [proland, proland2, proland3],
    tools: ["React.js", "MUI", "Nivo", "Redux Toollkit", "REST API"],
    aboutTheSite:
      "Experience Proland's specialized smartwatch platform: from a comprehensive product showcase to quick product views, seamless member management, and effortless product inventory control.Visual aids such as graphical maps offer insightful depictions of sales percentages and visitor statistics, ensuring informed decision- making. <br/> <i>👉 features : Quick product view, add / remove members, and add / remove product </i>",
    aboutTheSite_ar: `استمتع بمنصة الساعات الذكية المتخصصة لـ برولاند: من عرض المنتجات الشامل إلى العروض السريعة للمنتجات، وإدارة الأعضاء بسهولة، والتحكم السلس في مخزون المنتجات. تقدم الوسائط المرئية مثل الخرائط الرسومية تصويرًا مفيدًا لنسب المبيعات وإحصاءات الزوار، مما يضمن اتخاذ قرارات مستنيرة.<br/> <i>👈 المميزات: عرض سريع للمنتجات، إضافة/إزالة الأعضاء، وإضافة/إزالة المنتجات.`,
  },
  {
    id: 4,
    img: project4,
    imgAllPages: project4Website,
    title: "IsoTech",
    title_ar: "آيزوتيك",
    liveMode: "https://iso-tech.vercel.app/",
    code: "https://github.com/Aya-AbdElsalam/isoTech",
    images: [isoTech, IsoTech2, dashboard, dashboard2],
    tools: [
      "React.ts",
      "MUI",
      "Nivo",
      "Redux Toollkit",
      "REST API",
      "React quill",
      "React Hook Form",
    ],
    aboutTheSite:
      "IsoTech is an e-commerce platform specializing in electronics, offering users the convenience of purchasing products online and accessing detailed information about each item.<br/> <i>👉This site contains 27 pages, including: Sign In, Sign Up, Home, Shop, Product Details, Blog, Blog Details, About, Cart, Wish List, Contact Us, FAQs, Find Store Location, Privacy Policy, and Terms of Service. Additionally, it features a dashboard with sections such as Blog, Add Blog, Edit Blog, Brand, Comments, Products, Add Product, Edit Product, Team, Add Member, Edit Information of Member, Mail, and Mail Details.</i> ",
    aboutTheSite_ar:
      "إيزوتك هي منصة تجارة إلكترونية متخصصة في الإلكترونيات، توفر للمستخدمين سهولة شراء المنتجات عبر الإنترنت والوصول إلى معلومات مفصلة حول كل عنصر<br/> <i>👈.يحتوي هذا الموقع على 27 صفحة، بما في ذلك: تسجيل الدخول، التسجيل، الصفحة الرئيسية، المتجر، تفاصيل المنتج، المدونة، تفاصيل المدونة، حول، عربة التسوق، قائمة الأمنيات، اتصل بنا، الأسئلة الشائعة، العثور على موقع المتجر، سياسة الخصوصية، وشروط الخدمة. بالإضافة إلى ذلك، يتميز بلوحة تحكم تضم أقسامًا مثل المدونة، إضافة مدونة، تحرير مدونة، العلامة التجارية، التعليقات، المنتجات، إضافة منتج، تحرير منتج، الفريق، إضافة عضو، تحرير معلومات العضو، البريد، وتفاصيل البريد.",
  },
];
export default ProjectList;
