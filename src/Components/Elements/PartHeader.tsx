import "../Styles/OnTopH.css";
interface OnTopHeaderProps {
  children: React.ReactNode;
  color: string | "F8F8F8";
  textColor: string | "CEE27E";
}
export const PartHeader = ({
  children,
  color,
  textColor,
}: OnTopHeaderProps) => {
  return (
    <div className="ConHeaderH" style={{ backgroundColor: `#${color}` }}>
      <h1 style={{ color: `#${textColor}` }} className="HeaderH">
        {children}
      </h1>
    </div>
  );
};
