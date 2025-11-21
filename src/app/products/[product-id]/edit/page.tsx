export default async function EditProductPage({
  params,
}: {
  params: Promise<{ "product-id": string }>;
}) {
  const { "product-id": productId } = await params;

  return (
    <div>
      <h1>Edit Product</h1>
      <p>Editing product ID: {productId}</p>
    </div>
  );
}
