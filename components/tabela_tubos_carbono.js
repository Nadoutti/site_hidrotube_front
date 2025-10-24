import React from "react";

// Componente pronto para Next.js + shadcn/ui + Tailwind (JavaScript)
// Salve como `components/TabelaTubos.jsx` e importe onde quiser (ex: app/page.jsx)

import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const rows = [
  { diamNom: "1/4\"", diamExt: "13,50",x: "x", espParede: "2,00", pesoPreto: 3.45, pesoGalv: null },
  { diamNom: "3/8\"", diamExt: "17,20",x: "x", espParede: "2,00", pesoPreto: 4.50, pesoGalv: 4.80 },
  { diamNom: "1/2\"", diamExt: "21,30",x: "x", espParede: "2,25", pesoPreto: 6.46, pesoGalv: 6.86 },
  { diamNom: "3/4\"", diamExt: "26,90",x: "x", espParede: "2,25", pesoPreto: 8.30, pesoGalv: 8.79 },
  { diamNom: "1\"", diamExt: "33,70",x: "x", espParede: "2,65", pesoPreto: 12.29, pesoGalv: 12.81 },
  { diamNom: "1.1/4\"", diamExt: "42,40",x: "x", espParede: "2,65", pesoPreto: 15.81, pesoGalv: 16.64 },
  { diamNom: "1.1/2\"", diamExt: "48,30",x: "x", espParede: "3,00", pesoPreto: 20.36, pesoGalv: 21.33 },
  { diamNom: "2\"", diamExt: "60,30",x: "x", espParede: "3,00", pesoPreto: 25.74, pesoGalv: 26.97 },
  { diamNom: "2.1/2\"", diamExt: "76,10",x: "x", espParede: "3,35", pesoPreto: 36.45, pesoGalv: 38.04 },
  { diamNom: "3\"", diamExt: "88,90",x: "x", espParede: "3,35", pesoPreto: 42.86, pesoGalv: 44.74 },
  { diamNom: "4\"", diamExt: "114,30",x: "x", espParede: "3,75", pesoPreto: 61.98, pesoGalv: 64.47 },
];

function formatNumber(n) {
  if (n === null || n === undefined) return "-";
  return n.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function TabelaTubos(data) {
  return (
    <Card className="rounded-none">
      <CardContent>
        <div className="flex flex-col justify-between mb-4">
          <h3 className="text-2xl font-medium">Tabela de Tubos</h3>
          <p className="text-sm text-muted-foreground">Peso teórico (kg/6m)</p>
        </div>

        <div className="w-full overflow-x-auto">
          <Table className="min-w-[720px]">
            <TableHeader>
              <TableRow>
                <TableHead className="text-lg border border-border">DIÂMETRO NOMINAL (POL.)</TableHead>
                <TableHead className="text-lg border border-border">DIÂMETRO EXTERNO (M.M.) X</TableHead>
                <TableHead className="text-lg border border-border">X</TableHead>
                <TableHead className="text-lg border border-border">ESP. DA PAREDE (M.M.)</TableHead>
                <TableHead className="text-lg text-center border border-border">PESO TEÓRICO (KG/6M) PRETO</TableHead>
                <TableHead className="text-lg text-center border border-border">PESO TEÓRICO (KG/6M) GALV.</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map(function (r, idx) {
                return (
                  <TableRow key={idx} className={idx % 2 === 0 ? "bg-muted/40" : ""}>
                    <TableCell className="text-center border border-border">{r.diamNom}</TableCell>
                    <TableCell className="text-center border border-border">{r.diamExt}</TableCell>
                    <TableCell className="text-center border border-border">{r.x}</TableCell>
                    <TableCell className="text-center border border-border ">{r.espParede}</TableCell>
                    <TableCell className="text-center border border-border">{formatNumber(r.pesoPreto)}</TableCell>
                    <TableCell className="text-center border border-border">{formatNumber(r.pesoGalv)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

      </CardContent>
    </Card>
  );
}
