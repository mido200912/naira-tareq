import { useParams, Link } from "react-router-dom"
import { projects } from "@/data/projects"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import { motion } from "framer-motion"

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button variant="hero">Go Back Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  // عدد الصور وملفات PDF لكل مشروع
  const imageCount = project.imageCount || 0
  const pdfCount = project.pdfCount || 0

  const imageFiles = Array.from({ length: imageCount }, (_, i) => ({
    id: i + 1,
    path: `/images/${project.slug}/${i + 1}.jpg`,
    name: `${project.title} - Image ${i + 1}`,
  }))

  const pdfFiles = Array.from({ length: pdfCount }, (_, i) => ({
    id: i + 1,
    path: `/pdfs/${project.slug}/${i + 1}.pdf`,
    name: `${project.title} - File ${i + 1}`,
  }))

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          <p className="text-lg text-muted-foreground mb-12">
            {project.description}
          </p>

          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-2xl shadow-2xl mb-12"
          />

        {project.imageCount > 0 && (
  <>
    <h2 className="text-3xl font-bold mb-4">Project Images</h2>
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      {Array.from({ length: project.imageCount }).map((_, i) => (
        <motion.div key={i} className="bg-card rounded-xl shadow-md overflow-hidden">
          <img
            src={`/pdfs/${project.slug}/${i + 1}.jpg`}
            alt={`${project.title} - Image ${i + 1}`}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      ))}
    </div>
  </>
)}


          {/* عرض ملفات PDF فقط عند وجودها */}
          {pdfFiles.length > 0 && (
            <>
              <h2 className="text-3xl font-bold mb-4">Project PDFs</h2>
              <div className="space-y-6">
                {pdfFiles.map((pdf) => (
                  <motion.div
                    key={pdf.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 bg-card rounded-xl shadow-md"
                  >
                    <h3 className="text-xl font-semibold mb-4">{pdf.name}</h3>
                    <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden mb-4">
                      <iframe
                        src={pdf.path + "#toolbar=0"}
                        className="w-full h-full border-0"
                        title={pdf.name}
                      ></iframe>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        variant="outline"
                        onClick={() => window.open(pdf.path, "_blank")}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF {pdf.id}
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
