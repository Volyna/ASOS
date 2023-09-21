import * as UserActionCreators from "./UserActions";
import * as CategoryActionCreators from "./CategoryActions";
import * as ProductsActionCreators from "./ProductActions";
import * as BasketActionCreators from "./BasketActions";
import * as likeActionCreators from "./LikeActions";

export default {
  ...UserActionCreators,
  ...CategoryActionCreators,
  ...ProductsActionCreators,
  ...BasketActionCreators,
  ...likeActionCreators,
};
