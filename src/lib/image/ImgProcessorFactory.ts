import { IImageProcessor } from './IImageProcessor'
import { DemoImageHandler } from './demo/DemoImageHandler'
import { StandardGetter } from './imageGetter/standardGetter';

abstract class ImgProcessorFactory {
  abstract createProcessor( options?: any): IImageProcessor;
}

class TestProcessor extends ImgProcessorFactory{
  createProcessor( mainPath: string ) {
    let getter = new StandardGetter( mainPath + '/assets/img/')
    return new DemoImageHandler( getter );
  }
}

export {
  ImgProcessorFactory,
  TestProcessor
}
