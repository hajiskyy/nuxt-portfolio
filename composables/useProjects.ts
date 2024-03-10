import type { Project, ProjectArticle } from '~/types/projects'

export const useProjects = () => {
  const projects = useState<Project[]>('projects', () => [])

  async function fetchData() {
    if (projects.value.length) return
    try {
      const { data } = await useAsyncData('projects', () =>
        queryContent<ProjectArticle>('/projects').findOne()
      )

      projects.value = data.value?.projects as Project[]
    } catch (error) {
      projects.value = []
      return error
    }
  }

  return {
    projects,
    fetchData,
  }
}
