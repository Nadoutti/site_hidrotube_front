import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// função simples para formatar número
function formatNumber(n) {
  if (n === null || n === undefined) return "-";
  return Number(n).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function TabelaTubos({ dataRows = [], cols = [] }) {
  return (
    <Card className="rounded-none">
      <CardContent>
        <div className="flex flex-col justify-between mb-4">
          <h3 className="text-2xl font-medium">Tabela de Tubos</h3>
          <p className="text-sm text-muted-foreground">Peso teórico (kg/6m)</p>
        </div>

        <div className="w-full overflow-x-auto">
          <Table className="min-w-[720px] table-fixed">
            <TableHeader>
              <TableRow>
                {cols.map((colName, idx) => (
                  <TableHead
                    key={idx}
                    className="text-lg text-center border border-border whitespace-normal break-words"
                  >
                    {colName}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {dataRows.map((r, idx) => (
                <TableRow key={idx} className={idx % 2 === 0 ? "bg-muted/40" : ""}>
                  {Object.values(r).map((val, jdx) => (
                    <TableCell key={jdx} className="text-center border border-border">
                      {typeof val === "number" ? formatNumber(val) : val ?? "-"}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

