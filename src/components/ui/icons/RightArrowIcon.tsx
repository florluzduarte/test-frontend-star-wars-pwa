import { colors } from "../../../styles";

interface RightArrowIconProps {
  width?: string;
  height?: string;
  color?: string;
}

const defaultColor = colors.main;

export const RightArrowIcon = ({ width = "24", height = "24", color = defaultColor }: RightArrowIconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Right Arrow Icon</title>
      <path d="M12.9541 14.6959L17.7061 12.1839V12.0559L12.9541 9.54394V7.33594L19.8341 11.0159V13.2239L12.9541 16.9039V14.6959Z" fill={color} />
      <path d="M4.24023 13.2559V10.9839H9.36023V13.2559H4.24023Z" fill={color} />
    </svg>
  )
};