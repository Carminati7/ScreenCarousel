import { IImageProcessor } from '../IImageProcessor'
export class DemoImageHandler implements IImageProcessor {

  imgArray: any[]

  constructor() {
    this.imgArray = []
  }

  getNext() {
    return 'test'
  }
}
