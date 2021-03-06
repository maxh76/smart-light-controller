import BrightnessTrait from "./traits/BrightnessTrait";
import ColorTrait from "./traits/ColorTrait";
import OnOffTrait from "./traits/OnOffTrait";
import WakeModeTrait from "./traits/WakeModeTrait";

export default interface DeviceState extends BrightnessTrait, OnOffTrait, WakeModeTrait {
  Color: ColorTrait
}