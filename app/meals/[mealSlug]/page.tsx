function Something({ params }: { params: { slug: string } }) {
  return (
    <div>
      Something <span>{params.slug}</span>
    </div>
  );
}
export default Something;
