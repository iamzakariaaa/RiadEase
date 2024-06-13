import Button from "../../components/Button";
import CreateRiadForm from "./CreateRiadForm";
import Modal from "../../components/Modal";

function AddRiad() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="riad-form">
          <Button>Add new riad</Button>
        </Modal.Open>
        <Modal.Window name="riad-form">
          <CreateRiadForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddRiad() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new riad
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateRiadForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddRiad;
