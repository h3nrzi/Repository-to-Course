import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl space-y-4 px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Repository-to-Course</h1>
      <p className="text-muted-foreground">
        Project setup is ready. Course content will be added in later work.
      </p>
      <Button disabled>Courses coming soon</Button>
    </main>
  );
}
