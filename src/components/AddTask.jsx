import "./AddTask.css";

function AddTask() {
  return (
    <div className="addtask">
      <input
        className="inp"
        type="text"
        placeholder="Digite o título da tarefa"
      />
      <input
        className="inp"
        type="text"
        placeholder="Digite a descrição da tarefa"
      />
      <button className="save">Salvar</button>
    </div>
  );
}

export default AddTask;
