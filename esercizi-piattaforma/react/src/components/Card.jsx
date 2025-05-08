const Card = ({ children }) => {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-6 m-16 max-w-[300px] shadow-md transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg">
        {children}
      </div>
    );
  };
  
  export default Card;