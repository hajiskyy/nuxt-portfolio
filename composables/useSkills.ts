import type { Skill, SkillArticle } from '~/types/skills'

export const useSkills = () => {
  const skills = useState<Skill[]>('skills', () => [])

  async function fetchData() {
    if (skills.value.length) return
    try {
      const { data } = await useAsyncData('skills', () =>
        queryContent<SkillArticle>('/skills').findOne()
      )

      skills.value = data.value?.items as Skill[]
    } catch (error) {
      skills.value = []
      return error
    }
  }

  return {
    skills,
    fetchData,
  }
}
