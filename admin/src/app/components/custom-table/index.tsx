import { MaterialReactTable, MRT_TableInstance } from "material-react-table";

const CustomTable = <T extends {}>({
  table,
  className,
  ...props
}: {
  table: MRT_TableInstance<T>;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <div className={`custom-table p-4 ${className}`}>
      <MaterialReactTable table={table} {...props} />
    </div>
  );
};

export default CustomTable;
