const TypeBasic=()=>{
    const users:string[]=['chiquita','katy'];
    const userAny:(string|number)[]=['juan',1,'francisco',2];

    return (
        <>
        <h2>Type Basic Component</h2>
        {users.map((e,i)=>{
            return(<p key={i}>{e}</p>)
        })}
        <br/>
        {userAny.map((e,i)=><p key={i}>{e}</p>)}
        </>
    )

}

export default TypeBasic;