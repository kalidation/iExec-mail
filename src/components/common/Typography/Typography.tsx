interface IProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2";
  style?: React.CSSProperties;
  className?: string;
}

const Typography = (props: IProps) => {
  const { children, style, variant, className } = props;

  switch (variant) {
    case "h1":
      return (
        <h1 className={className} style={{ fontSize: "32px", ...style }}>
          {children}
        </h1>
      );

    case "h2":
      return (
        <h2 className={className} style={{ fontSize: "28px", ...style }}>
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3 className={className} style={{ fontSize: "24px", ...style }}>
          {children}
        </h3>
      );

    case "h4":
      return (
        <h4 className={className} style={{ ...style }}>
          {children}
        </h4>
      );

    case "h5":
      return (
        <h5 className={className} style={{ ...style }}>
          {children}
        </h5>
      );

    case "h6":
      return (
        <h6 className={className} style={{ ...style }}>
          {children}
        </h6>
      );

    case "body2":
      return (
        <p className={className} style={{ fontSize: "14px", ...style }}>
          {children}
        </p>
      );

    case "body1":
    default:
      return (
        <p className={className} style={{ fontSize: "16px", ...style }}>
          {children}
        </p>
      );
  }
};

export default Typography;
