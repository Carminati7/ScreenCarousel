import { IImageProcessor } from './IImageProcessor'
import { DemoImageHandler } from './demo/DemoImageHandler'
import { StandardGetter } from './imageGetter/standardGetter';
import { GitHubGetter } from './imageGetter/gitHubGetter';

abstract class ImgProcessorFactory {
  abstract createProcessor( options?: any): IImageProcessor;
}

class TestProcessor extends ImgProcessorFactory{
  createProcessor( mainPath: string ) {
    let getter = new StandardGetter( mainPath + '/assets/img/')
    return new DemoImageHandler( getter );
  }
}

class TestGitProcessor extends ImgProcessorFactory{
  createProcessor( mainPath: string ) {
    let getter = new GitHubGetter( 'https://api.github.com/repos/Carminati7/ImageCarouselHost/contents/pc1')
    return new DemoImageHandler( getter );
  }
}

export {
  ImgProcessorFactory,
  TestProcessor,
  TestGitProcessor,
  IImageProcessor
}
