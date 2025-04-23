export function PageTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center h-16 text-white">
      <h2 className="text-5xl font-light text-gray-300 italic uppercase pb-10 pt-10">{title}</h2>
    </div>
  );
}

export default PageTitle;