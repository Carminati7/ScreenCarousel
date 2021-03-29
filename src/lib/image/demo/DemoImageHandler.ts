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
  }

  getNext() {
    this.imgArray = this.imgGetter.getAllImage()
    console.log( this.imgArray)
    let result = this.imgArray[ this.index++ ].imgSrcString
    return result
  }
}
