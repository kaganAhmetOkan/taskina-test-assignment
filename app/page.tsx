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
      <div className="showcase">
        <div>
          <span>Select all does not disable fields</span>
          <PageSelector pages={pages} />
        </div>
        <div>
          <span>Select all disables fields</span>
          <PageSelector pages={pages} selectAllDisables />
        </div>
      </div>
      <div className="links">
        <a href="https://github.com/kaganAhmetOkan/taskina-test-assignment">GitHub Repository</a>
        <a href="https://www.upwork.com/freelancers/~013128e1c954c7dc29">Kağan Ahmet Okan</a>
      </div>
    </div>
  );
};