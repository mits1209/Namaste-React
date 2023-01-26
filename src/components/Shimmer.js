const Shimmer = () => {
    return (<div className='restaurant-List'>
        {Array(20)
        .fill("")
        .map((e, index) => (
        <div key={index} lassName="Shimmer-card"></div>
        ))}
            
           </div>);
};
export default Shimmer;