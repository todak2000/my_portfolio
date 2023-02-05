type HomeProps = {
    firstText: string;
    name: string;
    writeup: string;
}
 const Home =({firstText, name, writeup}:HomeProps)=>{

    return(
        <>
        <p className="text-xs md:text-2xl text-white">{firstText}</p>
        <p className=" text-3xl md:text-6xl text-white uppercase">{name}</p>
        <p className="text-xs md:text-xl text-white">{writeup}</p>
        </>
    )
};
export default Home;