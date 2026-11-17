import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight">
          <Image
            src="/brand/odiaui-icon-black.svg"
            alt="odiaui logo"
            width={40}
            height={40}
            className="dark:hidden"
            unoptimized
          />
          <Image
            src="/brand/odiaui-icon-white.svg"
            alt="odiaui logo"
            width={40}
            height={40}
            className="hidden dark:block"
            unoptimized
          />
          odiaui
        </h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4">
          <h2 className="text-sm text-muted-foreground">Install a component</h2>
          <div className="rounded-md bg-muted p-4">
            <code className="text-sm">bunx shadcn@latest add @odiaui/button</code>
          </div>
        </div>
        <div className="flex gap-4">
          <a
            href="/docs"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Documentation
          </a>
          <a
            href="/r/registry.json"
            className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
          >
            View Registry
          </a>
        </div>
      </main>
    </div>
  );
}
