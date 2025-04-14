import "../Styles/OnTopH.css";
interface OnTopHeaderProps {
  children: React.ReactNode;
  color: string;
  textColor: string;
}
export const PartHeader = ({
  children,
  color = "F8F8F8",
  textColor = "CEE27E",
}: OnTopHeaderProps) => {
  return (
    <div className="ConHeaderH" style={{ backgroundColor: `#${color}` }}>
      <h1 style={{ color: `#${textColor}` }} className="HeaderH">
        {children}
      </h1>
    </div>
  );
};
