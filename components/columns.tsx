import NewTodoDialog from "./add-new-dialog";
import Column from "./column";
export default function Columns() {
  return (
    <div>
      <NewTodoDialog />
      <section className="mt-10 flex gap-6 lg:gap-12">
        <Column title="To Do" status="TODO" />
        <Column title="In Progress" status="IN_PROGRESS" />
        <Column title="Done" status="DONE" />
      </section>
    </div>
  );
}
