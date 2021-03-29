import { ImageGetter } from "./imageGetter/abstractGetter";

export interface IImageProcessor {
  imgGetter: ImageGetter
  getNext: () => string
}
