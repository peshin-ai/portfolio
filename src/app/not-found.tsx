import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section">
      <div className="shell">
        <div className="panel mx-auto flex max-w-2xl flex-col items-start gap-6 p-8 sm:p-12">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
            404
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            The page you requested does not exist.
          </h1>
          <p className="section-copy">
            The portfolio route may have changed,
            or the project detail page is not
            available.
          </p>
          <Button asChild>
            <Link href="/">
              Back to portfolio
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
