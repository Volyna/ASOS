import * as UserActionCreators from "./userActions";
import * as CategoryActionCreators from "./categoryActions";
import * as ProductsActionCreators from "./productActions";
import * as BasketActionCreators from "./BasketActions";
import * as likeActionCreators from "./likeActions";

export default {
  ...UserActionCreators,
  ...CategoryActionCreators,
  ...ProductsActionCreators,
  ...BasketActionCreators,
  ...likeActionCreators,
};
