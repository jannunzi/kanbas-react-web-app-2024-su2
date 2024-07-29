export default function PassingFunctions({
  theFunction,
}: {
  theFunction: (hello: string) => void;
}) {
  return (
    <div>
      <h2>Passing Functions</h2>
      <button
        onClick={() => theFunction("Hello World")}
        className="btn btn-primary"
      >
        Invoke the Function
      </button>
      <hr />
    </div>
  );
}
