import { IImageProcessor } from '../IImageProcessor'
import { ImageGetter } from '../imageGetter/abstractGetter'

export class DemoImageHandler implements IImageProcessor {

  imgGetter: ImageGetter
  private imgArray: any[]
  private index

  constructor( imgGetter: ImageGetter ) {
    this.imgGetter = imgGetter
    this.imgArray = []
    this.index = 0
    this.imgArray = this.imgGetter.getAllImage()
  }

  getNext() {
    let result = this.imgArray[ this.index ].srcString
    console.log( this.imgArray)
    this.index = (this.index + 1) % this.imgArray.length
    return result
  }
}
