import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Skill {
  label: string
  id: string
  icon?: string
  showcase: boolean
}

export interface SkillArticle extends ParsedContent {
  items: Skill[]
}
