import ImageProcessorInterface from "../../interfaces/renderers/ImageProcessorInterface";
import sharp from "sharp";

export class SharpImageProcessor implements ImageProcessorInterface {
  public async createImageWithLayers(createImageWithLayersProps: {
    width: number;
    height: number;
    outputPath: string;
    assets: {
      path: string;
      latestModifiedTimestamp: number;
      xOffset: number;
      yOffset: number;
      zOffset: number;
    }[];
  }): Promise<void> {
    let normalizedAssets: any = [];

    for (const asset of createImageWithLayersProps.assets) {
      normalizedAssets.push({
        input: asset.path,
        left: Number(asset.xOffset),
        top: Number(asset.yOffset),
      });
    }

    await sharp({
      create: {
        width: createImageWithLayersProps.width,
        height: createImageWithLayersProps.height,
        channels: 4,
        background: 0x00000000,
      },
    })
      .composite(normalizedAssets)
      .toFile(createImageWithLayersProps.outputPath);
  }
}
