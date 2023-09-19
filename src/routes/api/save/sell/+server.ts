import { text } from "@sveltejs/kit";
import { writeFile, readFile } from "fs/promises";
import type { RequestHandler } from "../$types";

export const POST: RequestHandler = async ({ request }) => {
    let data = await request.text();

    data = `import type { Seller } from "./core";

export const sellPrice: Seller[] = ${data}`;

    await writeFile(process.cwd() + "/src/lib/core/sell.ts", data, {
        encoding: "utf-8"
    });

    return text("{ success: true }");
};
