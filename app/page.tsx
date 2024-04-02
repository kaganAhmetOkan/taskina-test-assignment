import PageSelector from "@/components/PageSelector/PageSelector";

export default function Home() {
  const pages = [
    "Page 1",
    "Page 2",
    "Page 3",
    "Page 4",
    "Page 5",
    "Page 6",
  ];

  return (
    <div className="page">
      <PageSelector pages={pages} />
    </div>
  );
};