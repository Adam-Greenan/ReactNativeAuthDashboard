import { TextStyleProp, ViewStyleProp } from "components/StyleProps";
import _ from "lodash";

export const useStyleProp = (style?: TextStyleProp | ViewStyleProp) => {
  return _.compact(style && Array.isArray(style) ? style : [style]);
};
