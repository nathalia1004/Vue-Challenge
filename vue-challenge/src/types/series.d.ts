export interface Series {
  id: string
  title: string
  startYear: number
  endYear: number
  type: 'comic' | 'series'
  thumbnail: string
  comics: number
  stories: number
}
