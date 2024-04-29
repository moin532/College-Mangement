import { Modal ,Label, TextInput} from "flowbite-react";
import { useState ,useEffect} from "react";
import { Button } from "../../Button";
import {useSelector, useDispatch} from 'react-redux';
import { MotivateNote } from "../../action/StudentAction";
import {toast} from 'react-toastify';

const NoteModal = () => {

  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [note, setNote] = useState('')

  const {notes,error} = useSelector((state)=>state.noteMotivate);



useEffect(()=>{
  if(error){
     toast.error(error,"errror")
  }

  if(notes){
    toast.success(notes)
  }

  
},[notes , error])


  const AddNote=(e)=>{

      e.preventDefault();
      setOpenModal(false)
      
      dispatch(MotivateNote({note}));
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className=" w-44 mb-2">
        Add A note{" "}
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add A Simple Quite To Motivate</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-5xl leading-relaxed text-gray-500 dark:text-gray-400">
              Note :- The Input Text Display in Home-Page! Make Sure This Content Will Be Help To a Student or Motivate
              
            </p>
            
            
          
        <TextInput id="large" type="text" sizing="lg"  className=" font-bold  text-5xl  h-11" placeholder="Add A Note" value={note} onChange={(e)=>setNote(e.target.value)}/>
    
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={AddNote}>Add Note</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NoteModal;
