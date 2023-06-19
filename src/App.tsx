import { useState } from "react";
import "./App.css";
import rows from "@data/rows.json";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, blue } from "@mui/material/colors";
import { Grid, Box, IconButton } from "@mui/material";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
// import columns from "./data/columns.json";

import MainDataGrid from "@components/MainDataGrid";
import FilterByName from "@components/FilterByName";
import Readme from "@components/Readme";

interface DataRow {
  id: number;
}

const rowWithIds: DataRow[] = rows.map((row: any, idx: number) => {
  return {
    id: idx,
    ...row,
  };
});

const theme = createTheme({
  palette: {
    primary: green,
    secondary: blue,
  },
});

function App() {
  const filterFields = [
    { field: "Nom vernaculaire", color: "primary" },
    { field: "Nom scientifique", color: "secondary" },
  ];
  // const [tabValue, settabValue] = useState(0);
  const [filterIds, setFilterIds] = useState<number[]>([]);

  const filteredRows: DataRow[] = filterIds.length
    ? rowWithIds.filter((row: DataRow) => filterIds.includes(row.id))
    : rowWithIds;

  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Readme />
        <Grid container spacing={2} sx={{ height: "100vh", p: 1 }}>
          {filterFields.map((fieldData) => (
            <Grid
              key={fieldData.field}
              item
              xs={6}
              style={{ height: "30%", overflowY: "scroll" }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Box>
                  {fieldData.field}
                  <IconButton
                    aria-label="clear"
                    onClick={() => setFilterIds([])}
                  >
                    <FilterAltOffIcon />
                  </IconButton>
                </Box>
                <FilterByName
                  rows={rowWithIds}
                  filterField={fieldData}
                  filterIds={filterIds}
                  setFilterIds={setFilterIds}
                />
              </Box>
            </Grid>
          ))}
          <Grid item xs={12} style={{ height: "70%", overflowY: "scroll" }}>
            <Box>
              <MainDataGrid rows={filteredRows} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
