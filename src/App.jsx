import './output.css'
import { useState } from 'react'
import { motion } from "framer-motion"
import SwitchSelector from "react-switch-selector";
import AccordionBike from './Accordion';

function App(){
    const [isSwapped, setIsSwapped] = useState(false)

    const handleSwap = () => {
      setIsSwapped(!isSwapped)
    }

    return (
        <section>
            <div style={{height: 40, width: 100 }}>
                <SwitchSelector
                    backgroundColor={"#353b48"}
                    selectedBackgroundColor={"#000"}
                    // selectedFontColor={"000"}
                    initialSelectedIndex={0}
                    onChange={() => handleSwap()}
                    options={[
                    {
                        label: 'Blue',
                        value: true
                    },
                    {
                        label: 'Red',
                        value: 20
                    }
                    ]}
            />
            </div>
        <div className="container-bike container-bike-component">
            <div className="bike">
                <motion.div
                    className="child"
                    initial={{ left: 0 }}
                    animate={{ left: isSwapped ? "calc(100% - 228px)" : 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                >
                <AccordionBike />
                </motion.div>
                <motion.div
                    className="child"
                    initial={{ right: 0 }}
                    animate={{ right: isSwapped ? "calc(100% - 128px)" : 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                />
      </div>
      <button onClick={handleSwap} className="px-6 py-3 text-lg">
        Intercambiar Cubos
      </button>
    </div>
    </section>

    )
}

export default App