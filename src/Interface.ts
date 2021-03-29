interface State {
  [key: string]: any;
}

interface MandA {
  [key: string]: Function;
}

export interface Store {
  default: {
    namespace?: Boolean;
    name?: string;
    state?: State;
    mutations?: MandA;
    actions?: MandA;
    getters?: MandA;
  };
}

export interface Modules {
  [key: string]: Store;
}
