import React, {useState, useRef, useEffect} from 'react';
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import GridLayout from "react-grid-layout";
import Modal from "react-modal";
import { ReactComponent as Bomba } from './bomba.svg';
import { ReactComponent as Reservatorio } from './reservatorio.svg';
import { ReactComponent as Bancada } from './bancada.svg';
import { ReactComponent as Copo } from './copo.svg';

function Mapa() {
const [draw, redraw] = useState(0);
const [isActive, setIsActive] = useState(false);
const [openDialog, setOpenDialog] = useState(false);

const ref1 = useRef<any>();
const ref2 = useRef<any>();
const ref3 = useRef<any>();
const ref4 = useRef<any>();

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
  const canvasStyle = {
  width: "100%",
  height: "65vh",
  // background: "#bdbdbd",
  overflow: "auto",
  display: "flex"
};

  const [lines] = useState([
    {
      start: ref1,
      end: ref2,
	  color: "blue",
      path: "grid",
	  stroke: 2,
      dashness: { animation: 10.0 },
    },
    {
      start: ref2,
      end: ref3,
	  color: "blue",
      path: "grid",
	  stroke: 2,
      dashness: { animation: 10.0 },
labels:<div className="ativo">700l/hr</div>,
    },
    {
      start: ref3,
      end: ref1,
	  stroke: 2,
	  color: "blue",
      path: "grid",
      dashness: { animation: 5.0 },
    },
    {
      start: ref3,
      end: ref4,
	  stroke: 2,
	  color: "blue",
      path: "grid",
      dashness: { animation: 5.0 },
    },
  ]);
  const layout = [
    { i: "bomba",        x: 0, y: 0, w: 1.5, h: 2 },
    { i: "reservatorio", x: 0, y: 1, w: 1, h: 5 },
    { i: "bancada",      x: 2, y: 0, w: 1.5, h: 3.5 },
    { i: "copo",         x: 4, y: 0, w: 1, h: 3 },
  ];
  function onDrag(e: any, data: any) {
redraw(Math.random());
}
return (
<>
  <div style={{ ...canvasStyle, position: "relative", color: "black" }} id="canvas">
  <GridLayout cols={12} rowHeight={50} width={1200} onDrag={onDrag} layout={layout}>
		<div className="borda" key="bomba">
<div className="conteudo">
  <Bomba ref={ref2} className="objeto" onClick={handleClickSvg1}/>
		<div className="bola" onClick={handleClickSvg1}/>
			<p className="nome">Bomba de Água</p>
</div>
		</div>
		<div className="borda" key="reservatorio" >
<div className="conteudo">
  <Reservatorio ref={ref1} 
  className="objeto"
		onClick={handleClickSvg2}>
		</Reservatorio>
				 <svg className="barra" width="35" height="55">
  <rect width="35" height="50" fill="rgb(0,0,255)" />
</svg>
		<p className="nome">Reservatório</p>
		<p className="limite">250ml</p>
		<div className="limite">Temp.:</div>
		<p>
		In.: 25ºC
		</p>
		<p>
		Ex.: 35ºC
		</p>
		<p className="limite">COD: 0.5 mg/L</p>
</div>
		</div>
		<div className="borda" key="bancada" >
<div className="conteudo">
  <Bancada ref={ref3} 
  className="objeto1"
		onClick={handleClickSvg2}/>
		<p className="nome">Bancada</p>
		<p className="limite">PPM: 22</p>
</div>
		</div>
		<div className="borda" key="copo" >
<div className="conteudo">
  <Copo ref={ref4} 
  className="objeto"
		onClick={handleClickSvg2}/>
		<p className="nome">Copo</p>
</div>
		</div>
	  </GridLayout>
  </div>
  <Modal
  className="Modal"
        isOpen={openDialog}
        onRequestClose={handleCloseDialog}
      >
      <h2>Bomba de Água</h2>
          <p>Status: ON</p>
          <p>Consumo médio: 12w</p>
          <p>Ligada a quanto tempo: 1hr</p>
          <p>Temporizador: 1hr</p>
          <button onClick={handleCloseDialog} color="primary">
            Fechar
          </button>
	  </Modal>
				<Xwrapper>
  {lines.map((line, i) => (
			<Xarrow key={i} start={line.start} end={line.end} color={line.color} dashness={line.dashness} labels={line.labels} strokeWidth={line.stroke} animateDrawing={true} headSize={0}/>
		  ))}
				</Xwrapper>
</>
);
}
export default Mapa;
