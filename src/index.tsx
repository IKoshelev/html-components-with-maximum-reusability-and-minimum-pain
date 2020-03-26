
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./index.less";
import { SelectBare, Select } from './Select';

const items = [
    "apple",
    "banana",
    "orange"
];

function App() {

    const [selectedItem, setSelectedItem] = React.useState<string>();


    return <Select
        items={items}
        selectedItem={selectedItem}
        getKey={(i) => i}
        onSelect={setSelectedItem}
        allowSelectUndefind={false}
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}
    />;
}

ReactDOM.render(<App />, document.getElementById('root'));
