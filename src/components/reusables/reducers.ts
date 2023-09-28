type InputType =
  | { type: "insertValue"; field: string; fieldValue: any }
  | { type: "removeValue"; values: any }
  | { type: "insertAllValues"; serverData: any };

type LoadingTypes =
  | { type: "setLoading"; loadingType: string; value: boolean }
  | { type: "setAllPreLoading"; value: any };

export const inputReducer = (state: any, action: InputType) => {
  switch (action.type) {
    case "insertValue":
      return { ...state, [action.field]: action.fieldValue };
    case "removeValue":
      return action.values;
    case "insertAllValues":
      return { ...state, ...action.serverData };
    default:
      return state;
  }
};

export const loadingReducer = (state: any, action: LoadingTypes) => {
  switch (action.type) {
    case "setLoading":
      return { ...state, [action.loadingType]: action.value };
    case "setAllPreLoading":
      return { ...state, ...action.value };
    default:
      return state;
  }
};
