type HomeProps = {
  firstText: string;
  name: string;
  writeup: string;
};
const Home = ({ firstText, name, writeup }: HomeProps) => {
  return (
    <>
      <p className="text-xs text-white md:text-2xl">{firstText}</p>
      <p className=" text-3xl uppercase text-white md:text-6xl">{name}</p>
      <p className="text-xs text-white md:text-xl">{writeup}</p>
    </>
  );
};
export default Home;
