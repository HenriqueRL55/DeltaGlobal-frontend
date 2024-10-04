// React
import React, { useState } from "react";

// Material UI Components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TablePagination,
  TableSortLabel,
} from "@mui/material";

// Material UI Icons
import SortIcon from "@mui/icons-material/Sort";

// Styled Components
import { CustomTableContainer } from "./styleSearch";

// Data
import productData from "../../data/productData";


const sumOneDay = (date) => {
  const result = new Date(date);
  result.setDate(result.getDate() + 1);
  return result;
};

const isDateInRange = (dataInicio, dataFim, startDate, endDate) => {
  const productStart = new Date(dataInicio);
  const productEnd = new Date(dataFim);
  const filterStart = startDate ? new Date(startDate) : null;
  const filterEnd = endDate ? sumOneDay(new Date(endDate)) : null;

  const startsWithinRange = filterStart ? productStart >= filterStart : true;

  const endsWithinRange = filterEnd ? productEnd <= filterEnd : true;

  return startsWithinRange && endsWithinRange;
};

const ProductTable = ({ filters }) => {
  const [page, setPage] = useState(0);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const rowsPerPage = 4;

  const filteredData = productData
    .filter((row) => {
      const matchesSearch = filters.search
        ? row.id.includes(filters.search)
        : true;
      const matchesProduct = filters.product
        ? row.produto === filters.product
        : true;
      const matchesStatus = filters.status
        ? row.status === filters.status
        : true;

      const matchesDateRange = isDateInRange(
        row.dataInicio,
        row.dataFim,
        filters.startDate,
        filters.endDate
      );

      return (
        matchesSearch && matchesProduct && matchesStatus && matchesDateRange
      );
    })
    .sort((a, b) => {
      if (sortConfig.key) {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
      }
      return 0;
    });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <CustomTableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ width: "16.66%" }}>
                ID
              </TableCell>
              <TableCell align="left" sx={{ width: "50%" }}>
                <TableSortLabel
                  active={sortConfig.key === "produto"}
                  direction={
                    sortConfig.key === "produto" ? sortConfig.direction : "asc"
                  }
                  onClick={() => handleSort("produto")}
                  IconComponent={SortIcon}
                  hideSortIcon={false}
                >
                  PRODUTO
                </TableSortLabel>
              </TableCell>
              <TableCell align="left" sx={{ width: "16.66%" }}>
                <TableSortLabel
                  active={sortConfig.key === "status"}
                  direction={
                    sortConfig.key === "status" ? sortConfig.direction : "asc"
                  }
                  onClick={() => handleSort("status")}
                  IconComponent={SortIcon}
                  hideSortIcon={false}
                >
                  STATUS
                </TableSortLabel>
              </TableCell>
              <TableCell align="left" sx={{ width: "16.66%" }}>
                <TableSortLabel
                  active={sortConfig.key === "data"}
                  direction={
                    sortConfig.key === "data" ? sortConfig.direction : "asc"
                  }
                  onClick={() => handleSort("data")}
                  IconComponent={SortIcon}
                  hideSortIcon={false}
                >
                  DATA
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#F9F9F9" : "#FFF",
                  }}
                >
                  <TableCell>
                    <Chip
                      label={row.id}
                      sx={{
                        backgroundColor: "#EAEDF2",
                        color: "#868EA4",
                        border: "none",
                        borderRadius: "4px",
                        fontWeight: "medium",
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      width: "50%",
                      color: "#666666",
                      fontWeight: "medium",
                    }}
                  >
                    {row.produto}
                  </TableCell>
                  <TableCell sx={{ width: "16.66%" }}>
                    <Chip
                      label={row.status}
                      sx={{
                        backgroundColor:
                          row.status === "Ativo" ? "#D8EFEE" : "#fff",
                        color: row.status === "Ativo" ? "#00C1B4" : "#333333",
                        border:
                          row.status === "Inativo"
                            ? "1px solid #C2C2C2"
                            : "none",
                        borderRadius: "4px",
                        fontWeight: "bold",
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ width: "16.66%" }}>
                    <Chip
                      label={`${new Date(
                        row.dataInicio
                      ).toLocaleDateString()} a ${new Date(
                        row.dataFim
                      ).toLocaleDateString()}`}
                      sx={{
                        backgroundColor:
                          row.status === "Ativo" ? "#D8EFEE" : "#F4DFE3",
                        color: row.status === "Ativo" ? "#00C1B4" : "#FF4B6A",
                        border: "none",
                        borderRadius: "4px",
                        fontWeight: "bold",
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        <TablePagination
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[]}
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} de ${count}`
          }
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            color: "#A5A5A5",
          }}
        />
      </CustomTableContainer>
    </>
  );
};

export default ProductTable;
