import React, {useState, useRef, useEffect} from 'react';
import GridLayout from "react-grid-layout";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import { ReactComponent as Bomba } from './bomba.svg';
import { ReactComponent as Bancada } from './bancada.svg';
import { ReactComponent as Copo } from './copo.svg';
import './Teste.css'

function Teste() {
	const [draw, redraw] = useState(0);
	 const [fillColor, setFillColor] = useState('#fff');

  const changeColor = () => {
	setFillColor(prevColor => (prevColor === '#00ff00' ? 'blue' : '#00ff00'));
	setFillColor("#fff");
  };

	const ref1 = useRef<any>();
	const ref2 = useRef<any>();
	const ref3 = useRef<any>();
	const ref4 = useRef<any>();

	const [lines] = useState([
			{
				start: "ref1",
				end: "ref2",
				color: "blue",
				stroke: 2,
				dashness: { animation: 10.0 },
			},
			{
				start: "ref2",
				end: "ref3",
				color: "blue",
				stroke: 2,
				dashness: { animation: 10.0 },
				labels:<div className="status__on">700l/h</div>,
			},
			{
				start: "ref3",
				end: "ref4",
				stroke: 2,
				color: "blue",
				path: "grid",
				dashness: { animation: 5.0 },
			},
		]);

	const layout = [
		{ i: "bomba",        x: 0, y: 0, w: 2, h: 2 },
		{ i: "reservatorio", x: 0, y: 2, w: 2, h: 3 },
		{ i: "bancada",      x: 2, y: 3, w: 2, h: 3.5 },
		{ i: "copo",         x: 3, y: 0, w: 2, h: 1.5 },
	];

	function onDrag(e: any, data: any) {
		redraw(Math.random());
	}

  return (
	<>
	<GridLayout cols={12} rowHeight={50} width={1200} margin={[30, 50]} onDrag={onDrag} layout={layout}>
		<div id="ref1" key="reservatorio" className="container">
			<meter min="900" value="1800" max="2000"></meter>
					  <p>1800l/2000l</p>
				 <table>
					<th>Reservatório</th>
					<tr><td className="status__on">ON</td></tr>
				</table>
				 <table>
					  <tr><th>Temp.</th><th>PPM</th><th>COD</th></tr>
					  <tr><td>In. 25C</td><td>30</td><td>122w</td></tr>
					  <tr><td>Ex. 30C</td></tr>
				</table>
		</div>
		<div id="ref2" key="bomba" className="container">
			<Bomba className="objeto"/>
				 <table>
					 <th>Bomba de Água</th>
					 <tr><td className="status__on">ON</td></tr>
				</table>
				 <table>
					  <tr><th>Consumo</th></tr>
					  <tr><td>122w</td></tr>
				</table>
		</div>
		<div id="ref3" key="bancada" className="container">
			<Bancada className="objeto" style={{width: "150%"}}/>
				 <table>
					 <th>Bancada</th>
					 <tr><td className="status__on">ON</td></tr>
				</table>
				<table>
					  <tr><th>Data</th><th>Fileira</th></tr>
					  <tr><td>20/08</td>1</tr>
				</table>
		</div>
		<div id="ref4" key="copo" className="container">
			<Copo className="objeto"/>
				 <table>
					 <th>Copo 30x</th>
				</table>
				<table>
					  <tr><th>Qnt.</th><th>Tipo</th></tr>
					  <tr><td>30x</td>Alface</tr>
				</table>
		</div>
	</GridLayout>
		<Xwrapper>
			{lines.map((line, i) => (
				<Xarrow key={i} start={line.start} end={line.end} color={line.color} dashness={line.dashness} labels={line.labels} strokeWidth={line.stroke} animateDrawing={true} headSize={0}/>
			))}
		</Xwrapper>
	</>
  );
}

export default Teste;
