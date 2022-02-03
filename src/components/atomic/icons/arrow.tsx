export type iconName = "triangle";

type icon = {
  viewBox: string;
  path: JSX.Element | string;
};

const IconSet: Record<iconName, icon> = {
  'triangle': {
    viewBox: "0 0 11 6",
    path: "M5.77295 5.5L10.7729 0.5H0.772949L5.77295 5.5Z",
  },
}

export { IconSet }