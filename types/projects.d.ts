import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Project {
  name: string
  id: string
  img?: string
  link?: string
  tools?: string[]
}

export interface ProjectArticle extends ParsedContent {
  projects: Project[]
}
