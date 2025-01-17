import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import { useState } from "react";
import Section from "../Section/Section";
import Tabs from "../TabButton/Tabs";

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    const tabContent = !selectedTopic ? 'Please Select a Topic' : <div>
        <h2>{EXAMPLES[selectedTopic].title}</h2>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
            {EXAMPLES[selectedTopic].code}
        </pre>
    </div>

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs ButtonContainer="menu"
                buttons={<>
                    <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Component</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
                </>}>
                {tabContent}
            </Tabs>
        </Section>
    );
}