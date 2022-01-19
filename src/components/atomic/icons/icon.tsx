import { iconName, IconSet } from "./logo";

interface IconProps {
  icon: iconName;
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
