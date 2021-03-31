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

// data example
// data: [
//     {
//       name: 'donotremove.jpeg',
//       path: 'pc1/donotremove.jpeg',
//       sha: '919b4e9a45ae1211b28006182cea606a57b1fc21',
//       size: 2735,
//       url: 'https://api.github.com/repos/Carminati7/ImageCarouselHost/contents/pc1/donotremove.jpeg?ref=main',
//       html_url: 'https://github.com/Carminati7/ImageCarouselHost/blob/main/pc1/donotremove.jpeg',
//       git_url: 'https://api.github.com/repos/Carminati7/ImageCarouselHost/git/blobs/919b4e9a45ae1211b28006182cea606a57b1fc21',
//       download_url: 'https://raw.githubusercontent.com/Carminati7/ImageCarouselHost/main/pc1/donotremove.jpeg',
//       type: 'file',
//       _links: [Object]
//     },
//     {
//       name: 'testimg.jpeg',
//       path: 'pc1/testimg.jpeg',
//       sha: 'a211481aaa87313637448b02c91b3b87f0b47d48',
//       size: 56119,
//       url: 'https://api.github.com/repos/Carminati7/ImageCarouselHost/contents/pc1/testimg.jpeg?ref=main',
//       html_url: 'https://github.com/Carminati7/ImageCarouselHost/blob/main/pc1/testimg.jpeg',
//       git_url: 'https://api.github.com/repos/Carminati7/ImageCarouselHost/git/blobs/a211481aaa87313637448b02c91b3b87f0b47d48',
//       download_url: 'https://raw.githubusercontent.com/Carminati7/ImageCarouselHost/main/pc1/testimg.jpeg',
//       type: 'file',
//       _links: [Object]
//     }
//   ]
// }

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
