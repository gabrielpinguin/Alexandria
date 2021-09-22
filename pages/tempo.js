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

export async function getStaticProps() {
    console.log('->>>>>>>>>>>> Passando pelo Back');
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();
    
    return {
        props: {
            staticDateString
        }
    }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default Tempo;