import Spinner from "../../components/Spinner";
import RiadRow from "./RiadRow";
import { useRiads } from "./useRiads";
import Table from "../../components/Table";
import Menus from "../../components/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../components/Empty";

function RiadTable() {
  const { isLoading, riads } = useRiads();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!riads.length) return <Empty resourceName="riads" />;

  // 1) FILTER
  const filterValue = searchParams.get("discount") || "all";

  let filteredRiads;
  if (filterValue === "all") filteredRiads = riads;
  if (filterValue === "no-discount")
    filteredRiads = riads.filter((riad) => riad.discount === 0);
  if (filterValue === "with-discount")
    filteredRiads = riads.filter((riad) => riad.discount > 0);

  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedRiads = filteredRiads.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Riad</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          // data={riads}
          // data={filteredRiads}
          data={sortedRiads}
          render={(riad) => <RiadRow riad={riad} key={riad.id} />}
        />
      </Table>
    </Menus>
  );
}

export default RiadTable;
