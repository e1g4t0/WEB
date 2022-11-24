export default function Page({
  params,
  searchParams,
}: {
  params: { Id: string };
  searchParams: { id: string };
}) {
  return (
    <>
      <p> description of project # {params.Id}</p>
    </>
  );
}
