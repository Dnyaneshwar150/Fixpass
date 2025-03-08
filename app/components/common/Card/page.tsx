import {
    Card as MuiCard,
    CardProps,
    Fade,
    SxProps,
    Tooltip,
  } from "@mui/material";
  interface Props {
    children?: React.ReactNode;
    sxStyle?: SxProps;
    isTableCard?: boolean;
    enableScrollbar?: boolean;
    tooltipTitle?: string;
  }
  const Card = (props: Props & CardProps) => {
    const {
      children,
      enableScrollbar = false,
      sxStyle = {},
      isTableCard,
      tooltipTitle,
      ...cardProps
    } = props;
    return (
      <Fade in timeout={{ enter: 2000, exit: 2000 }}>
        <Tooltip title={tooltipTitle} disableHoverListener={!tooltipTitle}>
          <MuiCard
            {...cardProps}
            className={enableScrollbar ? "add-scrollbar" : ""}
            variant="elevation"
            sx={{
              width: "100%",
              height: "auto",
              padding: isTableCard ? "1.875rem" : "1rem",
              color: "var(--black)",
              ...sxStyle,
            }}
          >
            {children && children}
          </MuiCard>
        </Tooltip>
      </Fade>
    );
  };
  
  export default Card;
  