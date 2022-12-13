import { Link } from "./generic"

export interface Card {
    component: string,
    content: Array<{}>,
    link: Link,
    _editable: string,
    _uid: string
}