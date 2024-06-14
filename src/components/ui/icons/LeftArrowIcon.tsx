import { colors } from "../../../styles";

interface LeftArrowIconProps {
  width?: string;
  height?: string;
  color?: string;
}

const defaultColor = colors.main;

export const LeftArrowIcon = ({ width = "24", height = "24", color = defaultColor }: LeftArrowIconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Left Arrow Icon</title>
      <path d="M4 12.888V10.68L10.88 7V9.208L6.128 11.72V11.848L10.88 14.36V16.568L4 12.888Z" fill={color} />
      <path d="M14.4738 12.92V10.648H19.5938V12.92H14.4738Z" fill={color} />
    </svg>

  )
};