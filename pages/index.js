import Link from 'next/link'

function Home() {
    return (<div>
        <h1>Home</h1>
        
        <Link href="/sobre">
            <a>Acesse a pagina Sobre</a>
        </Link>
        <Link href="/tempo">
            <a>Acesse a pagina Tempo</a>
        </Link>
    </div>)
}

export default Home