import * as UserActionCreators from "./userActions";
import * as CategoryActionCreators from "./categoryActions";
import * as ProductsActionCreators from "./productActions";
import * as BasketActionCreators from "./BasketActions";

export default {
  ...UserActionCreators,
  ...CategoryActionCreators,
  ...ProductsActionCreators,
  ...BasketActionCreators,
};
