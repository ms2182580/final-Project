import RootLayout from "./RootLayout";
import Header from "./Header";
import Table from "./Table";
export default function Products() {
  return (
    <div>
      <Header />
      <div className="yes">
        <RootLayout />
        <Table />
      </div>
    </div>
  );
}
