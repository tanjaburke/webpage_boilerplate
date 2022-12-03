export interface Image {
    alt: string,
    copyright: string,
    fieldtype: string,
    filename: string,
    focus: string,
    id: number,
    is_external_url: boolean,
    name: string,
    title: string
}

export interface Link {
    cached_url: string,
    fieldtype: string,
    id: string,
    linktype: string,
    url: string
}