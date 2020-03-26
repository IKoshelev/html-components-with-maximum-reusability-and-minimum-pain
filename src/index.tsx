
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./index.less";
import { SelectBare, Select } from './Select';



function App() {

    const items = [
        "apple",
        "banana",
        "orange"
    ];

    const [selectedItem, setSelectedItem] = React.useState<string>();

    return <>
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
    </>
}

ReactDOM.render(<App />, document.getElementById('root'));
