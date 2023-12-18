import _ from "lodash";

import { TextStyleProp, ViewStyleProp } from "components/StyleProps";

export const useStyleProp = (style?: TextStyleProp | ViewStyleProp) => {
  return _.compact(style && Array.isArray(style) ? style : [style]);
};
