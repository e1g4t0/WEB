export default function ExhibitLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>
        <h1>Project</h1>
      </div>
      {children}
    </section>
  );
}
