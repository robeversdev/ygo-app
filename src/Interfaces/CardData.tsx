export type CardData = {
    id: number
    name: string
    type: string
    frameType: string
    desc: string
    atk: number
    def: number
    level: number
    race: string
    attribute: string
    archetype: string
    misc_info: Array<CardMiscInfo>
}


type CardMiscInfo = {
    tcg_date: Date
    ocg_date: Date
}