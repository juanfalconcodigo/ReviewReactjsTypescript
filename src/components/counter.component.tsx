
import { useCounter } from './hooks/useCounter';

const CounterComponent = () => {
    const {counter,changeCounter}=useCounter(100);

    return (
        <>
            <h2>Counter Component</h2>
            <p>{counter}</p>
            <div className="d-grid gap-2">
                <button className="btn btn-info" onClick={() => changeCounter(20)}>Add</button>
                <button className="btn btn-dark" onClick={() => changeCounter(-20)}>Diminish</button>
            </div>

        </>
    )
}

export default CounterComponent;