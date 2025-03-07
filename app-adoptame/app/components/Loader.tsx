const Loader = () => {
    return (
      <div className="flex  h-screen flex-col items-center justify-center bg-[#DFC3BB] p-4 rounded">
        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-2 text-[#865E53] text-lg font-bold animate-pulse">
          Cargando<span className="inline-block animate-bounce">.</span>
          <span className="inline-block animate-bounce delay-150">.</span>
          <span className="inline-block animate-bounce delay-300">.</span>
        </p>
      </div>
    );
  };

export default Loader;