import * as fs from 'fs';
import * as path from 'path';
import { Image } from './imageGetter/Image'
export function convertBase64( imgPath: string  ): Image {
  let data = fs.readFileSync( imgPath )
  let extensionName = path.extname( imgPath );
  let base64Image = data.toString('base64');
  let imgSrcString = `data:image/${extensionName.split('.').pop()};base64,${base64Image}`;
  return {
    extension: extensionName.split('.').pop(),
    data: base64Image,
    srcString: imgSrcString
  }
}


// fs.readFile( imgPath, (err, data)=>{
//
//   //error handle
//   if(err) res.status(500).send(err);
//
//   //get image file extension name
//   let extensionName = path.extname(`${process.cwd()}/pics/demopic.png`);
//
//   //convert image file to base64-encoded string
//   let base64Image = new Buffer(data, 'binary').toString('base64');
//
//   //combine all strings
//   let imgSrcString = `data:image/${extensionName.split('.').pop()};base64,${base64Image}`;
//
//   //send image src string into jade compiler
//   res.render('index', {imgSrcString});
// })
