import { Image } from './Image'

export abstract class ImageGetter {
    abstract getAllImage(): Image[];
}
