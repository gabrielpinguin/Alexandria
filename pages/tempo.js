import Link from 'next/link'

function Tempo(props){ 
    console.log('->>>>>>>>>>>> Passando pelo front')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estatico)</div>
        </div>
    )
}

export function getStaticProps() {
    console.log('->>>>>>>>>>>> Passando pelo Back')
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();
    
    return {
        props: {
            staticDateString
        }
    }
}

export default Tempo;