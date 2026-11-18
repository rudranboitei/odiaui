import { createMcpHandler, McpServer } from "@modelcontextprotocol/server";
import { registerSearchTool, registerSourceTools } from "fumadocs-core/mcp";
import { createFromSource } from "fumadocs-core/search/server";
import { docsLlms, source } from "@/lib/source";

const handler = createMcpHandler(() => {
  const mcp = new McpServer(
    {
      name: "odiaui-docs",
      version: "1.0.0",
    },
    // The tools never change, so a stream to watch them would only keep a
    // serverless function open.
    { capabilities: { tools: { listChanged: false } } }
  );

  // `list_pages` and `get_page`
  registerSourceTools(mcp, source, docsLlms);
  // `search`
  registerSearchTool(mcp, createFromSource(source));

  return mcp;
});

export async function GET(request: Request) {
  return handler.fetch(request);
}

export async function POST(request: Request) {
  return handler.fetch(request);
}

export async function DELETE(request: Request) {
  return handler.fetch(request);
}
