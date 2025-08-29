export default function Planejar() {
  return (
    <section className="pt-15 flex justify-center text-(--text-color)">
      <form
        action=""
        className="bg-white border-2 border-(--primary) rounded-lg p-5 text-center w-120 flex flex-col items-center">
        <label htmlFor="dates" className="pb-3">
          DATAS
        </label>
        <div className="flex flex-row gap-8" id="dates">
          <div className="flex flex-col">
            <label htmlFor="startDate">Entrada:</label>
            <input
              type="date"
              id="startDate"
              className="border-1 rounded-xl border-(--action) p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="endDate">Entrada:</label>
            <input
              type="date"
              id="endDate"
              className="border-1 rounded-xl border-(--action) p-2"
            />
          </div>
        </div>
        <label htmlFor="destination" className="pt-4 pb-1">
          DESTINO
        </label>
        <input
          type="text"
          id="destination"
          placeholder="destino"
          className="text-center border-1 border-(--action) rounded-lg p-2 w-75"
        />
        <label htmlFor="budget" className="pt-4 pb-1">
          ORÇAMENTO
        </label>
        <input
          type="text"
          id="budget"
          placeholder="orçamento"
          className="text-center border-1 border-(--action) rounded-lg p-2 w-75"
        />
        <div className="pt-6">
          <input
            type="submit"
            value={"Planejar Rota"}
            className="bg-(--primary) text-white rounded-lg p-2 cursor-pointer hover:bg-(--action) hover:scale-105 duration-300 w-60"
          />
        </div>
      </form>
    </section>
  );
}
