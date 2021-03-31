import { ImageGetter } from "./abstractGetter"
import { Image } from './Image'
const axios = require('axios').default;

const REFRESH_RATE = 600000

export class GitHubGetter implements ImageGetter {
  private path: string
  private imgArray: Image[]
  constructor( imgLocation: string) {
    this.path = imgLocation
    this.imgArray = []
    this.readDir()
    setInterval( this.readDir, REFRESH_RATE )
  }

  readDir() {
    axios.get( this.path )
      .then( (response) => {
        this.imgArray = []
        response.data.forEach( elem => {
          if ( elem.name !== 'donotremove.jpeg' ) {
            let img: Image = {
              extension: elem.name.split('.').pop(),
              data: elem.name,
              srcString: elem.download_url
            }
            this.imgArray.push( img )
          }
        })
        console.log('image array', this.imgArray)
        // console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  getAllImage():Image[] {
    return this.imgArray
  }
}
