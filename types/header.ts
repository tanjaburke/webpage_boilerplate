import { Image } from "./generic"


export interface Header {
    content?: {
        component: string, 
        headerMenu: Array<{}>,
        logo: Image,
        _uid: string,
        _editable: string
    }
  }
  