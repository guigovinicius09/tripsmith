import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const data = await req.json();

  const filePath = path.join(process.cwd(), "planejamento.json");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return NextResponse.json({
    message: "planejamento salvo co sucesso",
    data,
  });
}
