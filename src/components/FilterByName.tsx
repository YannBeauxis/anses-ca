import { useMemo } from "react";
import { Chip, Grid } from "@mui/material";

interface MainDataGridProps {
  rows: any;
  filterField: any;
  filterIds: number[];
  setFilterIds: any;
}

export default function MainDataGrid({
  rows,
  filterField,
  filterIds,
  setFilterIds,
}: MainDataGridProps) {
  function toggleFilter(rowId: number) {
    const newfilterIds = [...filterIds];
    const index = newfilterIds.indexOf(rowId);
    index > -1 ? newfilterIds.splice(index, 1) : newfilterIds.push(rowId);

    setFilterIds(newfilterIds);
  }

  const rowSorted = useMemo(() => {
    var sorted = [...rows];
    return sorted.sort((a: any, b: any) => {
      if (a[filterField.field] > b[filterField.field]) return 1;
      if (a[filterField.field] < b[filterField.field]) return -1;
      return 0;
    });
  }, [rows, filterField.field]);

  return (
    <Grid container spacing={2}>
      {rowSorted.map((row: any) => (
        <Grid key={row.id} item xs={12} sm={6} md={4}>
          <Chip
            color={filterField.color}
            sx={{ width: "100%" }}
            label={row[filterField.field]}
            onClick={() => toggleFilter(row.id)}
            variant={filterIds.includes(row.id) ? "filled" : "outlined"}
          />
        </Grid>
      ))}
    </Grid>
  );
}
