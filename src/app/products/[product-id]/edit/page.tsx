export default function EditProductPage({ params }: { params: { 'product-id': string } }) {
  return (
    <div>
      <h1>Edit Product</h1>
      <p>Editing product ID: {params['product-id']}</p>
    </div>
  );
}