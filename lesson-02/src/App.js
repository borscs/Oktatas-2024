import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from './data.js';
import Header from "./components/Header/Header";
import {CoreConcept} from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {Fragment, useState} from "react";
import {EXAMPLES} from './data.js';

function App() {
	console.log('elso');
	//let tabContent = 'Please click a button!';
	const [tabContent, seTabContent] = useState('components')

	const handlerSelected = (element) => {
		switch (element) {
			case 'Components' :
				return seTabContent('components');
			case 'JSX':
				return seTabContent('jsx');
			case 'Props' :
				return seTabContent('props');
			default :
				return seTabContent('state');
		}
	}
	// function helper(){
	// 	handlerSelected('sajat stringet');
	// }
	return (
		<>
			<Header/>
			<main>
				{/*<section id="core-concepts">*/}
				{/*	<h2>Core Concepts</h2>*/}
				{/*	<ul>*/}
				{/*		<CoreConcept*/}
				{/*			title={CORE_CONCEPTS[0].title}*/}
				{/*			description={CORE_CONCEPTS[0].description}*/}
				{/*			image={CORE_CONCEPTS[0].image}*/}
				{/*		/>*/}
				{/*		<CoreConcept {...CORE_CONCEPTS[1]} />*/}
				{/*		<CoreConcept {...CORE_CONCEPTS[2]} />*/}
				{/*		<CoreConcept {...CORE_CONCEPTS[3]} />*/}
				{/*	</ul>*/}
				{/*</section>*/}
				<section id="core-concepts">
					<h2>Core Concepts2</h2>
					<ul>
						{CORE_CONCEPTS.map((core, index) => (
							<CoreConcept {...core} key={index}/>
						))}
					</ul>
				</section>
				<section id='examples'>
					<h2>Example</h2>
					<menu>
						{/*<TabButton handleSelected={() => handlerSelected('Components')}>Components</TabButton>*/}
						{/*<TabButton handleSelected={() => handlerSelected('jsX')}>JSX</TabButton>*/}
						<TabButton handleSelected={handlerSelected} isSelected={tabContent === 'components'}>Components</TabButton>
						<TabButton handleSelected={handlerSelected} isSelected={tabContent === 'jsx'}>JSX</TabButton>
						<TabButton handleSelected={handlerSelected} isSelected={tabContent === 'props'}>Props</TabButton>
						<TabButton handleSelected={handlerSelected} isSelected={tabContent === 'state'}>State</TabButton>
					</menu>
					<div id="tab-content">
						<h3>{EXAMPLES[tabContent].title}</h3>
						<p>{EXAMPLES[tabContent].description}</p>
						<pre>
							<code>{EXAMPLES[tabContent].code}</code>
						</pre>
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
