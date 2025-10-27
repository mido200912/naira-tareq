import { Project } from "@/types/project"
import jumiaPreview from "@/assets/projects/jumia-preview.jpg"
import burgerPreview from "@/assets/projects/burger-preview.jpg"
import resalaPreview from "@/assets/projects/resala-preview.jpg"
import techPreview from "@/assets/projects/tech-preview.jpg"
import fashionPreview from "@/assets/projects/fashion-preview.jpg"
import cafePreview from "@/assets/projects/cafe-preview.jpg"

export const projects: Project[] = [
  {
    id: "1",
    title: "Jumia Design Project",
    description:
      "E-commerce platform branding and visual identity redesign for Egypt's leading online marketplace.",
    image: jumiaPreview,
    category: "Branding",
    slug: "jumia",
    imageCount: 24,
    pdfCount:0,
  },
{
  id: "2",
  title: "Wohmy Burger Brand",
  description:
    "Full brand identity for Wohmy Burger, a fictional burger restaurant with a fun and energetic design reflecting its playful concept.",
  image: burgerPreview,
  category: "Branding",
  slug: "burger",
  imageCount: 6,
  pdfCount: 0,
},

{
  id: "3",
  title: "Resala Charity Organization",
  description:
    "Complete visual identity and promotional materials for Resala Charity Organization, focusing on humanitarian aid and community service.",
  image: resalaPreview,
  category: "Social Impact",
  slug: "resala",
  imageCount: 32,
  pdfCount: 0,
},

{
  id: "4",
  title: "Heritage Revival Project",
  description:
    "Comprehensive brand identity design dedicated to reviving cultural and historical heritage through modern visual storytelling.",
  image: techPreview,
  category: "Culture & Heritage",
  slug: "2", // يطابق اسم مجلد الملفات (images/2 و pdfs/2)
  imageCount: 4,
  pdfCount: 0,
},


{
  id: "5",
  title: "Feeding Fish Game",
  description:
    "Creative design and branding for an interactive fish-feeding game featuring playful visuals and smooth user experience.",
  image: fashionPreview,
  category: "Game",
  slug: "feeding fish",
  imageCount: 5,
  pdfCount: 0,
},

 {
  id: "6",
  title: "Violence Against Animals Campaign",
  description:
    "Awareness campaign design addressing violence against animals, using impactful visuals and strong emotional messaging to promote empathy and protection.",
  image: cafePreview,
  category: "Social Awareness",
  slug: "Violence against animals",
  imageCount: 4,
  pdfCount: 0,
},
]
