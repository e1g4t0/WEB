export default function Page({
  params,
  searchParams,
}: {
  params: { Id: string; description: string };
  searchParams: { id: string };
}) {
  return (
    <>
      <p> description of project # {params.Id} {params.description}</p>
    </>
  );
}
