export interface PublicationsCategory {
  id: number
  title: string
  children: string[]
  isActive?: boolean
}

export interface PublicationsPost {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  category: PublicationsCategory
  created_at: Date | string
  tags: string[]
}
