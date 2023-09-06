export interface CategoryState {
    categories: Array<IItemCategory>;
    message: null | string;
    loading: boolean;
    categoryForUpdate: IItemCategory;
  }
  
  interface IItemCategory {
    id: number;
    name: string;
    // imageBase64: string;
  }
  
  export enum CategoryActionTypes {
    START_REQUEST_CATEGORY = "START_REQUEST_CATEGORY",
    SUCCESSFUL_REMOVE_CATEGORY = "REMOVE_CATEGORY_SUCCESSFUL",
    SET_ID_CATEGORY_FOR_UPDATE_CATEGORY= "SET_ID_CATEGORY_FOR_UPDATE",
    SERVER_CATEGORY_ERROR = "SERVER_CATEGORY_ERROR",
    SUCCESSFUL_REQUEST_LIST_CATEGORYES = "SUCCESSFUL_REQUEST_LIST_CATEGORYES",
    SUCCESSFUL_REQUEST_CATEGORY_BY_ID = "SUCCESSFUL_REQUEST_CATEGORY_BY_ID",
    SUCCESSFUL_REQUEST_CREATE_CATEGORY = "SUCCESSFUL_REQUEST_CREATE_CATEGORY",
    SUCCESSFUL_REQUEST_UPDATE_CATEGORY = "SUCCESSFUL_REQUEST_UPDATE_CATEGORY",
  }
  
  interface SUCCESSFUL_REQUEST_LIST_CATEGORYESAction {
    type: CategoryActionTypes.SUCCESSFUL_REQUEST_LIST_CATEGORYES;
    payload: any;
  }
  interface SUCCESSFUL_REQUEST_UPDATE_CATEGORYAction {
    type: CategoryActionTypes.SUCCESSFUL_REQUEST_UPDATE_CATEGORY;
    payload: any;
  }
  interface REMOVE_CATEGORY_SUCCESSFULAction {
    type: CategoryActionTypes.SUCCESSFUL_REMOVE_CATEGORY;
    payload: any;
  }
  interface SUCCESSFUL_REQUEST_CREATE_CATEGORYAction {
    type: CategoryActionTypes.SUCCESSFUL_REQUEST_CREATE_CATEGORY;
    payload: any;
  }
  interface SET_ID_CATEGORY_FOR_UPDATEAction {
    type: CategoryActionTypes.SET_ID_CATEGORY_FOR_UPDATE_CATEGORY;
    payload: number;
  }
  interface SUCCESSFUL_REQUEST_CATEGORY_BY_IDAction {
    type: CategoryActionTypes.SUCCESSFUL_REQUEST_CATEGORY_BY_ID;
    payload: IItemCategory;
  }
  interface StartRequestAction {
    type: CategoryActionTypes.START_REQUEST_CATEGORY;
  }
  interface SERVER_CATEGORY_ERRORAction {
    type: CategoryActionTypes.SERVER_CATEGORY_ERROR;
    payload: any;
  }
  
  export type CategoryesActions =
    | SUCCESSFUL_REQUEST_LIST_CATEGORYESAction
    | StartRequestAction
    | SERVER_CATEGORY_ERRORAction
    | SUCCESSFUL_REQUEST_CATEGORY_BY_IDAction
    | SET_ID_CATEGORY_FOR_UPDATEAction
    | SUCCESSFUL_REQUEST_CREATE_CATEGORYAction
    | REMOVE_CATEGORY_SUCCESSFULAction
    | SUCCESSFUL_REQUEST_UPDATE_CATEGORYAction;