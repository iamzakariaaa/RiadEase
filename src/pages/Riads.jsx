import RiadTable from "../features/riads/RiadTable";
import Heading from "../components/Heading";
import Row from "../components/Row";
import AddRiad from "../features/riads/AddRiad";
import RiadTableOperations from "../features/riads/RiadTableOperations";

function Riads() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Riads</Heading>
        <RiadTableOperations />
      </Row>

      <Row>
        <RiadTable />
        <AddRiad />
      </Row>
    </>
  );
}

export default Riads;
