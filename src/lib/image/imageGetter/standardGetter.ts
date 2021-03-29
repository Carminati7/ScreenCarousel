import { ImageGetter } from "./abstractGetter"
import { Image } from './Image'
import * as fs from 'fs';
import { convertBase64 } from "../convertBase64";

export class StandardGetter implements ImageGetter {
  private path: string

  constructor( imgLocation: string) {
    this.path = imgLocation
  }

  readDir() {
    return fs.readdirSync( this.path )
  }

  getAllImage():Image[] {
    let arr: Image[] = []
    this.readDir().forEach( imgPath => {
      arr.push( convertBase64( this.path + imgPath ) )
    })
    return arr
  }
}
