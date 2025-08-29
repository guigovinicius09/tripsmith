export default function Home() {
  return (
    <section>
      <div className="allCards flex flex-row gap-8 pt-16 justify-center">
        <div className="flex flex-col items-center border-3 border-(--primary) bg-white rounded-2xl w-100 h-95 p-3 hover:scale-110 transition-all ease-in-out duration-400">
          <img
            src="https://media.istockphoto.com/id/1347665170/photo/london-at-sunset.jpg?s=612x612&w=0&k=20&c=MdiIzSNKvP8Ct6fdgdV3J4FVcfsfzQjMb6swe2ybY6I="
            alt="london picture"
            className="w-90 h-55 rounded-lg"
          />
          <h3 className="text-2xl text-(--text-color) pb-8 pt-3">Londres</h3>
          <a
            href=""
            className="bg-(--action) w-60 h-10 flex items-center justify-center text-white text-2xl rounded-lg hover:bg-(--primary) transition-all duration-350 hover:scale-110">
            Confira
          </a>
        </div>
        <div className="flex flex-col items-center border-3 border-(--primary) bg-white rounded-2xl w-100 h-95 p-3 hover:scale-110 transition-all ease-in-out duration-400">
          <img
            src="https://media.istockphoto.com/id/539115110/pt/foto/colosseum-em-roma-e-manh%C3%A3-de-sol-it%C3%A1lia.jpg?s=612x612&w=0&k=20&c=UJgNdZwEeoznZvOusoUoEtG6or5nweBNJxZbPxmi7dM="
            alt="rome picture"
            className="w-90 h-55 rounded-lg"
          />
          <h3 className="text-2xl text-(--text-color) pb-8 pt-3">Roma</h3>
          <a
            href=""
            className="bg-(--action) w-60 h-10 flex items-center justify-center text-white text-2xl rounded-lg hover:bg-(--primary) transition-all duration-350 hover:scale-110">
            Confira
          </a>
        </div>
        <div className="flex flex-col items-center border-3 border-(--primary) bg-white rounded-2xl w-100 h-95 p-3 hover:scale-110 transition-all ease-in-out duration-400">
          <img
            src="https://media.istockphoto.com/id/1390815938/es/foto/ciudad-de-tokio-en-jap%C3%B3n.jpg?s=612x612&w=0&k=20&c=Vf3r1Qf3h-wRyrxOiZQBpZpzxjT3G3sLypwmbqgQxtU="
            alt="tokyo picture"
            className="w-90 h-55 rounded-lg"
          />
          <h3 className="text-2xl text-(--text-color) pb-8 pt-3">Tóquio</h3>
          <a
            href=""
            className="bg-(--action) w-60 h-10 flex items-center justify-center text-white text-2xl rounded-lg hover:bg-(--primary) transition-all duration-350 hover:scale-110">
            Confira
          </a>
        </div>
        <div className="flex flex-col items-center border-3 border-(--primary) bg-white rounded-2xl w-100 h-95 p-3 hover:scale-110 transition-all ease-in-out duration-400">
          <img
            src="https://media.istockphoto.com/id/1454217037/photo/statue-of-liberty-and-new-york-city-skyline-with-manhattan-financial-district-world-trade.jpg?s=612x612&w=0&k=20&c=6V54_qVlDfo59GLEdY2W8DOjLbbHTJ9y4AnJ58a3cis="
            alt="new york picture"
            className="w-90 h-55 rounded-lg"
          />
          <h3 className="text-2xl text-(--text-color) pb-8 pt-3">
            Nova Iorque
          </h3>
          <a
            href=""
            className="bg-(--action) w-60 h-10 flex items-center justify-center text-white text-2xl rounded-lg hover:bg-(--primary) transition-all duration-350 hover:scale-110">
            Confira
          </a>
        </div>
      </div>
      <div className="text-center text-white pt-25">
        <a
          href="./plan"
          className="bg-(--secondary) p-5 text-2xl rounded-2xl hover:bg-(--action) transition-all duration-400">
          Planeje seu roteiro!
        </a>
      </div>
    </section>
  );
}
