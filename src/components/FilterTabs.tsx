import { Tabs, Tab } from "@mui/material";

interface MainDataGridProps {
  filterFields: string[];
  tabValue: number;
  settabValue: any;
}

export default function MainDataGrid({
  tabValue,
  settabValue,
  filterFields,
}: MainDataGridProps) {
  return (
    <Tabs
      value={tabValue}
      onChange={(event: React.SyntheticEvent, newValue: number) => {
        settabValue(newValue);
      }}
    >
      {filterFields.map((fieldName: string) => (
        <Tab key={fieldName} label={fieldName} />
      ))}
    </Tabs>
  );
}
