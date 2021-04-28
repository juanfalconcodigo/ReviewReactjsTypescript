import useForm from './hooks/useForm';

const FormComponent = () => {

    const { state, onChange } = useForm({ email: '', password: '' });
    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log(state)
    }
    return (
        <>
            <div>
                <form onSubmit={onSubmit} autoComplete="off">
                    <input placeholder="email" className="form-control" type="text" name="email" id="email" onChange={({ target }) => onChange(target.value, 'email')} value={state.email} />
                    <input placeholder="password" className="form-control" type="password" name="password" id="password" onChange={({ target }) => onChange(target.value, 'password')} value={state.password} />
                    <button className="button">Login</button>
                </form>
            </div>
            <div>
                <pre>
                    {JSON.stringify(state, null, 2)}
                </pre>
            </div>
        </>
    )
}

export default FormComponent;