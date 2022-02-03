import { iconNames as logoIconName, IconSet as logoIconSet } from "./logo";
import { iconName as arrowIconName, IconSet as arrowIconSet } from "./arrow";

type icon = {
  viewBox: string;
  path: JSX.Element | string;
};

// type IconName = "logo" | "menu" | "triangle";

type IconName = logoIconName | arrowIconName; // & | 제대로 구분해야 &=> NEVER나옴 
// export enum IconName {
//   logo = "logo",
//   menu = "menu"
// }
const IconSet:Record<IconName, icon> = Object.assign({},logoIconSet,arrowIconSet);
// console.log("IconSet",IconSet)
// https://stackoverflow.com/questions/48478361/how-to-merge-two-enums-in-typescript


interface IconProps {
  icon: IconName;
  size: number;
  color?: string;
}

const Icon = ({ icon, size, color }: IconProps) => {
  const path = IconSet[icon].path;
  return (<svg
    height={size}
    viewBox={IconSet[icon].viewBox}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    { typeof path === 'object'?
       path:
       <path d={path} />}
  </svg>)
};
export default Icon;
