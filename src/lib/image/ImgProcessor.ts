import { IImageProcessor } from './IImageProcessor'
import { DemoImageHandler } from './demo/DemoImageHandler'
abstract class ImgProcessor {
  abstract createProcessor(): IImageProcessor;
}

class TestProcessor {
  createProcessor() {
      return new DemoImageHandler();
  }
}

export {
  ImgProcessor,
  TestProcessor
}
