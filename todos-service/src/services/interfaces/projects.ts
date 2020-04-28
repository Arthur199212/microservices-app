export interface CreateProjectsProps {
  title: string
  user: string
}

export interface ProjectsProps {
  id: string
  user: string
}

export interface EditProjectsProps {
  id: string
  title: string
  user: string
}

export interface GetProjectsProps {
  user: string
}
