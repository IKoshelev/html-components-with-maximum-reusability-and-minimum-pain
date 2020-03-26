
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./index.less";
import { SelectBare, Select, SelectForPOSTerminal, SelectRoller } from './Select';



function App() {

    const items = [
        "Apple",
        "Blueberry",
        "Cherry",
        "Grape",
        "Mango",
        "Nectarine",
        "Orange",
        "Pear",
        "Strawberry",
        "Watermelon"
    ];

    const [selectedItem, setSelectedItem] = React.useState<string>();

    return <>

        <div id='select-bare-text'>
            Minimum possible dropdown - bare dom elements,
            just add CSS :-)
        </div>

        <div id='select-bare'>

            <SelectBare
                items={items}
                selectedItem={selectedItem}
                getKey={(i) => i}
                onSelect={setSelectedItem}
                allowSelectUndefind={false}
                onOpen={() => console.log('open')}
                onClose={() => console.log('close')}
            />

        </div>

        <div id='select-desktop-text'>
            A classical, if simplistic, dropdown.
        </div>

        <div id='select-desktop'>

            <Select
                items={items}
                selectedItem={selectedItem}
                getKey={(i) => i}
                onSelect={setSelectedItem}
                allowSelectUndefind={false}
                onOpen={() => console.log('open')}
                onClose={() => console.log('close')}
            />

        </div>

        <div id='select-desktop-upward-opening-text'>
            Oh no! We need our dropdown to open up instead of down!
            And it's such an exotic requirment, that our dropdown does
            not do it by default ;-) ! But it is very modular, so
            we can easily add this mode ourselves!
        </div>

        <div id='select-desktop-upward-opening'>

            <Select
                items={items}
                selectedItem={selectedItem}
                getKey={(i) => i}
                onSelect={setSelectedItem}
                allowSelectUndefind={false}
                onOpen={() => console.log('open')}
                onClose={() => console.log('close')}
            />

        </div>

        <div id='select-pos-terminal-text'>
            How about on a Point-of-sales terminal
            with just a touch-screen? This version will
            show a big full-screen selection.
            And still the same DOM - only CSS changes.
        </div>

        <div id='select-pos-terminal'>

            <SelectForPOSTerminal
                items={items}
                selectedItem={selectedItem}
                getKey={(i) => i}
                onSelect={setSelectedItem}
                allowSelectUndefind={false}
                onOpen={() => console.log('open')}
                onClose={() => console.log('close')}
            />

        </div>

        <div id='select-roller-text'>
            This is a roller version. Click
            on the items to roll it. Through a combination
            of added DOM elements and CSS, internal logic of a
            Component can be reused, even though it
            has a totally different look.
        </div>

        <div id='select-roller'>

            <SelectRoller
                items={items}
                selectedItem={selectedItem}
                getKey={(i) => i}
                onSelect={setSelectedItem}
                allowSelectUndefind={false}
                onOpen={() => console.log('open')}
                onClose={() => console.log('close')}
            />

        </div>
    </>
}

ReactDOM.render(<App />, document.getElementById('root'));
