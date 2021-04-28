import { useUser } from "./hooks/useUser";

const UserComponent = () => {
    const { loading, users,apiData,changePage } = useUser();

    return (
        <>
            <h2>List Users</h2>
            {loading ? <div className="alert alert-warning">Loading ......</div> :
                <>
                    <div className="d-flex">
                        <button className="button btn-info " style={{'marginRight':'10px'}} onClick={()=>changePage({type:'back',page:apiData.page})}> ⏮ </button>
                        <button className="button btn-info" onClick={()=>changePage({type:'next',page:apiData.page})}> ⏩ </button>
                    </div>
                    <div>
                        <h5>Page:{apiData.page}</h5>
                    </div>
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Avatar</th>
                                <th>Nombre</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((e, i) => {
                                return (
                                    <tr key={e.id}>
                                        <td><img src={e.avatar} alt="user profile" /></td>
                                        <td>{e.first_name}</td>
                                        <td>{e.email}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </>
            }
        </>

    )
}
export default UserComponent;