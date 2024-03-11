import React, { ButtonHTMLAttributes, useRef } from "react";
import "./Button.css";
import { COLORS } from "../../../utils/constants";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  labelWhenDisabled?: string;
  isAnimateHover?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

export const Button = (props: IProps) => {
  const { label, isAnimateHover, isActive, onClick, ...rest } = props;
  const { style, ...buttonProps } = rest;

  const ref = useRef<HTMLButtonElement>(null);

  const handleHoverAnimation = (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const rect = ev.currentTarget.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;

    ev?.currentTarget.style.setProperty("--x", x + "px");
    ev?.currentTarget.style.setProperty("--y", y + "px");
  };

  return (
    <button
      ref={ref}
      className={
        isAnimateHover
          ? "mouse-cursor-gradient-tracking"
          : "button-not-animated"
      }
      style={{
        backgroundColor: isActive ? COLORS.yellow : COLORS.yellowDisabled,
        ...style,
      }}
      disabled={!isActive}
      onMouseMoveCapture={isAnimateHover ? handleHoverAnimation : undefined}
      onClick={() => (onClick ? onClick() : undefined)}
      {...buttonProps}
    >
      <span
        style={{
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
      >
        {label}
      </span>
    </button>
  );
};

export default Button;
