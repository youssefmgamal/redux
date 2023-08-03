export default function TaskUi({ id, description, isdone }) {
  // write UI
  return (
    <>
      <form>
        <p>{id}</p>
        <p>{description}</p>
        <p>{isdone ? "done" : "not done"}</p>
      </form>
    </>
  );
}
