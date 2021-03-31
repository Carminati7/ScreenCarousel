import { IImageProcessor } from '../IImageProcessor'
import { ImageGetter } from '../imageGetter/abstractGetter'

const REFRESH_WAIT = 60000

export class DemoImageHandler implements IImageProcessor {

  imgGetter: ImageGetter
  private imgArray: any[]
  private index

  constructor( imgGetter: ImageGetter ) {
    this.imgGetter = imgGetter
    this.imgArray = []
    this.index = 0
    this.updateImgArray()
    setInterval( () => { this.updateImgArray() }, REFRESH_WAIT);
  }

  private updateImgArray() {
    this.imgArray = this.imgGetter.getAllImage()
    if ( this.index >= this.imgArray.length ) {
      this.index = 0
    }
  }

  getNext() {
    if ( this.imgArray.length === 0 ) {
      this.updateImgArray()
      return ''
    }
    let result = this.imgArray[ this.index ].srcString
    console.log( this.imgArray)
    this.index = (this.index + 1) % this.imgArray.length
    return result
  }
}
