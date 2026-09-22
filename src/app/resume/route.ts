import { access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const resumePath = path.join(
    process.cwd(),
    "public",
    "resume.pdf",
  );

  try {
    await access(resumePath, constants.F_OK);
    return NextResponse.redirect(
      new URL("/resume.pdf", request.url),
    );
  } catch {
    return NextResponse.redirect(
      new URL("/#contact", request.url),
    );
  }
}
