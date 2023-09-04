interface IsLoadingState {
    isLoading: boolean;
  }
  
  export enum IsLoadingActionsTypes {
    SET_LOADING = "SET_LOADING",
  }
  
  interface SetLoadingAction {
    type: IsLoadingActionsTypes.SET_LOADING;
    payload: boolean;
  }
  
  type IsLoadingTypes = SetLoadingAction;
  
  const initialState: IsLoadingState = {
    isLoading: false,
  };
  
  export const IsLoadingReducer = (
    state: IsLoadingState = initialState,
    action: IsLoadingTypes
  ): IsLoadingState => {
    switch (action.type) {
      case IsLoadingActionsTypes.SET_LOADING:
        return { ...state, isLoading: action.payload };
      default:
        return { ...state };
    }
  };