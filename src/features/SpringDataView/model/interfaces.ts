export interface ISpring {
  cadastral_number: string
  closest_street: string
  coords: any
  creator: {id: number, name: string}
  date: number
  decision_of_boardА: string
  flow_direction: string
  general_status: 'Very bad' | "Bad" | 'Medium' | 'Good' | 'Very good'
  gvr_status: string
  height: number
  id: number
  inventory: string
  is_captured: string
  is_font: string
  name: string
  notice: string
  owner: string
  quality: string
  rospotrebnadzor: string
  sanitary_state: string
  trusted_persons: any
  zone: string
  category: number
}