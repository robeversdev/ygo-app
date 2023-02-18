import { AttributeEnum, ArributeImageNames, TypingEnum, TypingImageNames } from "./Enums";

export default class ImageIconHelper {


    static getAttibuteImage = (input : AttributeEnum) => {

        let imageName : string;

        switch (input)
        {
          case AttributeEnum.WATER: return imageName = ArributeImageNames.WATER;
          case AttributeEnum.EARTH: return imageName = ArributeImageNames.EARTH;
          case AttributeEnum.WIND: return imageName = ArributeImageNames.WIND;
          case AttributeEnum.FIRE: return imageName = ArributeImageNames.FIRE;
          default: imageName = "";
        }

        return imageName;
    }

    static getTypingImage = (input : TypingEnum) => {
        let imageName : string;

        switch (input)
        {
            case TypingEnum.DRAGON: return imageName = TypingImageNames.DRAGON;
            default: imageName = "";
        }

        return imageName;
    }
}