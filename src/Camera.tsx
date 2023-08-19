import React, {useState, useRef, useEffect} from 'react';
import GridLayout from "react-grid-layout";
import Modal from "react-modal";

function Camera(){
const [isActive, setIsActive] = useState(false);
const [openDialog, setOpenDialog] = useState(false);
const handleClickSvg1 = () => {
	setIsActive(!isActive);
	setOpenDialog(true);
  };

  const handleClickSvg2 = () => {
	setIsActive(!isActive);
	setOpenDialog(true);
  };

  const handleCloseDialog = () => {
	setOpenDialog(false);
  };

  const layout = [
    { i: "camera1",        x: 0, y: 0, w: 2, h: 2 },
    { i: "camera2",        x: 3, y: 0, w: 2, h: 2 },
    { i: "camera3",        x: 6, y: 0, w: 2, h: 2 },
    { i: "camera4",        x: 0, y: 3, w: 2, h: 2 },
    { i: "camera5",        x: 3, y: 3, w: 2, h: 2 },
    { i: "camera6",        x: 6, y: 3, w: 2, h: 2 },
  ];

return (
<>
<button onClick={handleClickSvg1}>Cameras</button>
  <Modal
  className="Modal"
        isOpen={openDialog}
        onRequestClose={handleCloseDialog}
      >
      <h2>Cameras (6)</h2>
  <div>
           <button onClick={handleCloseDialog} color="primary">
            Fechar
          </button>
  </div>
  <GridLayout cols={12} rowHeight={126} width={1200} layout={layout}>
		<div  key="camera1">
		 <figure>
			<img src="https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia27280/hidroponia-cpt.jpg" width="300px" height="auto"/>
  <figcaption>Camera 1</figcaption>
</figure>
			</div>
		<div  key="camera2">
		 <figure>
			<img src="https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia27280/hidroponia-cpt.jpg" width="300px" height="auto"/>
  <figcaption>Camera 2</figcaption>
</figure>
		</div>
		<div  key="camera3">
		 <figure>
			<img src="https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia27280/hidroponia-cpt.jpg" width="300px" height="auto"/>
  <figcaption>Camera 3</figcaption>
</figure>
		</div>
		<div  key="camera4">
		 <figure>
			<img src="https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia27280/hidroponia-cpt.jpg" width="300px" height="auto"/>
  <figcaption>Camera 4</figcaption>
</figure>
		</div>
		<div  key="camera5">
		 <figure>
			<img src="https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia27280/hidroponia-cpt.jpg" width="300px" height="auto"/>
  <figcaption>Camera 5</figcaption>
</figure>
		</div>
		<div  key="camera6">
		 <figure>
			<img src="https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia27280/hidroponia-cpt.jpg" width="300px" height="auto"/>
  <figcaption>Camera 6</figcaption>
</figure>
		</div>
  </GridLayout>
	  </Modal>
</>
);
}
export default Camera;
