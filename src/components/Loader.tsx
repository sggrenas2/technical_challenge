export const Loader = () => {
  return (
    <div className="grid w-full place-content-center space-x-2">
      <div className="flex items-center justify-center space-x-2">
        <span className="sr-only">Loading...</span>
        <div className="bg-azure-500 h-8 w-8 animate-bounce rounded-full [animation-delay:-0.3s]"></div>
        <div className="bg-azure-500 h-8 w-8 animate-bounce rounded-full [animation-delay:-0.15s]"></div>
        <div className="bg-azure-500 h-8 w-8 animate-bounce rounded-full"></div>
      </div>
    </div>
  );
};
