interface Persona {
    name: string;
    lastName: string;
    address: Address;
    status?: boolean;
}

interface Address {
    country: string;
    address: string;
}
const LiteralObject = () => {

    const persona: Persona = {
        name: 'Francisco',
        lastName: 'Falcon',
        address: {
            country: 'Peru',
            address: 'Chosica'
        },
        status: true
    }
    return (
        <>
            <h2>Object Literal</h2>
            <pre>
                {JSON.stringify(persona, null, 2)}
            </pre>
        </>

    )
}

export default LiteralObject;