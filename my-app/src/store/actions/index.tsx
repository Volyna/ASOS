import * as UserActionCreators from "./userActions";
import * as CategoryActionCreators from "./categoryActions";
import * as ProductsActionCreators from "./productActions";

export default {
  ...UserActionCreators,
  ...CategoryActionCreators,
  ...ProductsActionCreators,
};
