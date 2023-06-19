import { DataGrid } from "@mui/x-data-grid";

interface MainDataGridProps {
  rows: any;
}

export default function MainDataGrid({ rows }: MainDataGridProps) {
  const columnsGrid = [
    { field: "Nom scientifique", width: 180 },
    { field: "Nom vernaculaire", width: 180 },
    { field: "Partie de plante (EMA)", width: 180 },
    { field: "Usage ", width: 100 },
    { field: "Parties utilis\u00e9es dans les C.A.", width: 180 },
    { field: "Contre-indications", width: 300 },
    { field: "Interactions m\u00e9dicamenteuses", width: 300 },
    {
      field:
        "Non recommandation/contre-indication pour les femmes enceintes ou allaitantes",
      width: 300,
    },
    {
      field:
        "Non recommandation/contre-indication pour les populations p\u00e9diatriques",
      width: 300,
    },
  ];
  return (
    <DataGrid
      rows={rows}
      getRowHeight={() => "auto"}
      sx={{
        "&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell": {
          py: 1,
        },
        "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
          py: "15px",
        },
        "&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell": {
          py: "22px",
        },
        ".MuiDataGrid-columnHeaderTitle": {
          fontWeight: "bold !important",
        },
      }}
      columns={columnsGrid}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      // checkboxSelection
    />
  );
}
