import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';

const app = express();

app.set('view engine', 'jade');

app.get('/readPNG', (req, res)=>{

    //read image file
    fs.readFile(`${process.cwd()}/pics/demopic.png`, (err, data)=>{

        //error handle
        if(err) res.status(500).send(err);

        //get image file extension name
        let extensionName = path.extname(`${process.cwd()}/pics/demopic.png`);

        //convert image file to base64-encoded string
        let base64Image = new Buffer(data, 'binary').toString('base64');

        //combine all strings
        let imgSrcString = `data:image/${extensionName.split('.').pop()};base64,${base64Image}`;

        //send image src string into jade compiler
        res.render('index', {imgSrcString});
    })
});

app.listen(2222);
