import { notFound, redirect } from "next/navigation"
import { chapters } from "@/app/data/chapters"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.values(chapters).map((chapter) => ({
    slug: chapter.slug,
  }))
}

export default async function ChapterRedirectPage({ params }: Props) {
  const { slug } = await params
  const chapter = chapters[slug]

  if (!chapter) {
    notFound()
  }

  redirect(`/story/${slug}`)
}