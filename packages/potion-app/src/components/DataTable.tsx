import { Typography } from "potion-ui";
import { useState } from "react";

interface Column<T> {
  key: keyof T;
  header: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  itemsPerPage?: number;
}

function DataTable<T>({
  data,
  columns,
  itemsPerPage = 10,
}: DataTableProps<T>): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages: number = Math.ceil(data.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentData: T[] = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full">
      <table className="w-full border-collapse" aria-label="Data table">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="p-2 text-left font-semibold"
                scope="col"
              >
                <Typography className="font-bold">{column.header}</Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {columns.map((column) => (
                <td key={String(column.key)} className="p-2 border-t">
                  <Typography>{String(row[column.key])}</Typography>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm text-gray-700">
          Showing {startIndex + 1} to {Math.min(endIndex, data.length)} of{" "}
          {data.length} entries
        </p>
        <nav aria-label="Pagination">
          <ul className="flex space-x-2">
            <li>
              <button
                className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li key={index}>
                <button
                  className={`px-3 py-1 rounded border ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "border-gray-300"
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                  aria-label={`Page ${index + 1}`}
                  aria-current={currentPage === index + 1 ? "page" : undefined}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default DataTable;
